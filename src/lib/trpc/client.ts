import { createTRPCReact } from "@trpc/react-query";

import { type AppRouter } from "@/lib/server";

export const trpc = createTRPCReact<AppRouter>();
