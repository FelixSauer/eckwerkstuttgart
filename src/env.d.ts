/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly BASE_URL: string
	readonly GOOGLE_PLACES_API_KEY?: string
	readonly GOOGLE_PLACES_ID?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
