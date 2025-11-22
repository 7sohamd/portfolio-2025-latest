import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                serif: ['var(--font-serif)'],
                sans: ['var(--font-sans)'],
                mono: ['var(--font-mono)'],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'jap-black': '#1a1a1a',
                'jap-white': '#f4f4f0',
                'jap-red': '#cc3333',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
};
export default config;
