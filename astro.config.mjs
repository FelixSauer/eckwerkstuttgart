import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://astro.build/config
export default defineConfig({
	site: 'https://eckwerkstuttgart.de/',
	base: '/',
	integrations: [
		icon({
			iconDir: 'src/assets/icons'
		}),
		tailwind()
	],
	compressHTML: false,
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
					maxSize: 1000
				}
			})
		],
		server: {
			allowedHosts: ['2481-84-118-214-213.ngrok-free.app']
		}
	},
	build: {
		site: 'eckwerkstuttgart',
		out: 'assets',
		assets: 'assets'
	}
})
