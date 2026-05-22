import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { verifyRecaptcha } from '@/lib/recaptcha';

const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username or Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        recaptchaToken: { label: 'reCAPTCHA', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        if (process.env.RECAPTCHA_SECRET_KEY) {
          const token = (credentials.recaptchaToken as string) ?? '';
          if (!token || !(await verifyRecaptcha(token))) return null;
        }

        try {
          const res = await fetch(`${WP_BASE}/wp-json/jwt-auth/v1/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
            cache: 'no-store',
          });
          if (!res.ok) return null;
          const data = await res.json();
          if (!data.token) return null;

          // Fetch user roles — only subscribers can log in here
          const userRes = await fetch(`${WP_BASE}/wp-json/wp/v2/users/me?context=edit`, {
            headers: { Authorization: `Bearer ${data.token}` },
            cache: 'no-store',
          });
          let wpUserId: number = data.user_id as number;
          if (userRes.ok) {
            const user = await userRes.json();
            const roles: string[] = user.roles ?? [];
            if (!roles.includes('subscriber')) return null;

            const emailVerified = user.meta?.email_verified;
            if (emailVerified === 0 || emailVerified === '0') {
              throw new Error('EmailNotVerified');
            }
            if (user.id) wpUserId = user.id;
          }

          return {
            id: String(wpUserId ?? data.user_email),
            email: data.user_email as string,
            name: data.user_display_name as string,
            wpToken: data.token as string,
            wpUserId,
          };
        } catch (err) {
          if (err instanceof Error && err.message === 'EmailNotVerified') throw err;
          return null;
        }
      },
    }),
  ],
});
