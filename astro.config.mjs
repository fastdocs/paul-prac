// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://YOUR-USERNAME.github.io",
  base: "/paul-page",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});

