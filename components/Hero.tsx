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
		<section className='min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden bg-[var(--color-bg-primary)]'>
			<div className='absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none' />

			<div className='z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center mt-12'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
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
					className='text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 tracking-tight leading-none'
				>
					Tunmise Adeniji<span className='text-blue-600'>.</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
					className='text-lg md:text-3xl text-slate-600 max-w-3xl font-light leading-relaxed mb-12'
				>
					<span className='text-slate-900 font-medium'>I build practical, production-ready software</span> across frontend, backend, and Web3. My toolkit includes JavaScript, TypeScript, Node.js, React, Next.js, Solidity, Claude, and Codex.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
					className='mb-12 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl'
				>
					{[
						"Frontend systems",
						"Backend APIs",
						"Web3 products",
					].map((item) => (
						<div
							key={item}
							className='rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm'
						>
							{item}
						</div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
					className='flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto'
				>
					<Link
						href='#work'
						className='group relative w-full sm:w-auto overflow-hidden rounded-xl bg-blue-600 px-8 py-4 text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]'
					>
						<span className='relative z-10 flex items-center justify-center gap-2 font-bold tracking-wider'>
							View Projects
							<Icon icon="mdi:arrow-right" className="transition-transform group-hover:translate-x-1" />
						</span>
					</Link>

					<Link
						href='/about'
						className='group w-full sm:w-auto rounded-xl border border-slate-200 bg-white/50 px-8 py-4 text-slate-900 transition-all hover:border-blue-300 hover:bg-blue-50'
					>
						<span className='flex items-center justify-center gap-2 font-medium tracking-wider group-hover:text-blue-700 transition-colors'>
							About Me
						</span>
					</Link>
				</motion.div>
			</div>

			{/* Minimal scroll indicator */}
			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 1 }}
				className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
			>
				<span className="text-xs text-slate-400 font-medium uppercase tracking-widest writing-vertical-rl rotate-180 mb-2">Scroll</span>
				<div className='w-[1px] h-16 bg-gradient-to-b from-blue-400 to-transparent'></div>
			</motion.div>
		</section>
	);
};

export default Hero;
