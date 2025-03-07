import { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

/**
 * Main color palette. This will power both TailwndCSS utility classes as well as PrimeNG's theme settings & design tokens
 */
export const colors: Colors | ResolvableTo<RecursiveKeyValuePair<string, string>> | undefined = {
    slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cad5e2",
        400: "#90a1b9",
        500: "#62748e",
        600: "#45556c",
        700: "#314158",
        800: "#1d293d",
        900: "#0f172b",
        950: "#020618"
    },
    gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5dc",
        400: "#99a1af",
        500: "#6a7282",
        600: "#4a5565",
        700: "#364153",
        800: "#1e2939",
        900: "#101828",
        950: "#030712"
    },
    zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#9f9fa9",
        500: "#71717b",
        600: "#52525c",
        700: "#3f3f47",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b"
    },
    neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a1a1a1",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a"
    },
    stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a6a09b",
        500: "#79716b",
        600: "#57534d",
        700: "#44403b",
        800: "#292524",
        900: "#1c1917",
        950: "#0c0a09"
    },
    red: {
        50: "#fef2f2",
        100: "#ffe2e2",
        200: "#ffc9c9",
        300: "#ffa2a2",
        400: "#ff6467",
        500: "#fb2c36",
        600: "#e7000b",
        700: "#c10007",
        800: "#9f0712",
        900: "#82181a",
        950: "#460809"
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd4",
        200: "#ffd6a8",
        300: "#ffb86a",
        400: "#ff8904",
        500: "#ff6900",
        600: "#f54900",
        700: "#ca3500",
        800: "#9f2d00",
        900: "#7e2a0c",
        950: "#441306"
    },
    amber: {
        50: "#fffbeb",
        100: "#fef3c6",
        200: "#fee685",
        300: "#ffd230",
        400: "#ffb900",
        500: "#fe9a00",
        600: "#e17100",
        700: "#bb4d00",
        800: "#973c00",
        900: "#7b3306",
        950: "#461901"
    },
    yellow: {
        50: "#fefce8",
        100: "#fef9c2",
        200: "#fff085",
        300: "#ffdf20",
        400: "#fdc700",
        500: "#f0b100",
        600: "#d08700",
        700: "#a65f00",
        800: "#894b00",
        900: "#733e0a",
        950: "#432004"
    },
    lime: {
        50: "#f7fee7",
        100: "#ecfcca",
        200: "#d8f999",
        300: "#bbf451",
        400: "#9ae600",
        500: "#7ccf00",
        600: "#5ea500",
        700: "#497d00",
        800: "#3c6300",
        900: "#35530e",
        950: "#192e03"
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#b9f8cf",
        300: "#7bf1a8",
        400: "#05df72",
        500: "#00c950",
        600: "#00a63e",
        700: "#008236",
        800: "#016630",
        900: "#0d542b",
        950: "#032e15"
    },
    cyan: {
        50: "#ecfeff",
        100: "#cefafe",
        200: "#a2f4fd",
        300: "#53eafd",
        400: "#00d3f3",
        500: "#00b8db",
        600: "#0092b8",
        700: "#007595",
        800: "#005f78",
        900: "#104e64",
        950: "#053345"
    }
};

export interface ColorShades {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
}

export interface Colors {
    slate: ColorShades;
    gray: ColorShades;
    zinc: ColorShades;
    neutral: ColorShades;
    stone: ColorShades;
    red: ColorShades;
    orange: ColorShades;
    amber: ColorShades;
    yellow: ColorShades;
    lime: ColorShades;
    green: ColorShades;
    cyan: ColorShades;
}