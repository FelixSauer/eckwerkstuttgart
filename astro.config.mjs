import {defineConfig} from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://felixsauer.github.io',
  base: 'eckwerkstuttgart',
  integrations: [icon()],
});

