import { createTRPCRouter } from "../trpc";
import { authRouter } from "./auth";
import { postRouter } from "./post";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
