/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Fragment } from "react";
import { useGeolocation } from "@uidotdev/usehooks";

import { api } from "@omnibytes/trpc/react";

export function WeatherCard() {
  const location = useGeolocation();
  const weather = api.weather.getInfo.useQuery(
    { lat: location.latitude, long: location.longitude },
    {
      enabled: !location.loading,
    },
  );

  return (
    <Fragment>
      {/* @ts-expect-error make helper */}
      {weather?.data?.forcast.properties?.periods?.map((period: any) => {
        return (
          <Fragment key={period.number}>
            <p> {period.temperature} F</p>
            <p>{period.detailedForecast}</p>
          </Fragment>
        );
      })}
    </Fragment>
  );
}
