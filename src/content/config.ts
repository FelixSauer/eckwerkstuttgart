import { z, defineCollection } from "astro:content";

const parseNavigationString = (input: string): string[] =>
  input.split(",").map((item) => item.trim());

const pageCollection = defineCollection({
  schema: z
    .object({
      title: z.string(),
      navigation: z.string().transform(parseNavigationString),
    })
    .passthrough(),
});

export const collections = {
  pages: pageCollection,
};
