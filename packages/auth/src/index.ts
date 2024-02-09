import type { DefaultSession } from "next-auth";
// import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { env } from "../env";

// import { db, tableCreator } from "@omnibytes/db";

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // adapter: DrizzleAdapter(db, tableCreator),
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  // callbacks: {
  //   session: (opts) => {
  //     if (!("user" in opts)) throw "unreachable with session strategy";

  //     return {
  //       ...opts.session,
  //       user: {
  //         ...opts.session.user,
  //         id: opts.user.id,
  //       },
  //     };
  //   },
  // },
});
