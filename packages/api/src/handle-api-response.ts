import type { FetchOptions, FetchResponse } from "openapi-fetch";
import { TRPCError } from "@trpc/server";

export function handleApiResponse<T>(resp: FetchResponse<T, FetchOptions<T>>) {
  if (resp.data) {
    return resp.data;
  }

  if (resp.error) {
    // TODO: add log here
    switch (resp.response.statusText) {
      default:
        throw new TRPCError({ code: "BAD_REQUEST" });
    }
  }
}
