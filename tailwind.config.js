/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      "colors": {
        "on-background": "#e5e2e1",
        "on-secondary": "#542100",
        "primary-fixed-dim": "#ffb77c",
        "surface-bright": "#3a3939",
        "secondary-container": "#74350b",
        "tertiary-container": "#b3b4b4",
        "secondary": "#ffb68f",
        "on-primary-fixed-variant": "#6d3900",
        "on-tertiary-fixed": "#1a1c1c",
        "on-primary-fixed": "#2e1500",
        "on-secondary-container": "#f99f6d",
        "background": "#131313",
        "inverse-on-surface": "#313030",
        "inverse-surface": "#e5e2e1",
        "on-surface": "#e5e2e1",
        "secondary-fixed-dim": "#ffb68f",
        "surface-dim": "#131313",
        "outline": "#a28d7d",
        "on-secondary-fixed": "#331200",
        "tertiary-fixed-dim": "#c6c6c7",
        "surface-container-high": "#2a2a2a",
        "surface-container": "#201f1f",
        "tertiary-fixed": "#e2e2e2",
        "on-surface-variant": "#dac2b1",
        "primary": "#ffc495",
        "on-primary-container": "#6c3900",
        "on-error": "#690005",
        "on-secondary-fixed-variant": "#74350b",
        "outline-variant": "#544337",
        "secondary-fixed": "#ffdbca",
        "surface-tint": "#ffb77c",
        "error-container": "#93000a",
        "surface-variant": "#353534",
        "surface-container-highest": "#353534",
        "surface-container-lowest": "#0e0e0e",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#ffdcc2",
        "primary-container": "#ff9d42",
        "on-tertiary-container": "#444647",
        "surface-container-low": "#1c1b1b",
        "on-tertiary-fixed-variant": "#454747",
        "on-primary": "#4d2700",
        "surface": "#131313",
        "tertiary": "#cfd0d0",
        "inverse-primary": "#904d00",
        "error": "#ffb4ab",
        "on-tertiary": "#2f3131"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "unit": "8px",
        "gutter": "32px",
        "container-max": "1440px",
        "margin-mobile": "24px",
        "margin-desktop": "80px"
      },
      "fontFamily": {
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "label-sm": ["JetBrains Mono", "monospace"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Syne", "sans-serif"],
        "headline-xl": ["Syne", "sans-serif"],
        "display-lg": ["Syne", "sans-serif"],
        "display-lg-mobile": ["Syne", "sans-serif"]
      },
      "fontSize": {
        "body-md": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "label-sm": ["13px", {"lineHeight": "18px", "letterSpacing": "0.1em", "fontWeight": "500"}],
        "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
        "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
        "headline-xl": ["56px", {"lineHeight": "64px", "fontWeight": "700"}],
        "display-lg": ["96px", {"lineHeight": "100px", "letterSpacing": "-0.04em", "fontWeight": "800"}],
        "display-lg-mobile": ["58px", {"lineHeight": "62px", "letterSpacing": "-0.02em", "fontWeight": "800"}]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ]
}
