import type { MetadataRoute } from "next";
import { getBlogPostsForSitemap } from "@/utils/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: "https://www.olutunmise.tech",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://www.olutunmise.tech/about",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: "https://www.olutunmise.tech/journey",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},

		{
			url: "https://www.olutunmise.tech/projects",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: "https://www.olutunmise.tech/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
	];

	let blogEntries: MetadataRoute.Sitemap = [];

	try {
		const blogPosts = await getBlogPostsForSitemap();
		blogEntries = blogPosts.map((post: any) => ({
			url: `https://www.olutunmise.tech/blog/${post.slug.current}`,
			lastModified: new Date(post.publishedAt),
			changeFrequency: "daily" as const,
			priority: 0.6,
		}));
	} catch {
		console.warn("Skipping dynamic blog sitemap entries because the CMS is unavailable.");
	}

	return [...staticPages, ...blogEntries];
}
