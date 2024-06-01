import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Web-client-3sem/",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "tests/setup.tsx",
    css: true,
  },
});
