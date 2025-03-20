// theme.ts
'use client';
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const montserrat = Montserrat({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap"
});

const theme = createTheme({
    typography: {
        fontFamily: montserrat.style.fontFamily,
        // sağ footerdaki textler için
        body1: {
            color: 'var(--Dark-Text-Primary, #FFF)',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "160%", // Yaklaşık 1.4rem olarak uygulanır
        },
        // sol footerdaki textler için
        body2: {
            color: 'var(--Dark-Text-Secondary, rgba(255, 255, 255, 0.70))',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "160%" // Yaklaşık 1.4rem olarak uygulanır
        },
        // KVKK metinleri için
        h6: {
            color: 'var(--Dark-Text-Disabled, rgba(255, 255, 255, 0.50))',
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "1.25rem" // 166.667%
        },
        // navbar için
        h5: {
            margin: 0,

            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.625rem', // 162.5%
            letterSpacing: '-0.01em',
            color: 'rgba(0, 0, 0, 0.9)',
            cursor: 'pointer',
            borderBottom: '1px solid transparent',
            whiteSpace: 'nowrap',
            transition: 'border-bottom 0.2s ease-out',
            '&:hover': {
                borderBottom: '1px solid black',

            }
        },
    },

});

export default theme;