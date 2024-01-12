import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: {
          "50": "#eefbf6",
          "100": "#d5f6e7",
          "200": "#b1ecd4",
          "300": "#7adbba",
          "400": "#44c39c",
          "500": "#21a882",
          "600": "#13886a",
          "700": "#106c57",
          "800": "#0f5646",
          "900": "#0d473b",
          "950": "#062822",
        },
      },

      screens: {
        md: "860px",
      },
    },
  },
  plugins: [],
};
export default config;
