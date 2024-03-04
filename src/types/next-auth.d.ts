import { type Permission } from "@/types/permission";
import { type Announcement } from "@/types/announcement";
import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    //
    // Unique identifiers for the user (email, id, secret)
    id: string;
    secret: string;
    email: string;
    //
    // Announcements and permissions
    //
    permissions: Permission[];
    announcements: Announcement[];
    //
    // Encrypted password (bcrypt)
    //
    password?: string;
  }

  interface Session {
    user: User;
  }
}
