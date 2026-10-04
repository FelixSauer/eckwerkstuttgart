import { defineCollection} from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const parseNavigationString = (input: string): string[] =>
	input.split(',').map((item) => item.trim())

const pages = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
	schema: z.object({
		title: z.string(),
		mainStage: z.boolean(),
		navigation: z.string().transform(parseNavigationString),
		slogan: z.string().optional()
	})
})

export const collections = { pages }
