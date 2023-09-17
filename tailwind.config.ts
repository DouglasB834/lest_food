import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--colorBtn)",
        segundary: "var(--colorsegundary)",
        textLinght: "var(--colortextLigth)",
        primaryColorBg: "var(--colorPrimary)",
        colorCardbg: "var(--colorCardbg)",
      },
      clipPath: {
        custom: "polygon(51% 59%, 100% 70%, 100% 100%, 0 100%, 0 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
