"use client";

import { pfp } from "@/assets";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
	const values = [
		{
			title: "PRECISION",
			description:
				"Code is either perfect or it is garbage. I don't settle for 'works on my machine'.",
			icon: "mdi:target",
		},
		{
			title: "AGILITY",
			description:
				"I attack problems with unmatched speed. Moving fast without breaking the core system.",
			icon: "mdi:lightning-bolt",
		},
		{
			title: "STEALTH",
			description:
				"Results speak louder than any bio ever could. I ship quiet, and the impact echoes loud.",
			icon: "mdi:ghost",
		},
	];

	return (
		<section
			id='about'
			className='py-32 bg-slate-50 text-slate-900 relative overflow-hidden flex justify-center'
		>
			{/* Gamified Background */}
			<div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=")] pointer-events-none opacity-50 z-0'></div>
			<div className='absolute top-1/4 -right-24 w-96 h-96 bg-blue-300/30 blur-[120px] rounded-full pointer-events-none'></div>
			<div className='absolute bottom-1/4 -left-24 w-96 h-96 bg-blue-200/30 blur-[120px] rounded-full pointer-events-none'></div>

			<div className='max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Player Profile Header */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='mb-24 md:mb-32'
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase rounded-full mb-6">
						<Icon icon="mdi:account" className="w-5 h-5" /> 
						Player Profile
					</div>
					<h2 className='text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8'>
						The <span className="text-blue-600">Entity.</span>
					</h2>
					<div className='w-32 h-2 bg-blue-600 mb-12 rounded-full'></div>
					<p className='text-2xl md:text-4xl font-medium text-slate-600 max-w-4xl leading-tight tracking-tight'>
						I don't just write code. I{" "}
						<span className='text-slate-900 font-black'>architect dominance.</span>
					</p>
				</motion.div>

				{/* Identity Block / Character Stats */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32'>
					<motion.div 
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className='lg:col-span-5 relative group'
					>
						<div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-[2.5rem] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
						<div className="relative rounded-[2rem] overflow-hidden border border-blue-100 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)] bg-white p-2">
							<Image
								alt='Tunmise'
								src={pfp}
								width={500}
								height={600}
								className='w-full rounded-[1.5rem] object-cover filter contrast-125 duration-700'
								priority
							/>
							<div className='absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-blue-600 font-black text-xs tracking-widest uppercase shadow-lg'>
								Lv. 99 Boss
							</div>
							<div className='absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-blue-50 text-xs tracking-widest uppercase flex items-center justify-between'>
								<span className="font-bold text-slate-800">Subject-01 // Tunmise E.A</span>
								<Icon icon="mdi:shield-check" className="text-xl text-blue-500" />
							</div>
						</div>
					</motion.div>

					<div className='lg:col-span-7 space-y-12'>
						<motion.div 
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='bg-white p-10 rounded-3xl border border-slate-100 shadow-sm'
						>
							<h3 className='text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-6 flex items-center gap-2'>
								<Icon icon="mdi:script-text" className="text-xl" /> The Philosophy
							</h3>
							<p className='text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-800'>
								"Most people build to be seen. I build to be <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">felt</span>."
							</p>
						</motion.div>

						<div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
							{[
								{ num: "5+", label: "Years of Expansion", icon: "mdi:clock-fast" },
								{ num: "10+", label: "Bosses Defeated", icon: "mdi:skull-crossbones" },
								{ num: "∞", label: "Mana / Focus", icon: "mdi:infinity" },
							].map((stat, i) => (
								<motion.div 
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.1 }}
									key={i} 
									className='bg-blue-50/50 p-6 rounded-2xl border border-blue-100'
								>
									<Icon icon={stat.icon} className="text-3xl text-blue-500 mb-4" />
									<div className='text-4xl font-black text-slate-900 mb-2'>
										{stat.num}
									</div>
									<div className='text-xs text-blue-600 font-bold uppercase tracking-widest'>
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Passive Skills / Core Values */}
				<div className='mb-32'>
					<div className="flex items-center gap-4 mb-12 justify-center">
						<div className="h-px bg-slate-200 flex-1 max-w-[100px]"></div>
						<h3 className='text-sm font-bold tracking-widest uppercase text-slate-400 text-center flex items-center gap-2'>
							<Icon icon="mdi:star-circle" className="text-lg text-amber-500" />
							Equipped Passive Skills
						</h3>
						<div className="h-px bg-slate-200 flex-1 max-w-[100px]"></div>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{values.map((v, i) => (
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								key={i}
								className='bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200 hover:-translate-y-2 transition-all group relative overflow-hidden'
							>
								<div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
								<div className="relative z-10">
									<div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-8">
										<Icon
											icon={v.icon}
											className='text-3xl'
										/>
									</div>
									<h4 className='text-2xl font-black tracking-tight text-slate-900 mb-4'>
										{v.title}
									</h4>
									<p className='text-slate-600 leading-relaxed font-medium'>
										{v.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* The Sound of Violence -> Acoustic Fuel */}
				<motion.div 
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden'
				>
					{/* Glowing sound wave effect */}
					<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

					<div className="relative z-10">
						<h3 className='inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-400 mb-8 px-4 py-2 bg-blue-900/50 rounded-full'>
							<Icon icon="mdi:headphones" className="text-lg" /> Acoustic Fuel
						</h3>
						<p className='text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none'>
							The frequency of the grind.
						</p>
						<p className='text-slate-400 text-lg mb-12 max-w-md font-medium leading-relaxed'>
							The grit of King Von, the raw ambition of Lil Durk. This is the background music to my code sessions that keeps the output rapid and precise.
						</p>
						<a
							href='https://open.spotify.com/playlist/37i9dQZF1EpiunT9MRBus8'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all group'
						>
							<Icon icon="mdi:play-circle" className="text-2xl" /> Play the Soundtrack
						</a>
					</div>
					<div className='relative z-10 grid grid-cols-2 gap-4'>
						{[
							"King Von",
							"Lil Durk",
							"Polo G",
							"EBK Jayboo",
							"21 Savage",
							"RodWave",
							"PayGotti",
							"Duck",
						].map((artist) => (
							<div
								key={artist}
								className='bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl text-xs font-bold text-slate-300 tracking-widest uppercase flex items-center gap-3 hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-white transition-all cursor-default backdrop-blur-md'
							>
								<Icon icon="mdi:music-note" className="text-blue-400" />
								{artist}
							</div>
						))}
					</div>
				</motion.div>

				{/* Final Call */}
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='border-t border-slate-200 pt-24 text-center'
				>
					<h3 className='text-4xl md:text-8xl font-black tracking-tighter mb-12 text-slate-900'>
						Ready to <span className="text-blue-600">execute?</span>
					</h3>
					<div className='flex flex-col sm:flex-row justify-center gap-6 items-center'>
						<Link
							href='/'
							className='w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold tracking-wide shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 transition-all'
						>
							Contact the Authority <Icon icon="mdi:send" />
						</Link>
						<Link
							href='/blog'
							className='w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold tracking-wide hover:bg-slate-50 hover:border-blue-300 transition-all'
						>
							Read the Archives <Icon icon="mdi:book-open-page-variant" className="text-blue-500" />
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
