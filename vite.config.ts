import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
    allowedHosts: "all",
    watch: {
      ignored: ["**/tailwind-plus/**", "**/node_modules/**"],
    },
  },
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Exclude tailwind-plus from dependency optimization scanning
  optimizeDeps: {
    exclude: [],
    entries: ["src/main.tsx"],
  },
}));
