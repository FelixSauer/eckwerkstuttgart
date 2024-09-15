import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  /*site: 'https://felixsauer.github.io',
  base: 'eckwerkstuttgart',*/
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    })
  ]
});
