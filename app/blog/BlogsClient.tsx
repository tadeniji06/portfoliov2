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
				post.categories?.some((cat) => cat._id === selectedCategory)
			);
		}

		if (searchTerm.trim()) {
			filtered = filtered.filter((post) =>
				post.title.toLowerCase().includes(searchTerm.toLowerCase())
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
			(block) => block._type === "block" && block.children
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
			<div className='min-h-screen bg-black text-white flex items-center justify-center'>
				<div className='text-center'>
					<Icon
						icon='mdi:loading'
						className='text-6xl animate-spin mx-auto mb-4'
					/>
					<p className='text-xl text-gray-300'>
						Loading amazing content...
					</p>
				</div>
			</div>
		);
	}

	return (
		<section className='py-20 md:py-24 bg-black text-white min-h-screen'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
						My Blog
						<span className='block text-2xl md:text-3xl text-gray-400 font-normal mt-2'>
							Thoughts, Insights & Tech Adventures
						</span>
					</h1>
					<div className='w-32 h-1 bg-white mx-auto mb-8 rounded-full'></div>
					<p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
						Sharing my journey in tech, lessons learned, and insights
						from building products that matter.
					</p>
				</div>

				<div className='mb-12'>
					<div className='max-w-2xl mx-auto mb-8'>
						<div className='relative'>
							<Icon
								icon='mdi:magnify'
								className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'
							/>
							<input
								type='text'
								placeholder='Search articles...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='w-full pl-12 pr-4 py-4 bg-zinc-900 text-white border-2 border-white rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg'
							/>
						</div>
					</div>

					<div className='flex flex-wrap justify-center gap-3'>
						<button
							onClick={() => setSelectedCategory("all")}
							className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
								selectedCategory === "all"
									? "bg-white text-black"
									: "bg-zinc-800 text-white hover:bg-zinc-700"
							}`}
						>
							All Posts ({posts.length})
						</button>
						{categories.map((category) => {
							const count = posts.filter((post) =>
								post.categories?.some(
									(cat) => cat._id === category._id
								)
							).length;
							return (
								<button
									key={category._id}
									onClick={() => setSelectedCategory(category._id)}
									className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
										selectedCategory === category._id
											? "bg-white text-black"
											: "bg-zinc-800 text-white hover:bg-zinc-700"
									}`}
								>
									{category.title} ({count})
								</button>
							);
						})}
					</div>
				</div>

				{/* Blog Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredPosts.map((post) => (
						<article
							key={post._id}
							className='bg-zinc-900 border border-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl'
						>
							<div className='relative h-48 overflow-hidden'>
								{post.mainImage ? (
									<Image
										src={urlFor(post.mainImage)
											.width(400)
											.height(200)
											.url()}
										alt={post.title}
										fill
										className='object-cover'
									/>
								) : (
									<div className='w-full h-full bg-black flex items-center justify-center'>
										<Icon
											icon='mdi:file-document'
											className='text-6xl text-white'
										/>
									</div>
								)}
							</div>
							<div className='p-6'>
								<h2 className='text-xl font-bold mb-3'>
									{post.title}
								</h2>
								<p className='text-gray-400 mb-4'>
									{getPostExcerpt(post.body)}
								</p>
								<Link
									href={`/blog/${post.slug.current}`}
									className='text-white font-semibold hover:underline'
								>
									Read More →
								</Link>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogsClient;
