import { router } from "./trpc";
import { usersRouter } from "./routers/users";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const appRouter = router({
  users: {
    createUser: {
      async input(data: { email: string; password: string; permissions: string[] }) { 
        return data;
      },
      async resolve({ input }) {
        const { email, password, permissions } = input;
        
        try {
          // Create the user using Prisma
          const newUser = await prisma.user.create({
            data: {
              email,
              password,
              permissions,
            },
          });
          console.log('User created successfully:', newUser);
          return newUser;
        } catch (error) {
          console.error('Error creating user:', error);
          throw new Error('Failed to create user');
        }
      },
    },
  },
});

export type AppRouter = typeof appRouter;
