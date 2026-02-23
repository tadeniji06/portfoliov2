"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { toast } from "sonner";
import OneSignal from "react-onesignal";
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
								3,
							);
							console.log("Related posts fetched:", related.length);
							setRelatedPosts(related);
						} catch (relatedError) {
							console.warn(
								"Error fetching related posts:",
								relatedError,
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
				title,
			)}&url=${encodeURIComponent(url)}`,
			linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
				url,
			)}`,
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
				url,
			)}`,
			whatsapp: `https://wa.me/?text=${encodeURIComponent(
				title + " " + url,
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
					const imageUrl = urlFor(value)
						.width(1200)
						.height(600)
						.url();
					return (
						<figure className='my-24 group'>
							<div className='border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/30'>
								<Image
									src={imageUrl}
									alt={value.alt || "Intel Visual"}
									width={1200}
									height={600}
									className='w-full h-auto grayscale contrast-125 transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
							{value.caption && (
								<figcaption className='text-center text-gray-500 text-[10px] mt-4 font-bold tracking-[0.3em] uppercase'>
									// {value.caption}
								</figcaption>
							)}
						</figure>
					);
				} catch (error) {
					console.error("Error rendering image:", error);
					return null;
				}
			},
			code: ({ value }: any) => (
				<div className='my-12 transition-all'>
					<div className='bg-neutral-900 px-6 py-3 border-x border-t border-white/10 flex items-center justify-between'>
						<span className='text-gray-500 text-[10px] font-black tracking-[0.3em] uppercase'>
							{value.language || "Terminal Output"}
						</span>
						<div className='flex space-x-2'>
							<div className='w-2 h-2 bg-white/20 rounded-full'></div>
							<div className='w-2 h-2 bg-white/20 rounded-full'></div>
						</div>
					</div>
					<pre className='p-8 bg-black border border-white/10 text-neutral-300 text-sm font-mono overflow-x-auto leading-relaxed'>
						<code>{value.code}</code>
					</pre>
				</div>
			),
		},
		block: {
			h1: ({ children }: any) => (
				<h1 className='text-5xl md:text-7xl font-black text-white mt-32 mb-12 uppercase tracking-tighter leading-none'>
					{children}
				</h1>
			),
			h2: ({ children }: any) => (
				<h2 className='text-4xl font-black text-white mt-24 mb-10 uppercase tracking-tighter leading-none'>
					{children}
				</h2>
			),
			h3: ({ children }: any) => (
				<h3 className='text-2xl font-black text-white mt-20 mb-8 uppercase tracking-tighter leading-none'>
					{children}
				</h3>
			),
			normal: ({ children }: any) => (
				<p className='text-xl md:text-2xl text-neutral-400 mb-10 leading-relaxed font-light tracking-tight max-w-none'>
					{children}
				</p>
			),
			blockquote: ({ children }: any) => (
				<blockquote className='border-l-2 border-white bg-white/[0.03] px-12 py-10 my-16'>
					<div className='text-2xl md:text-3xl font-light text-white italic leading-relaxed tracking-tight'>
						{children}
					</div>
					<div className='mt-8 flex items-center gap-4'>
						<div className='h-px w-8 bg-white/20'></div>
						<span className='text-[10px] font-black tracking-[0.5em] text-gray-500 uppercase'>
							End Protocol
						</span>
					</div>
				</blockquote>
			),
		},
		marks: {
			strong: ({ children }: any) => (
				<strong className='font-black text-white tracking-tight'>
					{children}
				</strong>
			),
			em: ({ children }: any) => (
				<em className='italic text-neutral-100 font-normal tracking-tight px-1 bg-white/[0.05]'>
					{children}
				</em>
			),
			link: ({ children, value }: any) => (
				<a
					href={value.href}
					target='_blank'
					rel='noopener noreferrer'
					className='text-white font-bold underline decoration-white/20 underline-offset-8 hover:decoration-white hover:bg-white hover:text-black transition-all px-2 -mx-2'
				>
					{children}
				</a>
			),
		},
		list: {
			bullet: ({ children }: any) => (
				<ul className='mb-12 space-y-6 text-xl md:text-2xl text-neutral-400 ml-4 list-none'>
					{children}
				</ul>
			),
			number: ({ children }: any) => (
				<ol className='mb-12 space-y-6 text-xl md:text-2xl text-neutral-400 ml-4 list-decimal marker:text-white marker:font-black'>
					{children}
				</ol>
			),
		},
		listItem: {
			bullet: ({ children }: any) => (
				<li className='relative pl-12 before:content-[""] before:absolute before:left-0 before:top-4 before:w-4 before:h-[2px] before:bg-white leading-relaxed font-light'>
					{children}
				</li>
			),
			number: ({ children }: any) => (
				<li className='pl-4 leading-relaxed font-light'>
					{children}
				</li>
			),
		},
	};

	if (loading) {
		return (
			<div className='min-h-screen bg-black flex items-center justify-center font-mono'>
				<div className='text-center space-y-4'>
					<div className='w-16 h-px bg-white animate-pulse mx-auto'></div>
					<p className='text-[10px] tracking-[0.5em] uppercase text-gray-500'>
						Deciphering Entry...
					</p>
				</div>
			</div>
		);
	}

	if (error || !post) {
		return (
			<div className='min-h-screen bg-black flex items-center justify-center'>
				<div className='text-center max-w-lg mx-auto px-6'>
					<h1 className='text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter'>
						Void.
					</h1>
					<p className='text-gray-500 text-lg mb-12 uppercase tracking-tight'>
						{error || "The requested data is non-existent."}
					</p>
					<Link
						href='/blog'
						className='inline-block border border-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all'
					>
						Return to Feed
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-black text-white min-h-screen'>
			{/* Reading Progress Bar */}
			<div className='fixed top-0 left-0 w-full h-1 bg-white/5 z-50'>
				<div
					className='h-full bg-white transition-all duration-300 ease-out'
					style={{ width: `${readingProgress}%` }}
				/>
			</div>

			{/* Floating Share Buttons */}
			<div className='fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block'>
				<div className='border border-white/10 p-2 space-y-2 bg-black/50 backdrop-blur-md'>
					<button
						onClick={() => sharePost("twitter")}
						className='block p-3 hover:bg-white hover:text-black transition-all'
						title='Transmit via X'
					>
						<Icon icon='mdi:twitter' className='text-xl' />
					</button>
					<button
						onClick={() => sharePost("linkedin")}
						className='block p-3 hover:bg-white hover:text-black transition-all'
						title='Transmit via LinkedIn'
					>
						<Icon icon='mdi:linkedin' className='text-xl' />
					</button>
					<button
						onClick={() => sharePost("whatsapp")}
						className='block p-3 hover:bg-white hover:text-black transition-all'
						title='Transmit via WhatsApp'
					>
						<Icon icon='mdi:whatsapp' className='text-xl' />
					</button>
					<button
						onClick={copyToClipboard}
						className='block p-3 hover:bg-white hover:text-black transition-all'
						title='Copy Protocol'
					>
						<Icon icon='mdi:link' className='text-xl' />
					</button>
				</div>
			</div>

			<article className='max-w-4xl mx-auto px-6 py-16 md:py-32'>
				{/* Back Link */}
				<div className='mb-24'>
					<Link
						href='/blog'
						className='text-xs font-bold tracking-[0.4em] uppercase text-gray-600 hover:text-white transition-colors'
					>
						← Return to Universal Feed
					</Link>
				</div>

				{/* Article Header */}
				<header className='mb-24'>
					<div className='flex items-center space-x-4 mb-4'>
						<div className='h-px w-8 bg-white'></div>
						<div className='text-xs font-bold tracking-[0.5em] uppercase text-gray-500'>
							Entry Log // {formatDate(post.publishedAt)}
						</div>
					</div>

					<h1 className='text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none'>
						{post.title}
					</h1>

					<div className='flex flex-wrap items-center gap-12 text-gray-500 uppercase tracking-widest text-[10px] font-bold'>
						<div className='flex items-center space-x-2'>
							<span className='text-white'>Auth:</span>
							<span>{post.author?.name || "Tunmise E.A"}</span>
						</div>
						<div className='flex items-center space-x-2'>
							<span className='text-white'>Time:</span>
							<span>{estimatedReadTime} MIN SCAN</span>
						</div>
					</div>
				</header>

				{/* Featured Image */}
				{post.mainImage && (
					<div className='mb-24 border border-white/10'>
						<Image
							src={urlFor(post.mainImage)
								.width(1200)
								.height(600)
								.url()}
							alt={post.title}
							width={1200}
							height={600}
							className='w-full grayscale contrast-125'
							priority
						/>
					</div>
				)}

				{/* Article Body */}
				<div className='prose prose-invert prose-2xl max-w-none text-neutral-400 font-light leading-relaxed mb-32 article-body'>
					{post.body && Array.isArray(post.body) && post.body.length > 0 ? (
						<PortableText
							value={post.body}
							components={portableTextComponents}
						/>
					) : (
						<div className='text-center py-16 border border-white/5'>
							<p className='text-xs tracking-widest uppercase'>
								Log is Empty.
							</p>
						</div>
					)}
				</div>

				{/* Final Call */}
				<div className='border-t border-white/10 pt-24 text-center'>
					<h3 className='text-3xl md:text-6xl font-black uppercase tracking-tighter mb-12'>
						END OF LOG.
					</h3>
					<div className='flex justify-center gap-8 items-center'>
						<button
							onClick={() =>
								window.scrollTo({ top: 0, behavior: "smooth" })
							}
							className='text-white text-xs font-bold uppercase tracking-widest border border-white px-8 py-4 hover:bg-white hover:text-black transition-all'
						>
							Scroll to Apex
						</button>
						<Link
							href='/blog'
							className='text-gray-600 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors'
						>
							Return to Stream
						</Link>
					</div>
				</div>
			</article>
		</div>
	);
};

export default BlogPostClient;
