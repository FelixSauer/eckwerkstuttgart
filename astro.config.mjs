import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL,
	integrations: [
		icon({
			iconDir: 'src/assets/icons'
		}),
		tailwind()
	],
	compressHTML: true,
	vite: {
		resolve: {
			alias: {
				'@': '/src'
			}
		},
		plugins: [
			ViteImageOptimizer({
				webp: {
					quality: 80,
					maxSize: 900
				}
			})
		]
	},
	/*build: {
		out: 'assets',
		assets: 'assets'
	}*/
})
