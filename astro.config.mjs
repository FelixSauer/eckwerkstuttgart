import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://eckwerkstuttgart.de/',
	integrations: [
		icon({
			iconDir: 'src/assets/icons'
		}),
		tailwind(),
		sitemap({
			customPages: [
			'https://eckwerkstuttgart.de/#Home',
			'https://eckwerkstuttgart.de/#Wohnhandwerk',
			'https://eckwerkstuttgart.de/#Baumpflege',
			'https://eckwerkstuttgart.de/#Terrassenbau',
			'https://eckwerkstuttgart.de/#Kontakt'
			]
		})
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
	}
})
