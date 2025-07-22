import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { getBlogPost, urlFor} from "@/utils/sanity"; 

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const post = await getBlogPost(params.slug);

	if (!post) {
		return {
			title: "Post not found | Olutunmise Adeniji",
			description: "This blog post could not be found.",
		};
	}

	return {
		title: `${post.title} | Olutunmise Adeniji`,
		description: post.body?.[0]?.children?.[0]?.text || `Read ${post.title} on YourSiteName`,
		openGraph: {
			title: post.title,
			description: post.body?.[0]?.children?.[0]?.text || "",
			images: post.mainImage ? [ { url: urlFor(post.mainImage).url(), alt: post.title } ] : [],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.body?.[0]?.children?.[0]?.text || "",
			images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
		},
	};
}

const Page = async ({ params }: { params: { slug: string } }) => {
	return (
		<div>
			<BlogPostClient slug={params.slug} />
		</div>
	);
};

export default Page;
