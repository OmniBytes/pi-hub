import {
  CloudDrizzle,
  // CloudLightning,
  CloudSun,
  Cloudy,
  Moon,
  // Snowflake,
  Sun,
  // Wind,
} from "lucide-react";

export function WeatherIcon(props: {
  shortForecast: string;
  isDaytime?: boolean;
}) {
  const { shortForecast, isDaytime = true } = props;
  if (!shortForecast) return;

  const styles = {
    size: 72,
    strokeWidth: 1.5,
  };

  switch (shortForecast.toLowerCase()) {
    case "patchy fog":
    case "mostly cloudy":
      return <Cloudy {...styles} />;

    case "slight chance light rain":
    case "slight chance light rain then mostly cloudy":
      return <CloudDrizzle {...styles} />;

    case "partly sunny":
    case "partly cloudy":
      return <CloudSun />;

    default:
      return isDaytime ? <Sun {...styles} /> : <Moon {...styles} />;
  }
}
