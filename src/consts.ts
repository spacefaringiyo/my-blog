import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown files from the blog folder
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	
	// Define what is allowed in the frontmatter
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// This is the important new line for your tags!
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };