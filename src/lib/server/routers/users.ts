import { Prisma } from "@/lib/prisma";
import { publicProcedure } from "../trpc";
import { z } from "zod";
import { Permission } from "@/types/permission";
import { v4 as uuidv4 } from "uuid";

export const usersRouter = {
  /**
   * Update an users permissions.
   *
   * We must first check if the user has the ADMIN permission. If they do, we can update the
   * permissions of the user. If they do not, we must return an error.
   */
  updatePermissions: publicProcedure
    .input(z.object({ userId: z.string(), permissions: z.array(z.string()) }))
    .mutation(async ({ input }) => {
      const user = await Prisma.getUserPermissionsById(input.userId);
      if (!user) {
        return { success: false, message: "User not found" };
      }

      if (user.permissions.includes(Permission.ADMIN)) {
        return {
          success: false,
          message: "You cannot update the permissions of an admin",
        };
      }

      const res = await Prisma.updateUserPermissions(
        input.userId,
        input.permissions,
      );

      if (!res) {
        return { success: false, message: "Failed to update permissions" };
      }

      return { success: true, message: "Success" };
    }),

  /**
   * Get an user by their email. This is unsecure because it also fetches the users
   * password. This tRPC endpoint is only for the next-auth credentials provider.
   */
  getUserByEmailUnsecure: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ input }) => {
      const user = await Prisma.getUserByEmailUnsecure(input.email);

      return { user, success: true, message: "Success" };
    }),

  /**
   * Add a new user. This let's an admin add a new user to the database.
   *
   * It will generate a random password for the user and send it to their email.
   */
  addUser: publicProcedure
    .input(z.object({ auth: z.string(), email: z.string() }))
    .mutation(async ({ input }) => {
      // Verify that the user with the "auth" secret has the admin permission
      const authUser = await Prisma.getUserBySecret(input.auth);
      if (!authUser) {
        return { success: false, message: "Invalid auth secret" };
      }

      if (!authUser.permissions.includes(Permission.ADMIN)) {
        return { success: false, message: "You do not have permission" };
      }

      // Create the user in the database
      const user = await Prisma.createUser(input.email);
      if (!user) {
        return { success: false, message: "Failed to create user" };
      }

      /**
       * TODO: Send the user an email with their generated password
       */

      // return the newly created user (this includes the generated password)
      return { success: true, message: "Success", user };
    }),

  /**
   * add use permission TODO
   */
  addUserPermission: publicProcedure
    .input(
      z.object({ auth: z.string(), email: z.string(), permission: z.string() }),
    )
    .mutation(async ({ input }) => {
      // first verify that the "auth" is an admin
      // Prisma.getUserBySecret(auth)

      // check if they have admin perms
      return {};

      // if they do have admin perms
      // permission will be a string ("create_post")
      // Prisma.addUserPermission(email, permission)
    }),

  // removeUserPermission
  // updateUserPermissions
};
