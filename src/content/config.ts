import {defineCollection, z} from "astro:content";

const parseNavigationString = (input: string): string[] =>
	input.split(",").map((item) => item.trim());

const pageCollection = defineCollection({
	schema: z
		.object({
			title: z.string(),
			mainStage: z.boolean(),
			navigation: z.string().transform(parseNavigationString),
			slogan: z.string().optional(),
			introImage: z.string().optional(),
		})
		.passthrough(),
});

export const collections = {
	pages: pageCollection,
};
