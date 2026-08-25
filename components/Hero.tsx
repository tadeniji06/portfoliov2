"use client";
import { useEffect } from "react";
import OneSignal from "react-onesignal";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
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

	return (
		<section className='min-h-screen relative flex flex-col lg:flex-row items-center justify-center px-4 overflow-hidden bg-[var(--color-bg-primary)]'>
			{/* Solid color geometric background elements instead of gradients */}
			<div className='absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-10 hidden lg:block'></div>
			<div className='absolute bottom-0 left-0 w-64 h-64 bg-slate-100 rounded-tr-[100px] -z-10 opacity-50'></div>

			<div className='z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-12'>
				<div className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className='mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm text-blue-600 text-sm font-semibold tracking-widest uppercase'
					>
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
						</span>
						Full-Stack Developer / Web3 Enthusiast
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none'
					>
						Tunmise Adeniji<span className='text-blue-600'>.</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
						className='text-lg md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12'
					>
						<span className='text-slate-900 font-medium'>I build practical, production-ready software</span> across frontend, backend, and Web3. My toolkit includes JavaScript, TypeScript, Node.js, React, Next.js, Solidity, Claude, and Codex.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
						className='mb-12 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl'
					>
						{[
							"Frontend systems",
							"Backend APIs",
							"Web3 products",
						].map((item) => (
							<div
								key={item}
								className='rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm text-center'
							>
								{item}
							</div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
						className='flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 w-full sm:w-auto'
					>
						<Link
							href='/projects'
							className='group relative w-full sm:w-auto overflow-hidden rounded-xl bg-blue-600 px-8 py-4 text-white transition-all hover:bg-blue-700 hover:shadow-xl'
						>
							<span className='relative z-10 flex items-center justify-center gap-2 font-bold tracking-wider'>
								View Projects
								<Icon icon="mdi:arrow-right" className="transition-transform group-hover:translate-x-1" />
							</span>
						</Link>

						<Link
							href='/about'
							className='group w-full sm:w-auto rounded-xl border border-slate-200 bg-white/50 px-8 py-4 text-slate-900 transition-all hover:border-blue-400 hover:bg-blue-50'
						>
							<span className='flex items-center justify-center gap-2 font-medium tracking-wider group-hover:text-blue-700 transition-colors'>
								About Me
							</span>
						</Link>
					</motion.div>
				</div>
				
				{/* CSS Code Window Illustration */}
				<motion.div 
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
					className="flex-1 w-full hidden lg:flex justify-center items-center"
				>
					<div className="relative w-full max-w-lg">
						<motion.div 
							animate={{ y: [0, -10, 0] }}
							transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
							className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-[2rem] blur-2xl opacity-20"
						></motion.div>
						<div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden flex flex-col h-80">
							{/* Window Header */}
							<div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
								<div className="flex gap-1.5">
									<div className="w-3 h-3 rounded-full bg-rose-500"></div>
									<div className="w-3 h-3 rounded-full bg-amber-500"></div>
									<div className="w-3 h-3 rounded-full bg-emerald-500"></div>
								</div>
								<div className="mx-auto flex items-center gap-2 px-3 py-1 bg-slate-900/50 rounded-md text-[10px] text-slate-400 font-mono">
									<Icon icon="mdi:react" className="text-blue-400" />
									<span>App.tsx</span>
								</div>
							</div>
							{/* Window Body */}
							<div className="p-6 font-mono text-sm leading-relaxed overflow-hidden flex-1 relative">
								<motion.div 
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 1, duration: 0.8 }}
								>
									<p className="text-pink-400">import <span className="text-white">{"{ "}</span>useState<span className="text-white">{" }"}</span> from <span className="text-emerald-300">"react"</span>;</p>
									<p className="text-pink-400 mt-2">export default function <span className="text-blue-400">Portfolio</span>() {"{"}</p>
									<p className="text-white ml-4 mt-2">const [level, setLevel] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">"Expert"</span>);</p>
									<p className="text-slate-400 ml-4 mt-4">{"// Building the future..."}</p>
									<p className="text-pink-400 ml-4 mt-2">return (</p>
									<p className="text-slate-300 ml-8 mt-2">&lt;<span className="text-blue-400">div</span> className=<span className="text-emerald-300">"flex flex-col"</span>&gt;</p>
									<p className="text-slate-300 ml-12 mt-2">&lt;<span className="text-blue-400">h1</span>&gt;Hello World!&lt;/<span className="text-blue-400">h1</span>&gt;</p>
									<p className="text-slate-300 ml-8 mt-2">&lt;/<span className="text-blue-400">div</span>&gt;</p>
									<p className="text-pink-400 ml-4 mt-2">);</p>
									<p className="text-pink-400 mt-2">{"}"}</p>
								</motion.div>
								{/* Blinking cursor */}
								<motion.div 
									animate={{ opacity: [1, 0, 1] }} 
									transition={{ repeat: Infinity, duration: 1 }} 
									className="absolute top-[215px] left-[45px] w-2 h-4 bg-blue-400"
								></motion.div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Minimal scroll indicator without gradient */}
			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 1 }}
				className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
			>
				<span className="text-xs text-slate-400 font-bold uppercase tracking-widest writing-vertical-rl rotate-180 mb-2">Scroll</span>
				<div className='w-0.5 h-12 bg-blue-200 overflow-hidden relative'>
					<motion.div 
						animate={{ y: ["-100%", "100%"] }}
						transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
						className="w-full h-1/2 bg-blue-600"
					></motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;

