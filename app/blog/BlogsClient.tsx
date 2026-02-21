"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import {
	getBlogPosts,
	getCategories,
	urlFor,
	BlogPost,
	Category,
} from "@/utils/sanity";

const BlogsClient = () => {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [selectedCategory, setSelectedCategory] =
		useState<string>("all");
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const [postsData, categoriesData] = await Promise.all([
					getBlogPosts(50),
					getCategories(),
				]);
				setPosts(postsData);
				setCategories(categoriesData);
				setFilteredPosts(postsData);
			} catch (error) {
				console.error("Error fetching blog data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		let filtered = posts;

		if (selectedCategory !== "all") {
			filtered = filtered.filter((post) =>
				post.categories?.some((cat) => cat._id === selectedCategory),
			);
		}

		if (searchTerm.trim()) {
			filtered = filtered.filter((post) =>
				post.title.toLowerCase().includes(searchTerm.toLowerCase()),
			);
		}

		setFilteredPosts(filtered);
	}, [posts, selectedCategory, searchTerm]);

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const getPostExcerpt = (body: any[]) => {
		if (!body || body.length === 0) return "No preview available...";

		const firstBlock = body.find(
			(block) => block._type === "block" && block.children,
		);
		if (!firstBlock) return "No preview available...";

		const text = firstBlock.children
			.map((child: any) => child.text)
			.join("")
			.slice(0, 150);

		return text + (text.length >= 150 ? "..." : "");
	};

	if (loading) {
		return (
			<div className='min-h-screen bg-black text-white flex items-center justify-center font-mono'>
				<div className='text-center space-y-4'>
					<div className='w-16 h-px bg-white animate-pulse mx-auto'></div>
					<p className='text-xs tracking-[0.5em] uppercase text-gray-500'>
						Authenticating Feed...
					</p>
				</div>
			</div>
		);
	}

	return (
		<section className='py-20 md:py-32 bg-black text-white min-h-screen'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* The Manifesto Header */}
				<div className='mb-24 text-left'>
					<h1 className='text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6'>
						The Manifesto.
					</h1>
					<div className='w-24 h-px bg-white opacity-50 mb-8'></div>
					<p className='text-xl md:text-3xl text-gray-500 font-light max-w-4xl tracking-tight leading-tight'>
						Sharing unfiltered insights, technical breakdowns, and the{" "}
						<span className='text-white'>
							architecture of success
						</span>
						.
					</p>
				</div>

				{/* Filter Interface */}
				<div className='mb-24 space-y-12'>
					<div className='max-w-2xl'>
						<div className='relative group'>
							<Icon
								icon='mdi:magnify'
								className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl group-focus-within:text-white transition-colors'
							/>
							<input
								type='text'
								placeholder='LOCATE INTEL...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='w-full pl-12 pr-4 py-5 bg-black text-white border-b border-white/10 placeholder-gray-800 focus:outline-none focus:border-white transition-all text-xs tracking-[0.3em] uppercase'
							/>
						</div>
					</div>

					<div className='flex flex-wrap gap-4'>
						<button
							onClick={() => setSelectedCategory("all")}
							className={`px-8 py-4 text-[10px] font-bold tracking-[0.4em] uppercase transition-all ${
								selectedCategory === "all"
									? "bg-white text-black"
									: "bg-transparent text-gray-600 border border-white/10 hover:border-white/40 hover:text-white"
							}`}
						>
							Universal Feed ({posts.length})
						</button>
						{categories.map((category) => {
							const count = posts.filter((post) =>
								post.categories?.some(
									(cat) => cat._id === category._id,
								),
							).length;
							return (
								<button
									key={category._id}
									onClick={() => setSelectedCategory(category._id)}
									className={`px-8 py-4 text-[10px] font-bold tracking-[0.4em] uppercase transition-all ${
										selectedCategory === category._id
											? "bg-white text-black"
											: "bg-transparent text-gray-600 border border-white/10 hover:border-white/40 hover:text-white"
									}`}
								>
									{category.title} ({count})
								</button>
							);
						})}
					</div>
				</div>

				{/* Intel Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10'>
					{filteredPosts.map((post) => (
						<article
							key={post._id}
							className='bg-black p-8 md:p-12 hover:bg-neutral-900 transition-all group flex flex-col justify-between aspect-square'
						>
							<div>
								<div className='flex items-center justify-between mb-8 pb-4 border-b border-white/5'>
									<span className='text-[10px] font-bold tracking-widest text-gray-700 uppercase'>
										{formatDate(post.publishedAt)}
									</span>
									<Icon
										icon='mdi:arrow-top-right'
										className='text-gray-800 group-hover:text-white transition-colors'
									/>
								</div>

								<h2 className='text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:italic transition-all'>
									{post.title}
								</h2>
								<p className='text-gray-500 font-light text-sm leading-relaxed mb-8 line-clamp-3'>
									{getPostExcerpt(post.body)}
								</p>
							</div>

							<Link
								href={`/blog/${post.slug.current}`}
								className='text-[10px] font-black tracking-[0.5em] uppercase text-white border-white/20 border px-6 py-4 hover:bg-white hover:text-black transition-all text-center'
							>
								Access Entry
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogsClient;
