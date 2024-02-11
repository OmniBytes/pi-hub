import createClient from "openapi-fetch";

import type { paths } from "./types";

/**
 * weather.gov api
 *
 * FAQ: https://weather-gov.github.io/api/general-faqs
 *
 * SPEC: https://www.weather.gov/documentation/services-web-api
 *
 */

export function createWeatherApiClient() {
  return createClient<paths>({
    baseUrl: "https://api.weather.gov",
    headers: {
      "User-Agent": "(hub.omnibytes.io, contact@omnibytes.io)",
    },
  });
}
