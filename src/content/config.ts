import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string(),
			imgs: z.array(z.string()).optional(),
			types: z.array(z.string()).optional(),
			urls: z.array(z.string()).optional(),
			labels: z.array(z.string()).optional()
		}),
	}),
};
