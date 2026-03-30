import { defineConfig } from "vite";
import reactSWC from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [reactSWC(), tailwindcss()],
});
