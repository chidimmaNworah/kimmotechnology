/** @type {import('tailwindcss').Config} */
const TailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        body: ['"Outfit"', "sans-serif"],
      },
      colors: {
        deep: "#060B18",
        surface: "#0F1629",
        card: "#161D33",
        "card-hover": "#1C2540",
        "border-subtle": "#1E2844",
        cyan: {
          accent: "#22D3EE",
          dim: "#22D3EE99",
        },
        amber: {
          accent: "#F59E0B",
          dim: "#F59E0B66",
        },
        violet: {
          accent: "#8B5CF6",
        },
        txt: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
      },
      animation: {
        slide: "slide 60s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px #22D3EE22" },
          "50%": { boxShadow: "0 0 40px #22D3EE44, 0 0 80px #22D3EE11" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, #22D3EE15 0px, transparent 50%), radial-gradient(at 80% 0%, #8B5CF615 0px, transparent 50%), radial-gradient(at 0% 50%, #F59E0B10 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default TailwindConfig;
