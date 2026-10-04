import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
	site: "https://www.eckwerkstuttgart.de/",
	integrations: [
		mdx(),
		icon({
			iconDir: "src/assets/icons",
		}),
		tailwind(),
		sitemap({
			customPages: [
				"https://www.eckwerkstuttgart.de/#Home",
				"https://www.eckwerkstuttgart.de/#Leistungen",
				"https://www.eckwerkstuttgart.de/#Kontakt",
			],
		}),
		webmanifest({
			name: "www.eckwerkstuttgart.de",
			icon: "src/assets/favicon_io/android-chrome-192x192.png",
			short_name: "eckwerkstuttgart",
			description: "Ihr Partner für Handwerk in Stuttgart",
			start_url: "/",
			theme_color: "#828B6F",
			background_color: "#ffffff",
			display: "standalone",
			orientation: "natural",
		}),
	],
	vite: {
		build: {
			rolldownOptions: {
				onLog(level, log, defaultHandler) {
					if (
						level === "warn" &&
						log.code === "MODULE_LEVEL_DIRECTIVE" &&
						log.message.includes('"use astro:head-inject"') &&
						/\.mdx\?astroPropagatedAssets(?:$|["'\s])/.test(
							log.id ?? log.message,
						)
					) {
						return;
					}
					defaultHandler(level, log);
				},
			},
		},
		resolve: {
			alias: {
				"@": "/src",
			},
		},
	},
});
