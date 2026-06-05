"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { toast } from "sonner";
import OneSignal from "react-onesignal";
import { motion } from "framer-motion";
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
				const postData = await getBlogPost(slug);

				if (postData) {
					setPost(postData);
					setEstimatedReadTime(postData.estimatedReadingTime || 5);

					if (postData.categories && postData.categories.length > 0) {
						try {
							const related = await getRelatedPosts(
								postData.categories,
								postData._id,
								3,
							);
							setRelatedPosts(related);
						} catch (relatedError) {
							console.warn("Error fetching related posts:", relatedError);
						}
					}
				} else {
					setError("Post not found");
				}
			} catch (error) {
				console.error("Error fetching blog post:", error);
				setError("Failed to load article");
			} finally {
				setLoading(false);
			}
		};

		if (slug && slug.trim()) {
			fetchPost();
		} else {
			setError("Invalid article URL");
			setLoading(false);
		}
	}, [slug]);

	// Reading progress tracker
	useEffect(() => {
		const updateReadingProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			setReadingProgress(Math.min(100, Math.max(0, progress)));
		};

		window.addEventListener("scroll", updateReadingProgress);
		return () => window.removeEventListener("scroll", updateReadingProgress);
	}, []);

	const formatDate = (dateString: string) => {
		try {
			return new Date(dateString).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		} catch (error) {
			return "Invalid date";
		}
	};

	const sharePost = (platform: string) => {
		if (!post) return;
		const url = window.location.href;
		const title = post.title || "";

		const shareUrls = {
			twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
			linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
			whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
		};

		const shareUrl = shareUrls[platform as keyof typeof shareUrls];
		if (shareUrl) {
			window.open(shareUrl, "_blank", "width=600,height=400");
		}
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			toast.success("Link copied!");
		} catch (error) {
			toast.error("Failed to copy link.");
		}
	};

	// Custom components for PortableText with light blue theme
	const portableTextComponents = {
		types: {
			image: ({ value }: any) => {
				if (!value?.asset) return null;
				try {
					const imageUrl = urlFor(value).width(1200).height(600).url();
					return (
						<figure className='my-16 group'>
							<div className='border-4 border-white overflow-hidden shadow-2xl rounded-2xl ring-1 ring-slate-100 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)]'>
								<Image
									src={imageUrl}
									alt={value.alt || "Article image"}
									width={1200}
									height={600}
									className='w-full h-auto transition-transform duration-700 group-hover:scale-105 object-cover'
								/>
							</div>
							{value.caption && (
								<figcaption className='text-center text-slate-500 text-[10px] mt-4 font-bold tracking-widest uppercase flex items-center justify-center gap-2'>
									<Icon icon="mdi:camera-outline" className="text-blue-500 text-sm" />
									{value.caption}
								</figcaption>
							)}
						</figure>
					);
				} catch (error) {
					return null;
				}
			},
			code: ({ value }: any) => (
				<div className='my-12 transition-all shadow-xl rounded-xl overflow-hidden'>
					<div className='bg-slate-900 px-6 py-3 border-b border-slate-800 flex items-center justify-between'>
						<span className='flex items-center gap-2 text-slate-400 text-[10px] font-black tracking-widest uppercase'>
							<Icon icon="mdi:console" className="text-blue-400 text-sm" />
							{value.language || "Terminal"}
						</span>
						<div className='flex space-x-2'>
							<div className='w-3 h-3 bg-rose-500 rounded-full'></div>
							<div className='w-3 h-3 bg-amber-500 rounded-full'></div>
							<div className='w-3 h-3 bg-emerald-500 rounded-full'></div>
						</div>
					</div>
					<pre className='p-8 bg-[#0a101f] text-blue-100 text-sm font-mono overflow-x-auto leading-relaxed'>
						<code>{value.code}</code>
					</pre>
				</div>
			),
		},
		block: {
			h1: ({ children }: any) => (
				<h1 className='text-5xl md:text-7xl font-black text-slate-900 mt-24 mb-10 tracking-tight leading-none'>
					{children}
				</h1>
			),
			h2: ({ children }: any) => (
				<h2 className='text-3xl md:text-4xl font-black text-slate-800 mt-20 mb-8 tracking-tight flex items-center gap-3'>
					<span className="text-blue-500 text-2xl">#</span>
					{children}
				</h2>
			),
			h3: ({ children }: any) => (
				<h3 className='text-2xl font-bold text-slate-800 mt-16 mb-6 tracking-tight'>
					{children}
				</h3>
			),
			normal: ({ children }: any) => (
				<p className='text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium max-w-none'>
					{children}
				</p>
			),
			blockquote: ({ children }: any) => (
				<blockquote className='border-l-4 border-blue-500 bg-blue-50 rounded-r-2xl px-10 py-8 my-12 relative overflow-hidden'>
					<Icon icon="mdi:format-quote-open" className="absolute -left-6 -top-6 text-[8rem] text-blue-500/10" />
					<div className='text-xl md:text-2xl font-semibold text-blue-900 italic leading-relaxed relative z-10'>
						{children}
					</div>
				</blockquote>
			),
		},
		marks: {
			strong: ({ children }: any) => (
				<strong className='font-black text-slate-900 bg-blue-100 px-1 rounded-sm'>
					{children}
				</strong>
			),
			em: ({ children }: any) => (
				<em className='italic text-slate-700 font-bold px-1'>
					{children}
				</em>
			),
			link: ({ children, value }: any) => (
				<a
					href={value.href}
					target='_blank'
					rel='noopener noreferrer'
					className='text-blue-600 font-bold underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 hover:bg-blue-50 transition-all px-1 rounded-md'
				>
					{children}
				</a>
			),
		},
		list: {
			bullet: ({ children }: any) => (
				<ul className='mb-12 space-y-4 text-lg text-slate-600 ml-4 list-none'>
					{children}
				</ul>
			),
			number: ({ children }: any) => (
				<ol className='mb-12 space-y-4 text-lg text-slate-600 ml-6 list-decimal marker:text-blue-600 marker:font-black'>
					{children}
				</ol>
			),
		},
		listItem: {
			bullet: ({ children }: any) => (
				<li className='relative pl-8 before:content-[""] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-blue-500 font-medium'>
					{children}
				</li>
			),
			number: ({ children }: any) => (
				<li className='pl-3 font-medium'>
					{children}
				</li>
			),
		},
	};

	if (loading) {
		return (
			<div className='min-h-screen bg-slate-50 flex flex-col items-center justify-center font-mono'>
				<motion.div 
					animate={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
					className='w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mb-6'
				/>
				<p className='text-[10px] font-bold tracking-[0.5em] uppercase text-blue-600 animate-pulse'>
					Loading Article...
				</p>
			</div>
		);
	}

	if (error || !post) {
		return (
			<div className='min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden'>
				<div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=")] pointer-events-none opacity-50 z-0'></div>
				<div className='text-center max-w-lg mx-auto px-6 relative z-10'>
					<Icon icon="mdi:file-alert-outline" className="text-8xl text-slate-300 mx-auto mb-8" />
					<h1 className='text-6xl md:text-8xl font-black text-slate-900 mb-8 uppercase tracking-tighter'>
						Article Not Found
					</h1>
					<p className='text-slate-500 text-lg mb-12 font-medium'>
						{error || "This article could not be loaded from the server."}
					</p>
					<Link
						href='/blog'
						className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all'
					>
						<Icon icon="mdi:backup-restore" className="text-xl" /> Back to Blog
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-slate-50 text-slate-900 min-h-screen relative'>
			{/* Reading Progress Bar */}
			<div className='fixed top-0 left-0 w-full h-1.5 bg-slate-200 z-50'>
				<div
					className='h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)] transition-all duration-300 ease-out rounded-r-full'
					style={{ width: `${readingProgress}%` }}
				/>
			</div>

			{/* Floating Share Buttons */}
			<div className='fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block'>
				<div className='border border-slate-200 p-2 space-y-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-200/50'>
					<button
						onClick={() => sharePost("twitter")}
						className='block p-3 rounded-xl text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all tooltip group relative'
						title='Share to X'
					>
						<Icon icon='mdi:twitter' className='text-xl' />
						<span className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-[10px] uppercase font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">X/Twitter</span>
					</button>
					<button
						onClick={() => sharePost("linkedin")}
						className='block p-3 rounded-xl text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all group relative'
						title='Share to LinkedIn'
					>
						<Icon icon='mdi:linkedin' className='text-xl' />
						<span className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-[10px] uppercase font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LinkedIn</span>
					</button>
					<button
						onClick={() => sharePost("whatsapp")}
						className='block p-3 rounded-xl text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all group relative'
						title='Share via WhatsApp'
					>
						<Icon icon='mdi:whatsapp' className='text-xl' />
						<span className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-[10px] uppercase font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">WhatsApp</span>
					</button>
					<div className="w-8 h-px bg-slate-200 mx-auto my-2"></div>
					<button
						onClick={copyToClipboard}
						className='block p-3 rounded-xl text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all group relative'
						title='Copy Link'
					>
						<Icon icon='mdi:link-variant' className='text-xl' />
						<span className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-[10px] uppercase font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Copy Link</span>
					</button>
				</div>
			</div>

			<article className='max-w-4xl mx-auto px-6 py-24 md:py-32 relative z-10'>
				{/* Back Link */}
				<motion.div 
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					className='mb-16'
				>
					<Link
						href='/blog'
						className='inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-all'
					>
						<Icon icon="mdi:arrow-left" className="text-lg" />
						Back to Blog
					</Link>
				</motion.div>

				{/* Article Header */}
				<header className='mb-20'>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='flex flex-wrap items-center gap-4 mb-8'
					>
						<div className='px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-black tracking-widest uppercase flex items-center gap-2'>
							<Icon icon="mdi:calendar-blank" /> Published: {formatDate(post.publishedAt)}
						</div>
						<div className='px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-md text-xs font-black tracking-widest uppercase flex items-center gap-2'>
							<Icon icon="mdi:clock-outline" /> {estimatedReadTime} min read
						</div>
					</motion.div>

					<motion.h1 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className='text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter mb-12 leading-none'
					>
						{post.title}
					</motion.h1>

					<motion.div 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className='flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 w-fit shadow-sm'
					>
						<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden border-2 border-white shadow-sm flex items-center justify-center bg-blue-100">
							<Icon icon="mdi:incognito" className="text-2xl text-blue-600" />
						</div>
						<div>
							<div className='text-[10px] font-black tracking-widest uppercase text-slate-400'>
								Author
							</div>
							<div className="text-sm font-bold text-slate-800">
								{post.author?.name || "Tunmise E.A"}
							</div>
						</div>
					</motion.div>
				</header>

				{/* Featured Image */}
				{post.mainImage && (
					<motion.div 
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3 }}
						className='mb-24 relative group'
					>
						<div className="absolute -inset-4 bg-blue-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
						<div className='relative border-4 border-white rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-100'>
							<Image
								src={urlFor(post.mainImage)
									.width(1200)
									.height(600)
									.url()}
								alt={post.title}
								width={1200}
								height={600}
								className='w-full object-cover transition-transform duration-700 group-hover:scale-105'
								priority
							/>
						</div>
					</motion.div>
				)}

				{/* Article Body */}
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className='prose prose-lg md:prose-xl max-w-none mb-32'
				>
					{post.body && Array.isArray(post.body) && post.body.length > 0 ? (
						<PortableText
							value={post.body}
							components={portableTextComponents}
						/>
					) : (
						<div className='text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm'>
							<Icon icon="mdi:file-document-alert-outline" className="text-6xl text-slate-300 mx-auto mb-4" />
							<p className='text-sm font-bold tracking-widest uppercase text-slate-400'>
								Article content unavailable.
							</p>
						</div>
					)}
				</motion.div>

				{/* Final Call */}
				<div className='mt-24 pt-16 border-t-2 border-slate-100 text-center relative overflow-hidden bg-white p-12 rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] text-slate-900'>
					<Icon icon="mdi:flag-checkered" className="absolute -top-10 -right-10 text-[12rem] text-slate-50 pointer-events-none" />
					<div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm relative z-10">
						<Icon icon="mdi:check-all" className="text-4xl" />
					</div>
					<h3 className='text-3xl md:text-5xl font-black tracking-tight mb-4 relative z-10'>
						Thanks for reading
					</h3>
					<p className="text-slate-500 font-medium mb-10 max-w-md mx-auto relative z-10">Explore more technical notes and product-building thoughts on the blog.</p>
					
					<div className='flex flex-wrap justify-center gap-4 items-center relative z-10'>
						<button
							onClick={() =>
								window.scrollTo({ top: 0, behavior: "smooth" })
							}
							className='flex items-center gap-2 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all group'
						>
							<Icon icon="mdi:arrow-up" className="group-hover:-translate-y-1 transition-transform" /> Back to Top
						</button>
						<Link
							href='/blog'
							className='flex items-center gap-2 bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-slate-200 hover:text-slate-900 transition-all'
						>
							<Icon icon="mdi:view-grid" /> Back to Blog
						</Link>
					</div>
				</div>
			</article>
		</div>
	);
};

export default BlogPostClient;
