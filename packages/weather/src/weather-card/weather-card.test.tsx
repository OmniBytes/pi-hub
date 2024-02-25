// import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  test,
  vi,
} from "vitest";

import { WeatherCard } from ".";
import { render, screen, waitFor } from "../__tests__/utils";

vi.mock("@uidotdev/usehooks", async (importOriginal) => {
  const og = await importOriginal();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    // @ts-expect-error import everything
    ...og,

    useGeolocation: vi.fn().mockImplementation(() => ({
      latitude: 1,
      longitude: 2,
      loading: false,
    })),
  };
});

const server = setupServer(
  http.get("/api/trpc/weather.getInfo", (_ctx) => {
    return HttpResponse.json([
      {
        result: {
          data: {
            json: {
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
                      temperature: 83,
                      temperatureUnit: "F",
                      shortForecast: "sunny",
                    },
                  ],
                },
              },
            },
          },
        },
      },
    ]);
  }),
);

describe("WeatherCard", () => {
  //   const _user = userEvent.setup();

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("render current temp", async () => {
    render(<WeatherCard />);

    expect(screen.getByText("78° F", { exact: false })).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("83° F", { exact: false })).toBeInTheDocument(),
    );
  });
});
