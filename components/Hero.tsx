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
		<section className='min-h-screen bg-black flex flex-col items-center justify-center relative px-4'>
			{/* Subtle Background Grain/Texture could go here if supported, otherwise just black */}

			<div className='text-center z-10 max-w-2xl mx-auto'>
				<h1 className='text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter'>
					Tunmise.
				</h1>

				<p className='text-xl md:text-2xl text-gray-500 font-light tracking-widest mb-12 uppercase'>
					Building in the Dark
				</p>

				<div className='flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12'>
					<Link
						href='#work'
						className='text-gray-400 hover:text-white transition-all duration-500 tracking-widest text-sm uppercase border-b border-transparent hover:border-white pb-1'
					>
						Experience
					</Link>

					<Link
						href='/blog'
						className='text-gray-400 hover:text-white transition-all duration-500 tracking-widest text-sm uppercase border-b border-transparent hover:border-white pb-1'
					>
						Thoughts
					</Link>
				</div>
			</div>

			{/* Minimal Scroll Indicator */}
			<div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse'>
				<div className='w-px h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent'></div>
			</div>
		</section>
	);
};

export default Hero;
