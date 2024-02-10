import type { Config } from "tailwindcss";

import { addColorVar } from "./add-color-vars";
import { base } from "./base";

export default {
  content: base.content,
  presets: [base],
  plugins: [addColorVar],
  theme: {},
} satisfies Config;
