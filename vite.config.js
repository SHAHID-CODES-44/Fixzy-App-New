import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Fixzy-App/", // 👈 Replace with your repo name if different
});
