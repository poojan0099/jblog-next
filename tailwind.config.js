/** @type {import('tailwindcss').Config} */
const daisy = require("daisyui");
const tailwindTypography = require("@tailwindcss/typography");
const plugin = require("tailwindcss/plugin");


const childrenSupport = ({ addVariant }) => {
    addVariant("child", "& > *");
    addVariant("child-hover", "& > *:hover");
};

const extendedTailwind = plugin(function ({ addComponents }) {
    addComponents({
        ".axis-center": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        ".test": {
            border: "1px solid black !important",
        }
    });
});

module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "fade-in": {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-in-out",
            },
        },
        screen: {
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1280,
            "2xl": 1440,
        },
        fontFamily: {
            satoshi: "Satoshi sans-serif",
        },
    },

    daisyui: {
        styled: true,
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")[
                    "[data-theme=light]"
                    ],
                },
            },
            {
                dark: {
                    ...require("daisyui/src/theming/themes")[
                    "[data-theme=night]"
                    ],
                },
            },
        ],

        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
    },

    plugins: [tailwindTypography, extendedTailwind, daisy, childrenSupport],
};
