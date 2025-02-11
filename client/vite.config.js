import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        xbox: "./src/pages/xbox.html",
      },
    },
  },
});
