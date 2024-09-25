import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  /*site: 'https://felixsauer.github.io',
  base: 'eckwerkstuttgart',*/
  integrations: [icon({
    iconDir: "src/assets/icons"
  }), react()]
});