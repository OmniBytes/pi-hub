// @ts-expect-error no types
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addColorVar({ addBase, theme }: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const colors = flattenColorPalette(theme.colors);

  const vars = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    Object.entries(colors).map(([color, value]) => [`--${color}`, value]),
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  addBase({
    ":root": vars,
  });
}
