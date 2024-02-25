// @ts-expect-error no types
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

import { colors } from "./colors";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addColorVar({ addBase }: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const _colors = flattenColorPalette(colors);

  const vars = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    Object.entries(_colors).map(([color, value]) => [`--${color}`, value]),
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  addBase({
    ":root": vars,
  });
}
