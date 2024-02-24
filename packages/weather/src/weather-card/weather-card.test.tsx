// import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { WeatherCard } from ".";
import { render, screen } from "../__tests__/utils";

vi.mock("@uidotdev/usehooks", async (importOriginal) => {
  const og = await importOriginal();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    // @ts-expect-error import everything
    ...og,

    useGeolocation: vi.fn().mockImplementation(() => ({
      latitude: "1",
      longitude: "2",
      loading: false,
    })),
  };
});

vi.mock("@omnnibytes/trpc/react", async (importOriginal) => {
  const og = await importOriginal();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    // @ts-expect-error import everything
    ...og,
    api: vi.fn().mockImplementation(() => ({
      weather: {
        getInfo: {
          useQuery: vi.fn(() => ({
            isLoading: false,

            data: {
              info: {
                properties: {
                  relativeLocation: {
                    properties: {
                      city: "city",
                      state: "state",
                    },
                  },
                },
              },
              forecast: {
                properties: {
                  periods: [
                    {
                      isDaytime: true,
                      temperature: 78,
                      temperatureUnit: "F",
                      shortForecast: "sunny",
                    },
                  ],
                },
              },
            },
          })),
        },
      },
    })),
  };
});

describe("WeatherCard", () => {
  //   const _user = userEvent.setup();

  test("render current temp", () => {
    render(<WeatherCard />);

    expect(screen.findByText("78° F")).toBeInTheDocument();
  });
});
