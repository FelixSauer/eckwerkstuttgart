import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  /*site: 'https://felixsauer.github.io',*/
  base: 'eckwerkstuttgart',
  integrations: [icon({
    iconDir: "src/assets/icons"
  }), react({
    experimentalReactChildren: true
  }), tailwind()]
});