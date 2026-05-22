import type { NextAuthConfig } from 'next-auth';

const PROTECTED_PREFIX = '/my-account';

export const authConfig: NextAuthConfig = {
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/login' },
  callbacks: {
    authorized({ auth: session, request: { nextUrl } }) {
      const isLoggedIn = !!session?.user;
      if (nextUrl.pathname.startsWith(PROTECTED_PREFIX) && !isLoggedIn) {
        // Returning false redirects to pages.signIn (/login)
        return false;
      }
      return true;
    },
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
