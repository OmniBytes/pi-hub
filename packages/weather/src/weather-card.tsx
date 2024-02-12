"use client";

import { Fragment } from "react";
import { useGeolocation } from "@uidotdev/usehooks";

import { api } from "@omnibytes/trpc/react";

export function WeatherCard() {
  const location = useGeolocation();
  const haveLocation = !!location.latitude && !!location.longitude;

  const weather = api.weather.getInfo.useQuery(
    { lat: location.latitude, long: location.longitude },
    {
      enabled: !haveLocation,
    },
  );

  console.log("get info", weather);

  return <Fragment>weather</Fragment>;
}
