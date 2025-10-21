import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import webmanifest from 'astro-webmanifest'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.eckwerkstuttgart.de/',
	integrations: [
		icon({
			iconDir: 'src/assets/icons'
		}),
		tailwind(),
		sitemap({
			customPages: [
				'https://www.eckwerkstuttgart.de/#Home',
				'https://www.eckwerkstuttgart.de/#Wohnhandwerk',
				'https://www.eckwerkstuttgart.de/#Baumpflege',
				'https://www.eckwerkstuttgart.de/#Terrassenbau',
				'https://www.eckwerkstuttgart.de/#Kontakt'
			]
		}),
		webmanifest({
			name: 'www.eckwerkstuttgart.de',
			icon: 'src/assets/favicon-mode-light.svg',
			short_name: 'eckwerkstuttgart',
			description: 'Ihr Partner für Wohnhandwerk, Baumpflege und Terrassenbau in Stuttgart',
			start_url: '/',
			theme_color: '#828B6F',
			background_color: '#ffffff',
			display: 'standalone',
			orientation: 'natural'
		})
	],
	vite: {
		resolve: {
			alias: {
				'@': '/src'
			}
		},
		plugins: []
	}
})
