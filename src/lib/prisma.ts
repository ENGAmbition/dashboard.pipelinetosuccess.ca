import { PrismaClient } from "@prisma/client";
import { User } from "next-auth";
import { v4 as uuidv4 } from "uuid";

export class Prisma extends PrismaClient {
  constructor() {
    super();
    this.$connect();
  }

  /**
   * Get a table
   * @param table The table to get
   * @returns The table
   */
  public static readonly getTable = (table: string) => {
    const global = globalThis as any;
    return global.prisma[table];
  };

  /**
   * Finds many rows in a table
   * @param table The table to find in
   * @param opts The find options
   * @returns The rows found
   */
  public static readonly findMany = async <T>(
    table: string,
    opts: any,
  ): Promise<T[]> => {
    try {
      const tableRef: any = Prisma.getTable(table);

      return (await tableRef.findMany(opts)) as T[];
    } catch {
      return [];
    }
  };

  /**
   * Finds a row in a table
   * @param table The table to find in
   * @param opts The find options
   * @returns The row found, or null if it doesn't exist
   */
  public static readonly findOne = async <T>(
    table: string,
    opts: any,
  ): Promise<T | null> => {
    try {
      const tableRef: any = Prisma.getTable(table);

      return (await tableRef.findFirst(opts)) as T | null;
    } catch {
      return null;
    }
  };

  /**
   * Creates a row in a table
   * @param table The table to create in
   * @param opts The creation options
   * @returns The created row
   */
  public static readonly create = async <T>(
    table: string,
    opts: any,
  ): Promise<T | null> => {
    try {
      const tableRef: any = Prisma.getTable(table);

      return (await tableRef.create(opts)) as T;
    } catch {
      return null;
    }
  };

  /**
   * Updates a row in a table
   * @param table The table to update
   * @param where The where clause to update
   * @param data The data to update
   * @returns The updated row
   */
  public static readonly update = async <T>(
    table: string,
    data: any,
  ): Promise<T | null> => {
    try {
      const tableRef: any = Prisma.getTable(table);

      return (await tableRef.update(data)) as T;
    } catch (e) {
      console.error(e);

      return null;
    }
  };

  /**
   * Deletes a row from a table
   *
   * @param table The table to delete from
   * @param opts The delete options
   * @returns The deleted row
   */
  public static readonly delete = async <T>(
    table: string,
    opts: any,
  ): Promise<T | null> => {
    try {
      const tableRef: any = Prisma.getTable(table);

      return (await tableRef.delete(opts)) as T;
    } catch {
      return null;
    }
  };

  /**
   * Get an users permissions by their id
   *
   * @param id The user's id
   * @returns The user's data
   */
  public static readonly getUserPermissionsById = async (
    id: string,
  ): Promise<User | null> => {
    return await Prisma.findOne("user", {
      where: { id },
      select: {
        permissions: true,
      },
    });
  };

  /**
   * Update an user's permissions
   *
   * @param id The user's id
   * @param permissions The user's new permissions
   */
  public static readonly updateUserPermissions = async (
    id: string,
    permissions: string[],
  ): Promise<User | null> => {
    return await Prisma.update("user", {
      where: { id },
      data: { permissions },
    });
  };

  /**
   * Fetch a user by their email (unsecure, used for next-auth credentials provider)
   *
   * @param email The user's email
   * @returns The user's data
   */
  public static readonly getUserByEmailUnsecure = async (
    email: string,
  ): Promise<User | null> => {
    return await Prisma.findOne("user", {
      where: { email },
    });
  };

  /**
   * Add a new user
   *
   * @param email The user's email
   * @returns The created user
   */
  public static readonly createUser = async (
    email: string,
  ): Promise<User | null> => {
    const generatedPassword = uuidv4();

    return await Prisma.create("user", {
      data: {
        email,
        password: generatedPassword,
      },
    });
  };

  /**
   * Get a user by their secret
   *
   * @param secret The user's secret
   * @returns The user's data
   */
  public static readonly getUserBySecret = async (
    secret: string,
  ): Promise<User | null> => {
    return await Prisma.findOne("user", {
      where: { secret },
      select: {
        email: true,
        permissions: true,
      },
    });
  };
}

// create a global prisma instance
const global = globalThis as any;
if (!global.prisma) {
  global.prisma = new Prisma();
}
