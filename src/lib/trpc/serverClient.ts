import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/lib/server";

export const trpc = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
