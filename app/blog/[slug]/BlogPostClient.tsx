"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { toast } from "sonner";
import	OneSignal from "react-onesignal";
import {
	getBlogPost,
	getRelatedPosts,
	urlFor,
	BlogPost,
} from "@/utils/sanity";

interface BlogPostClientProps {
	slug: string;
}

const BlogPostClient = ({ slug }: BlogPostClientProps) => {
	const [post, setPost] = useState<BlogPost | null>(null);
	const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [readingProgress, setReadingProgress] = useState(0);
	const [estimatedReadTime, setEstimatedReadTime] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			OneSignal.init({
				appId: "413a3c7c-85b4-4eb0-9cda-1e608d79a2ab",
				notifyButton: {
					enabled: true, 
				},
			} as any); 
		}
	}, []);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				setLoading(true);
				setError(null);

				// console.log("Fetching post with slug:", slug);
				const postData = await getBlogPost(slug);
				// console.log("Post data received:", postData);

				if (postData) {
					console.log("Post data structure:", {
						id: postData._id,
						title: postData.title,
						hasBody: !!postData.body,
						bodyLength: postData.body ? postData.body.length : 0,
						bodyType: typeof postData.body,
						estimatedReadingTime: postData.estimatedReadingTime,
					});

					setPost(postData);
					setEstimatedReadTime(postData.estimatedReadingTime || 5);

					if (postData.categories && postData.categories.length > 0) {
						try {
							const related = await getRelatedPosts(
								postData.categories,
								postData._id,
								3
							);
							console.log("Related posts fetched:", related.length);
							setRelatedPosts(related);
						} catch (relatedError) {
							console.warn(
								"Error fetching related posts:",
								relatedError
							);
						}
					}
				} else {
					console.log("No post data received - setting error");
					setError("Post not found");
				}
			} catch (error) {
				console.error("Error fetching blog post:", error);
				setError("Failed to load article");
			} finally {
				console.log("Setting loading to false");
				setLoading(false);
			}
		};

		if (slug && slug.trim()) {
			console.log("Starting fetch for slug:", slug);
			fetchPost();
		} else {
			console.log("No valid slug provided:", slug);
			setError("Invalid article URL");
			setLoading(false);
		}
	}, [slug]);

	// Reading progress tracker
	useEffect(() => {
		const updateReadingProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress =
				docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			setReadingProgress(Math.min(100, Math.max(0, progress)));
		};

		window.addEventListener("scroll", updateReadingProgress);
		return () =>
			window.removeEventListener("scroll", updateReadingProgress);
	}, []);

	const formatDate = (dateString: string) => {
		try {
			return new Date(dateString).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		} catch (error) {
			console.error("Error formatting date:", dateString, error);
			return "Invalid date";
		}
	};

	const sharePost = (platform: string) => {
		if (!post) return;

		const url = window.location.href;
		const title = post.title || "";

		const shareUrls = {
			twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
				title
			)}&url=${encodeURIComponent(url)}`,
			linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
				url
			)}`,
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
				url
			)}`,
		};

		const shareUrl = shareUrls[platform as keyof typeof shareUrls];
		if (shareUrl) {
			window.open(shareUrl, "_blank", "width=600,height=400");
		}
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			toast.success("Link copied to clipboard!");
		} catch (error) {
			console.error("Failed to copy link:", error);
			toast.error("Failed to copy link");
		}
	};

	// Custom components for PortableText with dark theme
	const portableTextComponents = {
		types: {
			image: ({ value }: any) => {
				if (!value?.asset) return null;

				try {
					const imageUrl = urlFor(value).width(900).height(450).url();
					return (
						<figure className='my-12 group'>
							<div className='rounded-2xl overflow-hidden border border-gray-700 shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/20'>
								<Image
									src={imageUrl}
									alt={value.alt || "Blog image"}
									width={900}
									height={450}
									className='w-full h-auto transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
							{value.caption && (
								<figcaption className='text-center text-gray-400 text-sm mt-4 font-light tracking-wide'>
									{value.caption}
								</figcaption>
							)}
						</figure>
					);
				} catch (error) {
					console.error("Error rendering image:", error);
					return (
						<div className='my-12 p-8 bg-gray-900 border border-gray-700 rounded-2xl text-center'>
							<Icon
								icon='mdi:image-broken'
								className='text-4xl text-gray-500 mx-auto mb-3'
							/>
							<p className='text-gray-400'>
								Image could not be loaded
							</p>
						</div>
					);
				}
			},
			code: ({ value }: any) => (
				<div className='my-8 bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl'>
					<div className='bg-gray-800 px-6 py-3 border-b border-gray-700 flex items-center justify-between'>
						<span className='text-gray-300 text-sm font-mono font-medium tracking-wide'>
							{value.language || "Code"}
						</span>
						<div className='flex space-x-2'>
							<div className='w-3 h-3 bg-red-500 rounded-full'></div>
							<div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
							<div className='w-3 h-3 bg-green-500 rounded-full'></div>
						</div>
					</div>
					<pre className='p-6 text-green-400 text-sm font-mono overflow-x-auto leading-relaxed'>
						<code>{value.code}</code>
					</pre>
				</div>
			),
		},
		block: {
			h1: ({ children }: any) => (
				<h1 className='text-5xl md:text-6xl font-bold text-black mt-16 mb-8 leading-tight tracking-tight font-serif'>
					{children}
				</h1>
			),
			h2: ({ children }: any) => (
				<h2 className='text-3xl md:text-4xl font-bold text-black mt-14 mb-6 leading-tight tracking-wide font-serif'>
					{children}
				</h2>
			),
			h3: ({ children }: any) => (
				<h3 className='text-2xl md:text-3xl font-semibold text-black mt-12 mb-5 leading-tight tracking-wide font-serif'>
					{children}
				</h3>
			),
			h4: ({ children }: any) => (
				<h4 className='text-xl md:text-2xl font-semibold text-black mt-10 mb-4 leading-tight tracking-wide'>
					{children}
				</h4>
			),
			normal: ({ children }: any) => (
				<p className='text-lg md:text-xl text-black mb-8 leading-relaxed font-light tracking-wide max-w-none'>
					{children}
				</p>
			),
			blockquote: ({ children }: any) => (
				<blockquote className='border-l-4 border-red-500 bg-black/70 pl-8 py-6 my-10 rounded-r-xl shadow-lg'>
					<div className='text-xl md:text-2xl font-light text-white italic leading-relaxed tracking-wide'>
						{children}
					</div>
					<div className='mt-4 w-12 h-1 bg-red-500 rounded'></div>
				</blockquote>
			),
		},
		marks: {
			strong: ({ children }: any) => (
				<strong className='font-bold text-gray-900 px-1 rounded'>
					{children}
				</strong>
			),
			em: ({ children }: any) => (
				<em className='italic text-red-600 font-light'>
					{children}
				</em>
			),
			link: ({ children, value }: any) => (
				<a
					href={value.href}
					target='_blank'
					rel='noopener noreferrer'
					className='text-red-400 font-medium underline decoration-black/50 underline-offset-4 hover:decoration-red-400 hover:text-red-300 transition-all duration-300'
				>
					{children}
				</a>
			),
		},
		list: {
			bullet: ({ children }: any) => (
				<ul className='list-none mb-8 space-y-4 text-lg md:text-xl text-black ml-0'>
					{children}
				</ul>
			),
			number: ({ children }: any) => (
				<ol className='list-none counter-reset-list mb-8 space-y-4 text-lg md:text-xl text-black ml-0'>
					{children}
				</ol>
			),
		},
		listItem: {
			bullet: ({ children }: any) => (
				<li className='flex items-start space-x-4 leading-relaxed font-light tracking-wide'>
					<span className='text-red-700 text-xl mt-1 flex-shrink-0'>
						•
					</span>
					<span>{children}</span>
				</li>
			),
			number: ({ children }: any) => (
				<li className='flex items-start space-x-4 leading-relaxed font-light tracking-wide counter-increment-list'>
					<span className='text-red-500 font-medium flex-shrink-0 min-w-[24px]'>
						<span className='counter-list'></span>.
					</span>
					<span>{children}</span>
				</li>
			),
		},
	};

	if (loading) {
		return (
			<div className='min-h-screen bg-black flex items-center justify-center'>
				<div className='text-center'>
					<div className='relative'>
						<Icon
							icon='mdi:loading'
							className='text-6xl text-white animate-spin mx-auto mb-6'
						/>
						<div className='absolute inset-0 text-6xl text-red-500 animate-pulse'>
							<Icon icon='mdi:circle-outline' />
						</div>
					</div>
					<h2 className='text-2xl font-light text-white mb-2 tracking-wide'>
						Loading article...
					</h2>
					{/* <p className='text-gray-400 font-mono text-sm'>
						Slug: {slug}
					</p> */}
				</div>
			</div>
		);
	}

	if (error || !post) {
		return (
			<div className='min-h-screen bg-black flex items-center justify-center'>
				<div className='text-center max-w-lg mx-auto px-6'>
					<Icon
						icon='mdi:file-document-remove'
						className='text-8xl text-gray-600 mx-auto mb-8'
					/>
					<h1 className='text-4xl font-bold text-white mb-6 font-serif'>
						{error || "Article Not Found"}
					</h1>
					<p className='text-gray-300 text-lg mb-6 leading-relaxed font-light'>
						{error === "Failed to load article"
							? "There was an error loading this article. Please try again later."
							: "The article you're looking for doesn't exist or has been moved."}
					</p>
					<p className='text-gray-500 text-sm mb-10 font-mono'>
						Requested slug: {slug}
					</p>
					<Link
						href='/blog'
						className='inline-flex items-center bg-white text-black px-8 py-4 rounded-2xl font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
					>
						<Icon icon='mdi:arrow-left' className='mr-3 text-xl' />
						Back to Blog
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-white min-h-screen'>
			<style jsx>{`
				.counter-reset-list {
					counter-reset: list;
				}
				.counter-increment-list {
					counter-increment: list;
				}
				.counter-list::before {
					content: counter(list);
				}
			`}</style>

			{/* Reading Progress Bar */}
			<div className='fixed top-0 left-0 w-full h-1 bg-gray-800 z-50'>
				<div
					className='h-full bg-gradient-to-r from-gray-500 to-red-400 transition-all duration-300 ease-out'
					style={{ width: `${readingProgress}%` }}
				/>
			</div>

			{/* Floating Share Buttons */}
			<div className='fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block'>
				<div className='bg-gray-900 border border-gray-700 rounded-2xl p-3 space-y-3 shadow-2xl backdrop-blur-lg'>
					<button
						onClick={() => sharePost("twitter")}
						className='block p-3 hover:bg-gray-800 rounded-xl transition-all duration-300 group'
						title='Share on Twitter'
					>
						<Icon
							icon='mdi:twitter'
							className='text-2xl text-gray-300 group-hover:text-red-400'
						/>
					</button>
					<button
						onClick={() => sharePost("linkedin")}
						className='block p-3 hover:bg-gray-800 rounded-xl transition-all duration-300 group'
						title='Share on LinkedIn'
					>
						<Icon
							icon='mdi:linkedin'
							className='text-2xl text-gray-300 group-hover:text-red-500'
						/>
					</button>
					<button
						onClick={() => sharePost("facebook")}
						className='block p-3 hover:bg-gray-800 rounded-xl transition-all duration-300 group'
						title='Share on Facebook'
					>
						<Icon
							icon='mdi:facebook'
							className='text-2xl text-gray-300 group-hover:text-red-600'
						/>
					</button>
					<button
						onClick={copyToClipboard}
						className='block p-3 hover:bg-gray-800 rounded-xl transition-all duration-300 group'
						title='Copy Link'
					>
						<Icon
							icon='mdi:link'
							className='text-2xl text-gray-300 group-hover:text-green-400'
						/>
					</button>
				</div>
			</div>

			<article className='max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-16'>
				{/* Back to Blog */}
				<div className='mb-12'>
					<Link
						href='/blog'
						className='inline-flex items-center text-black hover:text-red-500 transition-all duration-300 font-light tracking-wide'
					>
						<Icon icon='mdi:arrow-left' className='mr-3 text-xl' />
						Back to Blog
					</Link>
				</div>

				{/* Article Header */}
				<header className='mb-16'>
					{/* Categories */}
					{post.categories && post.categories.length > 0 && (
						<div className='flex flex-wrap gap-3 mb-8'>
							{post.categories.map((category) => (
								<span
									key={category._id}
									className='px-4 py-2 border border-gray-700 text-red-700 rounded-full text-sm font-medium tracking-wide'
								>
									{category.title}
								</span>
							))}
						</div>
					)}

					{/* Title */}
					<h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-8 leading-tight tracking-tight font-serif'>
						{post.title}
					</h1>

					{/* Meta Information */}
					<div className='flex flex-wrap items-center gap-8 text-gray-400 mb-12'>
						<div className='flex items-center space-x-4'>
							{post.author?.image ? (
								<Image
									src={urlFor(post.author.image)
										.width(52)
										.height(52)
										.url()}
									alt={post.author.name}
									width={52}
									height={52}
									className='rounded-full border-2 border-gray-700'
								/>
							) : (
								<div className='w-13 h-13 bg-gradient-to-br from-red-600 to-gray-500 rounded-full flex items-center justify-center border-2 border-gray-700'>
									<Icon
										icon='mdi:account'
										className='text-white text-xl'
									/>
								</div>
							)}
							<div>
								<p className='font-medium text-black text-lg tracking-wide'>
									{post.author?.name || "Olutunmise"}
								</p>
								<p className='text-sm text-gray-500 font-light'>
									Author
								</p>
							</div>
						</div>

						<div className='flex items-center space-x-2 text-black font-light tracking-wide'>
							<Icon icon='mdi:calendar' className='text-lg' />
							<time dateTime={post.publishedAt}>
								{formatDate(post.publishedAt)}
							</time>
						</div>

						<div className='flex items-center space-x-2 text-black font-light tracking-wide'>
							<Icon icon='mdi:clock-outline' className='text-lg' />
							<span>{estimatedReadTime} min read</span>
						</div>
					</div>

					{/* Featured Image */}
					{post.mainImage && (
						<div className='mb-16 group'>
							<div className='rounded-3xl overflow-hidden border border-gray-700 shadow-2xl transition-all duration-700 group-hover:shadow-blue-500/20'>
								<Image
									src={urlFor(post.mainImage)
										.width(1200)
										.height(600)
										.url()}
									alt={post.title}
									width={1200}
									height={600}
									className='w-full h-auto transition-transform duration-700 group-hover:scale-105'
									priority
								/>
							</div>
						</div>
					)}
				</header>

				{/* Article Content */}
				<div className='prose prose-lg prose-invert max-w-none'>
					{post.body &&
					Array.isArray(post.body) &&
					post.body.length > 0 ? (
						<PortableText
							value={post.body}
							components={portableTextComponents}
						/>
					) : (
						<div className='text-center py-16'>
							<Icon
								icon='mdi:file-document-outline'
								className='text-8xl text-gray-600 mx-auto mb-6'
							/>
							<p className='text-gray-400 text-xl font-light tracking-wide'>
								No content available for this article.
							</p>
							<p className='text-gray-600 text-sm mt-4 font-mono'>
								Body data: {JSON.stringify(post.body)}
							</p>
						</div>
					)}
				</div>

				{/* Author Bio */}
				{post.author?.bio && (
					<div className='mt-20 bg-gray-900/50 border border-gray-700 rounded-3xl p-10 backdrop-blur-lg'>
						<div className='flex items-start space-x-6'>
							{post.author.image ? (
								<Image
									src={urlFor(post.author.image)
										.width(80)
										.height(80)
										.url()}
									alt={post.author.name}
									width={80}
									height={80}
									className='rounded-full flex-shrink-0 border-2 border-gray-600'
								/>
							) : (
								<div className='w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gray-600'>
									<Icon
										icon='mdi:account'
										className='text-white text-2xl'
									/>
								</div>
							)}
							<div>
								<h3 className='text-2xl font-bold text-white mb-4 font-serif tracking-wide'>
									About {post.author.name}
								</h3>
								<p className='text-gray-300 leading-relaxed font-light tracking-wide text-lg'>
									{post.author.bio}
								</p>
							</div>
						</div>
					</div>
				)}

				{/* Related Posts */}
				{relatedPosts.length > 0 && (
					<div className='mt-24'>
						<h3 className='text-4xl font-bold text-black mb-12 text-center font-serif tracking-wide'>
							Related Articles
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{relatedPosts.map((relatedPost) => (
								<article
									key={relatedPost._id}
									className='bg-gray-900/50 border border-gray-900 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group backdrop-blur-lg'
								>
									{/* Image */}
									<div className='relative h-48 bg-gray-800 overflow-hidden'>
										{relatedPost.mainImage ? (
											<Image
												src={urlFor(relatedPost.mainImage)
													.width(400)
													.height(200)
													.url()}
												alt={relatedPost.title}
												fill
												className='object-cover group-hover:scale-110 transition-transform duration-700'
											/>
										) : (
											<div className='w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center'>
												<Icon
													icon='mdi:file-document'
													className='text-6xl text-gray-400'
												/>
											</div>
										)}

										{/* Reading Time */}
										<div className='absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium'>
											{relatedPost.estimatedReadingTime || 5} min
										</div>
									</div>

									{/* Content */}
									<div className='p-8 bg-black'>
										<h4 className='text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300 font-serif leading-tight'>
											{relatedPost.title}
										</h4>

										<div className='flex items-center justify-between text-sm text-gray-400 mb-6 font-light'>
											<span className='font-medium text-gray-300'>
												{relatedPost.author?.name || "Olutunmise"}
											</span>
											<time dateTime={relatedPost.publishedAt}>
												{formatDate(relatedPost.publishedAt)}
											</time>
										</div>

										<Link
											href={`/blog/${relatedPost.slug.current}`}
											className='inline-flex items-center w-full justify-center bg-white text-black py-4 px-6 rounded-2xl font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group'
										>
											Read Article
											<Icon
												icon='mdi:arrow-right'
												className='ml-3 text-lg group-hover:translate-x-1 transition-transform duration-300'
											/>
										</Link>
									</div>
								</article>
							))}
						</div>
					</div>
				)}

				{/* Navigation */}
				<div className='mt-20 flex justify-between items-center'>
					<Link
						href='/blog'
						className='inline-flex items-center bg-gray-900 border border-gray-700 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
					>
						<Icon icon='mdi:arrow-left' className='mr-3 text-xl' />
						All Articles
					</Link>

					<button
						onClick={() =>
							window.scrollTo({ top: 0, behavior: "smooth" })
						}
						className='inline-flex items-center border bg-white text-black px-8 py-4 rounded-2xl font-medium  shadow-xl'
					>
						<Icon icon='mdi:arrow-up' className='mr-3 text-xl' />
						Back to Top
					</button>
				</div>
			</article>
		</div>
	);
};

export default BlogPostClient;
