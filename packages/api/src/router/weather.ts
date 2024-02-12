import { z } from "zod";

import { handleApiResponse } from "../handle-api-response";
// import { CreatePostSchema } from "@omnibytes/validators";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getInfo: publicProcedure
    .input(z.object({ lat: z.string(), long: z.string() }))
    .query(async ({ ctx, input }) => {
      const { weatherApi } = ctx;
      const point = `${input.lat},${input.long}`;

      const infoResp = await weatherApi.GET("/points/{point}", {
        params: {
          path: { point },
        },
      });

      const infoData = handleApiResponse(infoResp);
      console.log("info", infoData);

      // TODO: fetch url resp has

      return infoData;
    }),
});
