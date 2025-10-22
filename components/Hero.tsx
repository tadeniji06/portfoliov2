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
		<section className='min-h-screen bg-black flex items-center justify-center relative px-4 py-6'>
			<div className='absolute inset-0 z-0 opacity-20'>
				<div className='absolute top-0 left-1/4 w-0.5 h-full bg-gray-600 hidden md:block'></div>
				<div className='absolute top-0 left-2/4 w-0.5 h-full bg-gray-600'></div>
				<div className='absolute top-0 left-3/4 w-0.5 h-full bg-gray-600 hidden md:block'></div>
				<div className='absolute top-1/4 left-0 w-full h-0.5 bg-gray-600 hidden md:block'></div>
				<div className='absolute top-2/4 left-0 w-full h-0.5 bg-gray-600'></div>
				<div className='absolute top-3/4 left-0 w-full h-0.5 bg-gray-600 hidden md:block'></div>
			</div>

			<div className='bg-black border-2 border-gray-800 shadow-2xl p-5 sm:p-8 md:p-10 w-full max-w-4xl text-center relative z-10'>
				<div className='absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 border-t-2 border-l-2 border-white'></div>
				<div className='absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-gray-400'></div>
				<div className='absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 border-b-2 border-l-2 border-gray-400'></div>
				<div className='absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 h-8 md:w-16 md:h-16 border-b-2 border-r-2 border-white'></div>

				<div className='relative mb-4'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white relative inline-block'>
						<span>Tunmise's</span>
						<span className='ml-2 md:ml-3 text-gray-300'>
							Portfolio
						</span>
						<div className='absolute -top-1 -right-8 md:-right-10 text-xs px-2 py-1 bg-gray-900 border border-white text-white rounded-sm font-medium'>
							v2.0
						</div>
					</h1>
				</div>

				<div className='w-24 h-0.5 bg-white mx-auto my-4 md:my-6'></div>

				<p className='text-base sm:text-lg md:text-xl text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed'>
					Web3 & FullStack Developer
				</p>

				<div className='flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8'>
					{[
						"logos:react",
						"logos:nextjs-icon",
						"logos:javascript",
						"logos:typescript-icon",
						"logos:tailwindcss-icon",
					].map((icon) => (
						<div
							key={icon}
							className='p-2 sm:p-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors duration-200'
						>
							<Icon
								icon={icon}
								width='24'
								height='24'
								className='md:w-8 md:h-8'
							/>
						</div>
					))}
				</div>

				<div className='mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6'>
					<Link
						href='#work'
						className='group inline-flex items-center justify-center bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-all duration-200 text-sm md:text-base py-3 px-6 md:py-4 md:px-8 font-medium'
					>
						<Icon
							icon='mdi:rocket-launch'
							className='mr-2 text-base md:text-xl'
						/>
						<span>View Experience</span>
					</Link>

					<Link
						href='/blog'
						className='inline-flex items-center justify-center bg-black text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-200 text-sm md:text-base py-3 px-6 md:py-4 md:px-8 font-medium'
					>
						<Icon
							icon='mdi:message'
							className='mr-2 text-base md:text-xl'
						/>
						<span>Read Articles</span>
					</Link>
				</div>

				<div className='absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block'>
					<div className='flex flex-col items-center'>
						<span className='text-gray-400 text-xs md:text-sm mb-2'>
							Scroll Down
						</span>
						<Icon
							icon='mdi:chevron-down'
							className='text-white text-xl md:text-2xl'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
