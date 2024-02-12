import { createTRPCRouter } from "../trpc";
import { authRouter } from "./auth";
import { postRouter } from "./post";
import { weatherRouter } from "./weather";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  weather: weatherRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
