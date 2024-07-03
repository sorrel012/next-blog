import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightPink: '#ff92a9',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
