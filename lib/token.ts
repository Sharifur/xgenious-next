import crypto from 'crypto';

function secret() {
  return process.env.NEXTAUTH_SECRET ?? 'dev-secret-change-me';
}

export function generateVerificationToken(userId: number, email: string, sentAt: number): string {
  return crypto.createHmac('sha256', secret())
    .update(`verify:${userId}:${email.toLowerCase()}:${sentAt}`)
    .digest('hex');
}

export function verifyVerificationToken(
  sig: string,
  userId: number,
  email: string,
  sentAt: number,
): boolean {
  const expected = generateVerificationToken(userId, email, sentAt);
  return crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'));
}

export function generateResetToken(userId: number, email: string, requestedAt: number): string {
  return crypto.createHmac('sha256', secret())
    .update(`reset:${userId}:${email.toLowerCase()}:${requestedAt}`)
    .digest('hex');
}

export function verifyResetToken(
  sig: string,
  userId: number,
  email: string,
  requestedAt: number,
): boolean {
  const expected = generateResetToken(userId, email, requestedAt);
  return crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'));
}
