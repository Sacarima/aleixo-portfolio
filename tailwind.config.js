// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',  // Include all the pages and components
      './components/**/*.{js,ts,jsx,tsx}',  // Include all components
    ],
    theme: {
      extend: {
        container: {
            center: true,
            padding: "15px",
        },
        screens: {
          xxs: "380px",
          xs: "480px",  // Extra small screens (phones)
          sm: "640px",  // Small screens (phones)
          md: "768px",  // Medium screens (tablets)
          lg: "1024px",  // Large screens (laptops)
          xl: "1280px",  // Extra large screens (desktops)
          "2xl": "1536px",  // 2X extra large (big desktops)
        },
        fontFamily: {
            primary: 'var(--font-geist-sans)', 
            secondary: 'var(--font-geist-mono)',
            mono: 'var(--font-jetbrains-mono)',
          },
        colors: {
            primary:"#1c1c22",
            accent: {
                DEFAULT: "#00FF99",
                hover: "#00e187",
            },
            secondary: "#00FF99",
        },
        keyframes: {
            "accordion-down": {
                from: { height: 0 },
                to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: 0 },
            },
            spin: {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            "loading-loose": {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },

        },
        animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "loading-loose": "spin 3s linear infinite",

        },
      },
    },
    plugins: [],
  }
  