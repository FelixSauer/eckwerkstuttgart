import {defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

// https://astro.build/config
export default defineConfig({
  /*site: 'https://felixsauer.github.io',*/
  /*base: 'eckwerkstuttgart',*/
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    tailwind(),
  ],
  compressHTML: false,
  vite: {
    plugins: [ViteImageOptimizer(),]
  },
  build: {
    site: "eckwerkstuttgart",
    out: "assets",
    assets: "assets",
  },
});
