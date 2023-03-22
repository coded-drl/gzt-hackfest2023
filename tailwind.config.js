/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        // Break line
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                // custom color schemes here
                primary: {
                    purple: "#5D5CD6",
                    yellow: "#FFB800",
                    green: "#0DBF6A",
                    dark: "#151452",
                    light: "#D6D6F5"
                }
            },
            fontFamily: {
                // custom fonts here
                sora: ["Sora", "sans-serif"],
                rubik: ["Rubik", "sans-serif"]
            }
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: false,
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: "",
        darkTheme: "dark"
    }
};
