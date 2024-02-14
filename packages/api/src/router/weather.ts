/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

      if (typeof input.lat !== "number" || typeof input.long !== "number") {
        console.error("lat/long not given", input);
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      const point = `${input.lat?.toFixed(4)},${input.long?.toFixed()}`;
      const infoResp = await weatherApi.GET("/points/{point}", {
        params: {
          path: { point },
        },
      });

      const infoData = handleApiResponse(infoResp);
      if (!infoData) {
        console.error("failed to fetch info", infoData);
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const path = {
        // @ts-expect-error type better
        wfo: infoData.properties.gridId,
        // @ts-expect-error type better
        x: infoData.properties.gridX,
        // @ts-expect-error type better
        y: infoData.properties.gridY,
      };

      // forcast, next 14 half days
      const forcastResp = await weatherApi.GET(
        "/gridpoints/{wfo}/{x},{y}/forecast",
        {
          params: {
            path,
          },
        },
      );

      // TODO: make this an opt in filter, to not spam the service
      // hourly
      const hourlyForcast = await weatherApi.GET(
        "/gridpoints/{wfo}/{x},{y}/forecast/hourly",
        {
          params: {
            path,
          },
        },
      );

      const forcastData = handleApiResponse(forcastResp);
      const hourlyData = handleApiResponse(hourlyForcast);

      return {
        info: infoData,
        forcast: forcastData,
        hourly: hourlyData,
      };
    }),
});
