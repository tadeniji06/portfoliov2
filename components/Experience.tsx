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
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
			className='relative group w-full'
		>
			{/* Glowing Timeline Dot */}
			<div className='absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 z-10 hidden md:block shadow-[0_0_15px_rgba(37,99,235,0.6)] ring-4 ring-white'></div>
			<div className='absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-blue-500 z-10 md:hidden ring-4 ring-white shadow-[0_0_10px_rgba(59,130,246,0.6)]'></div>

			{/* Card content */}
			<div
				className={`bg-white border border-slate-100 p-8 md:p-10 rounded-2xl transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200 ml-6 md:ml-0 ${
					index % 2 === 0
						? "md:mr-auto text-left md:pr-16"
						: "md:ml-auto text-left md:pl-16"
				} md:w-[45%] relative z-20`}
			>
				<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-xs font-bold tracking-widest uppercase text-blue-600 mb-6 border border-blue-100'>
					<Icon icon="mdi:console-line" className="w-4 h-4" />
					{period}
				</div>

				<h3 className='text-3xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors'>
					{position}
				</h3>

				<h4 className='text-lg font-bold text-slate-500 mb-6 flex items-center gap-2'>
					<Icon icon="mdi:server-network" className="w-5 h-5 text-blue-500" />
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
	const experiences = [
		{
			company: "BTech 360",
			position: "Lead Front-End Developer",
			period: "Feb 2025 — Present",
			description: `Architecting scalable, interactive web platforms for African enterprises.\n\nLeading a small dev team to deliver production-grade automation tools and intuitive UIs powered by React & TypeScript.`,
		},
		{
			company: "Gidswap Exchange",
			position: "CTO",
			period: "Aug 2025 — Present",
			description: `Overseeing the full technical architecture for a modern crypto exchange.\n\nEngineered a seamless swap interface powered by Node.js and MongoDB. Leading technical strategy and system security.`,
		},
		{
			company: "Diakrino",
			position: "Full-Stack & Web3 Developer",
			period: "Oct 2023 — Mar 2025",
			description: `Delivered next-gen Web2 + Web3 products.\n\nBuilt NFT minting and decentralized identity systems. Co-led development of a social dApp with React + Solidity.`,
		},
		{
			company: "Freelance",
			position: "Full-Stack Developer",
			period: "Jan 2022 — Present",
			description: `Crafted digital experiences for startups and personal brands.\n\nBuilt responsive products with React, Tailwind, and Express. Collaborated with clients to tailor unique solutions.`,
		},
	];

	return (
		<section
			id='work'
			className='py-24 md:py-40 bg-slate-50 relative overflow-hidden flex justify-center'
		>
			<div className='max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-24 text-center md:text-left flex flex-col items-center md:items-start'
				>
					<h2 className='text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-900'>
						System <span className="text-blue-600">Logs</span> & Exploits
					</h2>
					<div className='w-32 h-2 bg-blue-600 mb-8 rounded-full'></div>
					<p className='text-lg md:text-2xl text-slate-600 font-medium max-w-2xl'>
						A timeline of my architectural conquests, hardcore engineering, and technical problem-solving.
					</p>
				</motion.div>

				{/* Timeline Grid */}
				<div className='relative'>
					{/* Vertical Line */}
					<div className='absolute left-0 md:left-1/2 top-4 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-300 to-transparent md:-translate-x-1/2 rounded-full'></div>

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

			{/* Background Details */}
			<div className='absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-200/40 blur-[150px] rounded-full pointer-events-none'></div>
			<div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 blur-[150px] rounded-full pointer-events-none'></div>
		</section>
	);
};

export default Experience;
