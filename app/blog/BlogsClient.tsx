"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
	getBlogPosts,
	getCategories,
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
			month: "short",
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

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
	};

	if (loading) {
		return (
			<div className='min-h-screen bg-slate-50 flex flex-col items-center justify-center font-mono relative overflow-hidden'>
				<div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiIvPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzM2Yjc1MSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==")] pointer-events-none'></div>
				<motion.div 
					animate={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
					className='w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mb-6 relative z-10'
				/>
				<p className='text-xs font-bold tracking-[0.5em] uppercase text-blue-600 relative z-10 animate-pulse'>
					Loading Data Pack...
				</p>
			</div>
		);
	}

	return (
		<section className='pt-32 pb-20 md:pb-32 bg-slate-50 min-h-screen relative overflow-hidden'>
			{/* Gamified Background Grid */}
			<div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=")] pointer-events-none opacity-50 z-0'></div>
			<div className='absolute top-20 right-0 w-[600px] h-[600px] bg-blue-300/20 blur-[150px] rounded-full pointer-events-none z-0'></div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Quest Header */}
				<motion.div 
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-20 text-center flex flex-col items-center'
				>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase mb-6'>
						<Icon icon="mdi:brain" className="w-5 h-5 animate-pulse" />
						Knowledge Base // Level 99
					</div>
					<h1 className='text-5xl md:text-8xl font-black tracking-tight text-slate-900 mb-6'>
						Brain <span className="text-blue-600">Uploads</span>
					</h1>
					<p className='text-lg md:text-2xl text-slate-600 font-medium max-w-3xl'>
						Technical break-downs, engineering thoughts, and xp-gaining resources. Equip yourself with this intel.
					</p>
				</motion.div>

				{/* Inventory / Filter Interface */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className='mb-16 bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgba(37,99,235,0.08)] border border-blue-50'
				>
					<div className='flex flex-col md:flex-row gap-6 items-center justify-between mb-8'>
						<div className='w-full md:w-1/2 relative group'>
							<Icon
								icon='mdi:magnify'
								className='absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-xl group-focus-within:text-blue-600 transition-colors'
							/>
							<input
								type='text'
								placeholder='SEARCH INVENTORY...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='w-full pl-12 pr-4 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium placeholder-slate-400'
							/>
						</div>
					</div>

					{/* Category Tags */}
					<div className='flex flex-wrap gap-3'>
						<button
							onClick={() => setSelectedCategory("all")}
							className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center gap-2 ${
								selectedCategory === "all"
									? "bg-blue-600 text-white shadow-md shadow-blue-500/30 -translate-y-0.5"
									: "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
							}`}
						>
							<Icon icon="mdi:folder-multiple" />
							All Intel ({posts.length})
						</button>
						{categories.map((category) => {
							const count = posts.filter((post) =>
								post.categories?.some((cat) => cat._id === category._id),
							).length;
							return (
								<button
									key={category._id}
									onClick={() => setSelectedCategory(category._id)}
									className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center gap-2 ${
										selectedCategory === category._id
											? "bg-blue-600 text-white shadow-md shadow-blue-500/30 -translate-y-0.5"
											: "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
									}`}
								>
									<Icon icon="mdi:tag-outline" />
									{category.title} <span className="bg-white/20 px-2 py-0.5 rounded-md text-xs">{count}</span>
								</button>
							);
						})}
					</div>
				</motion.div>

				{/* Intel Grid */}
				{filteredPosts.length === 0 ? (
					<div className="py-20 text-center">
						<Icon icon="mdi:ghost-outline" className="w-20 h-20 text-slate-300 mx-auto mb-4" />
						<p className="text-xl text-slate-500 font-medium">No intel found for your search parameters.</p>
					</div>
				) : (
					<motion.div 
						variants={containerVariants}
						initial="hidden"
						animate="show"
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					>
						<AnimatePresence>
							{filteredPosts.map((post) => (
								<motion.article
									variants={itemVariants}
									layout
									key={post._id}
									className='bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200 transition-all hover:-translate-y-2 group flex flex-col justify-between h-full relative overflow-hidden'
								>
									{/* Decorative corner element */}
									<div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>

									<div className="relative z-10">
										<div className='flex items-center justify-between mb-6 pb-4 border-b border-slate-100'>
											<span className='inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600'>
												<Icon icon="mdi:calendar-blank" />
												{formatDate(post.publishedAt)}
											</span>
											<span className='px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-[10px] font-black tracking-widest uppercase'>
												XP +50
											</span>
										</div>

										<h2 className='text-2xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors'>
											{post.title}
										</h2>
										<p className='text-slate-500 font-medium text-sm leading-relaxed mb-8'>
											{getPostExcerpt(post.body)}
										</p>
									</div>

									<Link
										href={`/blog/${post.slug.current}`}
										className='relative z-10 w-full inline-flex justify-center items-center gap-2 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-bold py-4 rounded-xl transition-all duration-300'
									>
										Access Data 
										<Icon icon="mdi:arrow-right-circle" className="text-xl" />
									</Link>
								</motion.article>
							))}
						</AnimatePresence>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default BlogsClient;
