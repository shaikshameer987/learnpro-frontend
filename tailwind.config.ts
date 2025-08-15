import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sgrotesk: ["var(--font-sgrotesk)"],
                nunito: ["var(--font-nunito)"],
                roboto: ["var(--font-roboto)"],
            },
            colors: {
                border: "#E7E7E7",
                black: "#212121",
                error: "red",
            },
        },
    },
    plugins: [],
};
export default config;
