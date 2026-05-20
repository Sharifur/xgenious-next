import {
  S3Client,
  ListObjectsV2Command,
  DeleteObjectsCommand,
  HeadObjectCommand,
} from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

function buildS3Client() {
  return new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
  });
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const expected = `Bearer ${process.env.CRON_SECRET}`;

  if (!authHeader || authHeader !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const s3 = buildS3Client();
    const bucket = process.env.R2_BUCKET_NAME!;
    const cutoff = Date.now() - TWENTY_FOUR_HOURS;

    const keys: string[] = [];
    let continuationToken: string | undefined;

    do {
      const listResp = await s3.send(
        new ListObjectsV2Command({
          Bucket: bucket,
          Prefix: 'converted/',
          ContinuationToken: continuationToken,
        }),
      );

      for (const obj of listResp.Contents ?? []) {
        if (!obj.Key) continue;

        const head = await s3.send(
          new HeadObjectCommand({ Bucket: bucket, Key: obj.Key }),
        );

        const uploadedAt = head.Metadata?.uploadedAt;
        if (uploadedAt && new Date(uploadedAt).getTime() < cutoff) {
          keys.push(obj.Key);
        }
      }

      continuationToken = listResp.IsTruncated ? listResp.NextContinuationToken : undefined;
    } while (continuationToken);

    if (keys.length === 0) {
      return NextResponse.json({ deleted: 0, message: 'No expired objects found' });
    }

    await s3.send(
      new DeleteObjectsCommand({
        Bucket: bucket,
        Delete: {
          Objects: keys.map((Key) => ({ Key })),
          Quiet: true,
        },
      }),
    );

    return NextResponse.json({
      deleted: keys.length,
      message: `Deleted ${keys.length} expired object${keys.length === 1 ? '' : 's'}`,
    });
  } catch (err) {
    console.error('cleanup-images cron error', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Cleanup failed' },
      { status: 500 },
    );
  }
}
