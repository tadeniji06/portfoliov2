"use client";
import { useEffect } from "react";
import OneSignal from "react-onesignal";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

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
		<section className='min-h-screen bg-black flex flex-col items-center justify-center relative px-4 overflow-hidden'>
			{/* Aggressive background radial elements */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white opacity-[0.03] rounded-full pointer-events-none'></div>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white opacity-[0.02] rounded-full pointer-events-none'></div>

			<div className='text-center z-10 max-w-5xl mx-auto'>
				<div className='mb-8'>
					<span className='text-xs font-bold tracking-[1em] text-gray-500 uppercase'>
						Apex Developer // Subject-01
					</span>
				</div>

				<h1 className='text-7xl md:text-[12rem] font-black text-white mb-8 tracking-tighter leading-none uppercase'>
					Tunmise.
				</h1>

				<p className='text-2xl md:text-5xl text-gray-500 font-light tracking-tighter mb-16 uppercase italic'>
					Engineering{" "}
					<span className='text-white font-bold'>Dominance</span> in
					the shadows.
				</p>

				<div className='flex flex-col sm:flex-row justify-center items-center gap-12 md:gap-20'>
					<Link
						href='#work'
						className='text-white text-xl font-bold tracking-widest uppercase border-b-2 border-white pb-2 hover:opacity-50 transition-all'
					>
						The War Log
					</Link>

					<Link
						href='/blog'
						className='text-gray-600 hover:text-white text-xl font-bold tracking-widest uppercase border-b-2 border-transparent hover:border-white pb-2 transition-all'
					>
						The Manifesto
					</Link>
				</div>
			</div>

			{/* Minimal vertical scroll indicator */}
			<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-white/20 to-transparent'></div>
		</section>
	);
};

export default Hero;
