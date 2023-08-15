import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			imgs: z.array(z.string()),
			types: z.array(z.string()),
			urls: z.array(z.string()),
			labels: z.array(z.string())
		}),
	}),
};
