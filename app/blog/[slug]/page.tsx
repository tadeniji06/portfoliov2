import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { getBlogPost, urlFor } from "@/utils/sanity";

export async function generateMetadata(props: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const params = await props.params;
	const post = await getBlogPost(params.slug);

	if (!post) {
		return {
			title: "Post not found | Tunmise E.A",
			description: "This blog post could not be found.",
		};
	}

	return {
		title: `${post.title} | Tunmise E.A`,
		description:
			post.body?.[0]?.children?.[0]?.text ||
			`Read ${post.title} on Tunmise E.A's blog.`,
		authors: [{ name: post.author?.name || "Tunmise E.A" }],
		openGraph: {
			title: post.title,
			description:
				post.body?.[0]?.children?.[0]?.text ||
				`Read ${post.title} on Tunmise E.A's blog.`,
			url: `https://www.olutunmise.tech/blog/${post.slug?.current}`,
			siteName: "Tunmise E.A",
			locale: "en_US",
			type: "article",
			images: post.mainImage
				? [
						{
							url: urlFor(post.mainImage).width(1200).height(630).url(),
							width: 1200,
							height: 630,
							alt: post.title,
							type: "image/jpeg",
						},
					]
				: [
						{
							url: "https://www.olutunmise.tech/pefp.jpeg",
							width: 1200,
							height: 630,
							alt: "Tunmise E.A Blog",
							type: "image/jpeg",
						},
					],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.body?.[0]?.children?.[0]?.text || `Read ${post.title} on Tunmise E.A's blog.`,
			creator: "@tade_niji06",
			site: "@tade_niji06",
			images: post.mainImage
				? [urlFor(post.mainImage).width(1200).height(630).url()]
				: ["https://www.olutunmise.tech/pefp.jpeg"],
		},
	};
}

const Page = async (props: { params: Promise<{ slug: string }> }) => {
	const params = await props.params;
	return (
		<div>
			<BlogPostClient slug={params.slug} />
		</div>
	);
};

export default Page;
