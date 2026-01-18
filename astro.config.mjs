// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// 1. Your actual website URL (instead of example.com)
	site: 'https://spacefaringiyo.github.io',
	// 2. The sub-folder where your blog lives
	base: '/my-blog',
	
	integrations: [mdx(), sitemap()],
});