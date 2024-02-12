"use client";

import { Fragment, useEffect } from "react";
import { useGeolocation } from "@uidotdev/usehooks";

export function WeatherCard() {
  const location = useGeolocation();

  useEffect(() => {
    if (location.latitude && location.longitude) {
      console.log("location", location);
    }
  }, [location.latitude, location.longitude]);

  return <Fragment>weather</Fragment>;
}
