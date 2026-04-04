"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ExperienceCardProps {
	company: string;
	position: string;
	period: string;
	location: string;
	jobType: string;
	description: string;
	index: number;
}

const ExperienceCard = ({
	company,
	position,
	period,
	location,
	jobType,
	description,
	index,
}: ExperienceCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50, scale: 0.95 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
			className='relative group w-full'
		>
			{/* Animated Glowing Timeline Node */}
			<div className='absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-white z-10 hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,1)] ring-4 ring-blue-500 overflow-hidden'>
				<motion.div 
					animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} 
					transition={{ duration: 2, repeat: Infinity }}
					className="w-full h-full bg-blue-500 rounded-full"
				/>
			</div>
			<div className='absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-white z-10 md:hidden ring-4 ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]'></div>

			{/* Card content */}
			<div
				className={`bg-white/80 backdrop-blur-xl border border-white/40 p-8 md:p-10 rounded-3xl transition-all duration-500 shadow-xl shadow-blue-900/5 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)] hover:border-blue-300 ml-6 md:ml-0 ${
					index % 2 === 0
						? "md:mr-auto text-left md:pr-16"
						: "md:ml-auto text-left md:pl-16"
				} md:w-[45%] relative z-20 overflow-hidden group-hover:-translate-y-2`}
			>
				{/* Holographic Watermark */}
				<Icon icon="mdi:hexagon-multiple-outline" className={`absolute -bottom-10 opacity-5 text-9xl text-blue-500 transform transition-transform duration-700 group-hover:rotate-180 ${index % 2 === 0 ? '-right-10' : '-left-10'}`} />

				<div className='flex flex-wrap items-center gap-3 mb-6'>
					<div className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 text-[10px] font-black tracking-widest uppercase text-white shadow-md shadow-blue-500/30'>
						<Icon icon="mdi:calendar-clock" className="text-sm" />
						{period}
					</div>
					<div className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-[10px] font-black tracking-widest uppercase text-slate-500'>
						<Icon icon="mdi:map-marker-radius" className="text-sm text-blue-500" />
						{location}
					</div>
					<div className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-[10px] font-black tracking-widest uppercase text-slate-500'>
						<Icon icon="mdi:briefcase-variant" className="text-sm text-blue-500" />
						{jobType}
					</div>
				</div>

				<h3 className='text-3xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors'>
					{position}
				</h3>

				<h4 className='text-xl font-bold text-slate-500 mb-6 flex items-center gap-2'>
					<Icon icon="mdi:domain" className="w-6 h-6 text-blue-500" />
					{company}
				</h4>

				<p className='text-slate-600 leading-relaxed font-medium text-base group-hover:text-slate-800 transition-colors whitespace-pre-line'>
					{description}
				</p>
			</div>
		</motion.div>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	const experiences = [
		{
			company: "BTech 360",
			position: "Lead Front-End Developer",
			period: "Feb 2025 — April 2026",
			location: "Lagos, Nig",
			jobType: "Onsite",
			description: `Architecting scalable, interactive web platforms for African enterprises.\n\nLeading a small dev team to deliver production-grade automation tools and intuitive UIs powered by React & TypeScript.`,
		},
		{
			company: "Gidswap Exchange",
			position: "CTO",
			period: "Aug 2025 — Present",
			location: "Lagos, Nig",
			jobType: "Remote",
			description: `Overseeing the full technical architecture for a modern crypto exchange.\n\nEngineered a seamless swap interface powered by Node.js and MongoDB. Leading technical strategy and system security.`,
		},
		{
			company: "Diakrino",
			position: "Full-Stack & Web3 Developer",
			period: "Oct 2023 — Mar 2025",
			location: "London, UK",
			jobType: "Full Remote",
			description: `Delivered next-gen Web2 + Web3 products.\n\nBuilt NFT minting and decentralized identity systems. Co-led development of a social dApp with React + Solidity.`,
		},
		{
			company: "Freelance",
			position: "Full-Stack Developer",
			period: "Jan 2022 — Present",
			location: "Global",
			jobType: "Remote",
			description: `Crafted digital experiences for startups and personal brands.\n\nBuilt responsive products with React, Tailwind, and Express. Collaborated with clients to tailor unique solutions.`,
		},
	];

	return (
		<section
			id='work'
			ref={ref}
			className='py-24 md:py-40 bg-slate-50 relative overflow-hidden flex justify-center'
		>
			{/* Animated Grid Background mapping Parallax */}
			<motion.div 
				style={{ y: backgroundY }}
				className='absolute inset-0 z-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=")]'
			/>
			
			<div className='absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-300/30 blur-[150px] rounded-full pointer-events-none z-0'></div>
			<div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/60 blur-[150px] rounded-full pointer-events-none z-0'></div>

			{/* Floating Gamified Orbs */}
			<motion.div 
				animate={{ y: [-20, 20, -20], rotate: [0, 90, 180, 270, 360] }} 
				transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
				className="absolute top-32 right-32 w-32 h-32 border-2 border-blue-200/50 rounded-[2rem] hidden lg:flex items-center justify-center opacity-40 z-0"
			>
				<Icon icon="mdi:atom" className="text-6xl text-blue-400" />
			</motion.div>
			<motion.div 
				animate={{ y: [20, -20, 20], rotate: [360, 270, 180, 90, 0] }} 
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				className="absolute bottom-40 left-20 w-48 h-48 border border-blue-400/20 rounded-full hidden lg:flex items-center justify-center opacity-50 z-0"
			>
				<div className="w-32 h-32 border-2 border-blue-300/30 rounded-full border-dashed animate-spin-slow"></div>
			</motion.div>

			<div className='max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-24 text-center md:text-left flex flex-col items-center md:items-start'
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-[1rem] shadow-sm text-blue-600 font-bold text-sm tracking-widest uppercase mb-6 border border-slate-100">
						<Icon icon="mdi:database-search" className="text-xl" />
						Operational History
					</div>
					<h2 className='text-5xl md:text-8xl font-black tracking-tight mb-8 text-slate-900 leading-none'>
						System <span className="text-blue-600">Logs</span> <br className="hidden md:block"/> & Exploits
					</h2>
					<p className='text-lg md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed'>
						A timeline of my architectural conquests, hardcore engineering, and technical problem-solving.
					</p>
				</motion.div>

				{/* Timeline Grid */}
				<div className='relative'>
					{/* Vertical Line */}
					<motion.div 
						initial={{ height: 0 }}
						whileInView={{ height: "100%" }}
						viewport={{ once: true }}
						transition={{ duration: 1.5, ease: "easeOut" }}
						className='absolute left-0 md:left-1/2 top-4 w-1.5 bg-gradient-to-b from-blue-600 via-blue-300 to-slate-200 md:-translate-x-1/2 rounded-full overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.4)]'
					>
						{/* Traveling electron */}
						<motion.div 
							animate={{ y: ["0%", "1000%"] }} 
							transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
							className="w-full h-20 bg-white blur-sm"
						/>
					</motion.div>

					<div className='space-y-12 md:space-y-32'>
						{experiences.map((exp, index) => (
							<ExperienceCard
								key={index}
								company={exp.company}
								position={exp.position}
								period={exp.period}
								location={exp.location}
								jobType={exp.jobType}
								description={exp.description}
								index={index}
							/>
						))}
					</div>
				</div>
				
				{/* Bottom Cap */}
				<motion.div 
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8 }}
					className="mx-auto w-32 h-12 mt-20 md:mt-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/10 text-blue-600"
				>
					<Icon icon="mdi:chevron-double-down" className="text-2xl animate-bounce" />
				</motion.div>
			</div>
		</section>
	);
};

export default Experience;
