import NextAuth, { NextAuthOptions } from "next-auth";
import { HasuraAdapter } from "next-auth-hasura-adapter";
import Email from "next-auth/providers/email";
import Google from "next-auth/providers/google";
import Yandex from "next-auth/providers/yandex";
var jwt = require("jsonwebtoken");
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Yandex({
      clientId: process.env.YANDEX_CLIENT_ID!,
      clientSecret: process.env.YANDEX_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
      httpOptions: {
        // Default value is 3500ms. It might take more time to load in some cases.
        timeout: 10000,
      },
    }),

    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: HasuraAdapter({
    endpoint: process.env.HASURA_PROJECT_ENDPOINT!,
    adminSecret: process.env.HASURA_ADMIN_SECRET!,
  }),
  session: { strategy: "jwt" },
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jwt.sign(token!, secret, {
        algorithm: "HS256",
      });

      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jwt.verify(token!, secret, {
        algorithms: ["HS256"],
      });
      return decodedToken as JWT;
    },
  },
  callbacks: {
    async jwt({ token }: any) {
      return {
        ...token,
        "https://hasura.io/jwt/claims": {
          "X-hasura-allowed-roles": ["user"],
          "X-hasura-default-role": "user",
          "X-hasura-role": "user",
          "X-hasura-user-id": token.sub,
        },
      };
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      if (session?.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  debug: false,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
