import NextAuth, { DefaultSession } from "next-auth"
import { SafeUser } from "."

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: SafeUser & DefaultSession["user"]
  }
}
