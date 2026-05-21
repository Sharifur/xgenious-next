import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    wpToken: string;
    wpUserId: number;
    wpEmail: string;
  }
  interface User {
    wpToken: string;
    wpUserId: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    wpToken: string;
    wpUserId: number;
    wpEmail: string;
  }
}
