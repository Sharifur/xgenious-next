import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/login', error: '/auth-error' },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.wpToken = (user as any).wpToken as string;
        token.wpUserId = (user as any).wpUserId as number;
        token.wpEmail = (user as any).email as string;
      }
      return token;
    },
    session({ session, token }) {
      return {
        ...session,
        wpToken: token.wpToken as string,
        wpUserId: token.wpUserId as number,
        wpEmail: token.wpEmail as string,
      };
    },
  },
  providers: [],
};
