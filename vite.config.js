import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/pyp": {
        target: "ftp://5.0.32.75",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
