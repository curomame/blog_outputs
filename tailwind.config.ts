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
    },
  },
  plugins: [
    //@ts-ignore
    function({ addUtilities }) {
      const newUtilities = {
        '.h-screen-minus-48px': {
          height: 'calc(100vh - 48px)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
