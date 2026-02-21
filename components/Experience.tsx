"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

interface ExperienceCardProps {
	company: string;
	position: string;
	period: string;
	description: string;
	index: number;
}

const ExperienceCard = ({
	company,
	position,
	period,
	description,
	index,
}: ExperienceCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className='relative group'
		>
			{/* Brutalist Timeline Dot */}
			<div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white z-10 hidden md:block'></div>

			{/* Card content */}
			<div
				className={`p-10 border border-white/5 bg-black transition-all duration-700 hover:border-white/20 hover:bg-neutral-950 ${
					index % 2 === 0
						? "md:mr-auto text-left"
						: "md:ml-auto text-left"
				} md:w-[45%]`}
			>
				<div className='text-[10px] font-bold tracking-[0.4em] uppercase text-gray-600 mb-4'>
					Log // {period}
				</div>

				<h3 className='text-3xl font-black text-white mb-2 uppercase tracking-tighter leading-none group-hover:italic transition-all'>
					{position}
				</h3>

				<h4 className='text-xs font-bold text-gray-400 mb-8 uppercase tracking-[0.2em]'>
					{company}
				</h4>

				<p className='text-gray-500 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors'>
					{description}
				</p>
			</div>
		</motion.div>
	);
};

const Experience = () => {
	const experiences = [
		{
			company: "BTech 360",
			position: "Lead Front-End Developer",
			period: "Feb 2025 — Present",
			description: `Architecting scalable, interactive web platforms for African enterprises. 
			
Leading a small dev team to deliver production-grade automation tools and intuitive UIs powered by React & TypeScript.`,
		},
		{
			company: "Gidswap Exchange",
			position: "CTO",
			period: "Aug 2025 — Present",
			description: `Overseeing the full technical architecture for a modern crypto exchange. 
			
Engineered a seamless swap interface powered by Node.js and MongoDB. Leading technical strategy and system security.`,
		},
		{
			company: "Diakrino",
			position: "Full-Stack & Web3 Developer",
			period: "Oct 2023 — Mar 2025",
			description: `Delivered next-gen Web2 + Web3 products. 
			
Built NFT minting and decentralized identity systems. Co-led development of a social dApp with React + Solidity.`,
		},
		{
			company: "Freelance",
			position: "Full-Stack Developer",
			period: "Jan 2022 — Present",
			description: `Crafted digital experiences for startups and personal brands. 
			
Built responsive products with React, Tailwind, and Express. Collaborated with clients to tailor unique solutions.`,
		},
	];

	return (
		<section
			id='work'
			className='py-24 md:py-40 bg-black relative overflow-hidden'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<div className='mb-32 text-left'>
					<h2 className='text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6'>
						The War Log.
					</h2>
					<div className='w-24 h-px bg-white opacity-50 mb-8'></div>
					<p className='text-xl md:text-3xl text-gray-500 font-light max-w-2xl tracking-tight'>
						A record of technical{" "}
						<span className='text-white'>conquests</span> and
						architectural dominance.
					</p>
				</div>

				{/* Timeline Grid */}
				<div className='relative'>
					{/* Vertical Line */}
					<div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2'></div>

					<div className='space-y-12 md:space-y-24'>
						{experiences.map((exp, index) => (
							<ExperienceCard
								key={index}
								company={exp.company}
								position={exp.position}
								period={exp.period}
								description={exp.description}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Background Noise */}
			<div className='absolute top-1/2 left-0 w-64 h-64 bg-white/5 blur-[120px] rounded-full pointer-events-none'></div>
		</section>
	);
};

export default Experience;
