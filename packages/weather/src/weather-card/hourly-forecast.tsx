import { Fragment } from "react";
import { format } from "@formkit/tempo";

import type { AppRouterOutput } from "@omnibytes/api";

interface HourlyForecastProps {
  hourlyInfo: AppRouterOutput["weather"]["getInfo"]["hourly"];
}

export function HourlyForecast(props: HourlyForecastProps) {
  const { hourlyInfo } = props;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const periods = (hourlyInfo?.properties?.periods ?? []) as {
    temperature: number;
    temperatureUnit: string;
    startTime: string;
    number: number;
  }[];
  const data = periods.slice(0, 6);

  return (
    <Fragment>
      {data.map((hourForecast) => {
        const temp = hourForecast.temperature;
        const tempUnit = hourForecast.temperatureUnit;
        const time = format(new Date(hourForecast.startTime), "h A");

        return (
          <div
            key={hourForecast.number}
            className="flex w-full justify-between"
          >
            <p>{time}</p>

            <p>
              {temp}° {tempUnit}
            </p>
          </div>
        );
      })}
    </Fragment>
  );
}
