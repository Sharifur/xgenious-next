/**
 * Genius Campaign — shared contact upsert + sequence enroll helper.
 *
 * Used by download-lead (free-software lead) and registration (new user).
 * Fire-and-forget: never throws, logs on failure, never blocks caller.
 *
 * API contract (from app/api/download-lead/route.ts):
 *   POST {host}/api/v1/contacts  { email, firstName, lastName, customFields, listId, tagIds }
 *   POST {host}/api/v1/contacts/{email}/enroll  { sequenceId }
 */

// Defaults supplied for registration flow (2026-09-10). Env vars take precedence.
const DEFAULT_LIST_ID = '46ce0562-da1b-4f72-8dcd-5c4a99772a9a';
const DEFAULT_TAG_IDS = ['b59be24d-4bdf-4f22-a3fe-86c5f6a17928'];

function resolveListId(explicit?: string): string | undefined {
  return explicit ?? process.env.GENIUS_CAMPAIGN_LIST_ID ?? DEFAULT_LIST_ID ?? undefined;
}

function resolveTagIds(explicit?: string[]): string[] | undefined {
  if (explicit && explicit.length) return explicit;
  const envTag = process.env.GENIUS_CAMPAIGN_TAG_ID;
  if (envTag) {
    // Support comma-separated env for multiple tags
    const parsed = envTag.split(',').map((s) => s.trim()).filter(Boolean);
    if (parsed.length) return parsed;
  }
  if (DEFAULT_TAG_IDS.length) return DEFAULT_TAG_IDS;
  return undefined;
}

export type GeniusContactOpts = {
  email: string;
  firstName?: string;
  lastName?: string;
  customFields?: Record<string, string>;
  listId?: string;
  tagIds?: string[];
};

function prefixCustomFields(fields?: Record<string, string>): Record<string, string> | undefined {
  if (!fields) return undefined;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(fields)) {
    const key = k.startsWith('xgenious_') ? k : `xgenious_${k}`;
    out[key] = v;
  }
  return out;
}

export async function pushToGeniusCampaign(opts: GeniusContactOpts): Promise<void> {
  const apiHost = process.env.GENIUS_CAMPAIGN_API_HOST;
  const apiKey = process.env.GENIUS_CAMPAIGN_API_KEY;

  if (!apiHost || !apiKey) {
    // No credentials — noop (matches previous download-lead guard)
    return;
  }

  const listId = resolveListId(opts.listId);
  const tagIds = resolveTagIds(opts.tagIds);
  const customFields = prefixCustomFields(opts.customFields);

  try {
    const contactRes = await fetch(`${apiHost}/api/v1/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify({
        email: opts.email,
        firstName: opts.firstName || undefined,
        lastName: opts.lastName || undefined,
        customFields,
        listId: listId || undefined,
        tagIds: tagIds || undefined,
      }),
    });

    if (!contactRes.ok) {
      console.error('[genius-campaign] contact upsert failed:', contactRes.status, await contactRes.text());
      return;
    }

    const sequenceId = process.env.GENIUS_CAMPAIGN_SEQUENCE_ID;
    if (sequenceId) {
      const enrollRes = await fetch(`${apiHost}/api/v1/contacts/${encodeURIComponent(opts.email)}/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey,
        },
        body: JSON.stringify({ sequenceId }),
      });
      if (!enrollRes.ok && enrollRes.status !== 409) {
        console.error('[genius-campaign] enroll failed:', enrollRes.status, await enrollRes.text());
      }
    }
  } catch (err) {
    console.error('[genius-campaign] push error:', err);
  }
}
