/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useGeolocation } from "@uidotdev/usehooks";

import { api } from "@omnibytes/trpc/react";
import { Separator } from "@omnibytes/ui/separator";

import { WeatherIcon } from "../icons";
import { CurrentTemp } from "./current-temp";

export function WeatherCard() {
  const location = useGeolocation();
  const weather = api.weather.getInfo.useQuery(
    { lat: location.latitude, long: location.longitude },
    {
      enabled: !location.loading,
    },
  );

  // @ts-expect-error prop is there
  const relativeLocation = weather?.data?.info?.properties?.relativeLocation;
  const { city, state } = relativeLocation?.properties ?? {};

  // @ts-expect-error prop is there
  const forecast = weather?.data?.forecast?.properties;
  const now = forecast?.periods[0];
  const isDaytime = now?.isDaytime as boolean;
  const temp = now?.temperature;
  const tempUnit = now?.temperatureUnit;
  const shortforecast = now?.shortForecast as string;

  if (weather.isLoading && !weather.data) return;
  return (
    <div className="flex flex-col items-center gap-2">
      <WeatherIcon shortForecast={shortforecast} isDaytime={isDaytime} />

      <CurrentTemp city={city} state={state} temp={temp} tempUnit={tempUnit} />

      <Separator />
    </div>
  );
}
