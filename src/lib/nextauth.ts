import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { trpc } from "./trpc/serverClient";
import { userConfig } from "./config";

export const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      // The name to display on the sign-in form
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        /**
         * Fetch the user by their email (unsecure, used for next-auth credentials provider)
         */
        const res = await trpc.getUserByEmailUnsecure({
          email: credentials.email,
        });

        if (!res.success || !res.user?.password) {
          return null;
        }

        /**
         * Validate credentials and return the user if they are valid.
         *
         * We use the passwordCompareFunction from the user config to compare the
         * password from the credentials with the password from the user.
         *
         * This is a bcrypt compare function provided by the bcryptjs library.
         */
        const allowed = await userConfig.passwordCompareFunction(
          credentials.password,
          res.user.password
        );

        return allowed ? res.user : null;
      },
    }),
  ],
});
