import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { handleApiResponse } from "../handle-api-response";
// import { CreatePostSchema } from "@omnibytes/validators";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const weatherRouter = createTRPCRouter({
  getInfo: publicProcedure
    .input(z.object({ lat: z.number().nullish(), long: z.number().nullish() }))
    .query(async ({ ctx, input }) => {
      const { weatherApi } = ctx;
      const point = `${input.lat},${input.long}`;
      if (!input.lat || !input.long) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

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
