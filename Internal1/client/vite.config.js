import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5040",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});


