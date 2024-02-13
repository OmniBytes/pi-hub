/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useGeolocation } from "@uidotdev/usehooks";

import { api } from "@omnibytes/trpc/react";
import { Separator } from "@omnibytes/ui/separator";

import { WeatherIcon } from "./icons";

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
  const forcast = weather?.data?.forcast?.properties;
  const now = forcast?.periods[0];
  const isDaytime = now?.isDaytime as boolean;
  const temp = now?.temperature;
  const tempUnit = now?.temperatureUnit;
  const shortForcast = now?.shortForecast as string;

  if (weather.isLoading && !weather.data) return;
  return (
    <div className="flex flex-col items-center gap-2">
      <WeatherIcon shortForecast={shortForcast} isDaytime={isDaytime} />

      <p className="text-2xl font-bold">
        {temp}° {tempUnit}
      </p>

      <p className="text-xl">
        {city}, {state}
      </p>

      <Separator />
    </div>
  );
}
