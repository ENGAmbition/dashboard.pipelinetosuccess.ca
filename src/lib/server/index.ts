import { router } from "./trpc";
import { usersRouter } from "./routers/users";

export const appRouter = router({
  ...usersRouter,
});

export type AppRouter = typeof appRouter;
