import { defineConfig } from "astro/config";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://astro.build/config
export default defineConfig({
  site: "https://eckwerkstuttgart.de/",
  base: "/",
  integrations: [
    robotsTxt(),
    icon({
      iconDir: "src/assets/icons",
    }),
    tailwind(),
  ],
  compressHTML: false,
  vite: {
    plugins: [ViteImageOptimizer()],
    jpg: {
      quality: 70,
    },
  },
  build: {
    site: "eckwerkstuttgart",
    out: "assets",
    assets: "assets",
  },
});
