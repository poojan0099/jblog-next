/** @type {import('tailwindcss').Config} */

const tailwindTypography = require("@tailwindcss/typography");
const plugin = require("tailwindcss/plugin");
const daisyui = require("daisyui");

// const themes = require('daisyui/src/colors/themes')

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
    });
});

// #a1e3ee

module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],


    // faf6fe

    theme: {
        extend: {
            typography: () => ({
                DEFAULT: {
                    css: {
                        "blockquote p:first-of-type::before": {
                            content: "none",
                        },
                        "blockquote p:first-of-type::after": {
                            content: "none",
                        },
                        "code::before": { content: "none" },
                        "code::after": { content: "none" },
                        // code: {
                        // 	fontWeight: theme("fontWeight.normal"),
                        // 	backgroundColor: theme("colors.violet.100"),
                        // 	paddingBlock: theme("spacing")[1],
                        // 	paddingInline: theme("spacing")[1.5],
                        // 	borderRadius: theme("borderRadius.DEFAULT"),
                        // },
                    },
                },
            }),
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
            sm: 575,
            md: 767,
            lg: 991,
            xl: 1199,
            "2xl": 1440,
        },
        fontFamily: {
            satoshi: "Satoshi sans-serif",
        },
        colors: {
            transparent: 'transparent',
            brightBlue: "#f8faff"
        },
    },

    plugins: [daisyui, tailwindTypography, extendedTailwind, childrenSupport],
};
