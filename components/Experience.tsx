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
			className='relative'
		>
			{/* Minimalist Timeline dot */}
			<div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-white z-10'></div>

			{/* Card */}
			<div
				className={`p-6 md:w-5/12 rounded-none border border-gray-800 bg-black text-white transition-all duration-500 hover:border-white ${
					index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
				}`}
			>
				<h3 className='text-2xl font-bold text-white mb-1 tracking-wide'>
					{position}
				</h3>
				<h4 className='text-lg font-light text-gray-400 mb-3 tracking-wider uppercase'>
					{company}
				</h4>

				<div className='mb-4'>
					<span className='inline-flex items-center bg-transparent text-sm text-gray-500 border border-gray-800 px-3 py-1 tracking-widest'>
						<Icon
							icon='mdi:calendar'
							className='mr-2 text-gray-600'
						/>
						{period}
					</span>
				</div>

				<p className='text-gray-400 leading-relaxed whitespace-pre-line font-light'>
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
			
• Designed intuitive UIs powered by React & TypeScript  
• Led a small dev team to deliver production-grade automation tools  
• Collaborated across design, backend, and QA for high-impact product releases`,
		},
		{
			company: "Gidswap Exchange",
			position: "CTO",
			period: "Aug 2025 — Present",
			description: `Overseeing the full technical architecture for a modern crypto exchange.
			
• Engineered a seamless swap interface powered by Node.js and MongoDB  
• Integrated APIs like FixedFloat & Paycrest for automated trading  
• Led technical strategy, team reviews, and system security practices`,
		},

		{
			company: "Diakrino",
			position: "Full-Stack & Web3 Developer",
			period: "Oct 2023 — Mar 2025",
			description: `Delivered next-gen Web2 + Web3 products for creative and fintech ecosystems.
			
• Built NFT minting and decentralized identity systems  
• Co-led development of a social dApp with React + Solidity  
• Balanced experimentation with reliability across agile releases`,
		},
		{
			company: "Freelance",
			position: "Full-Stack Developer",
			period: "Jan 2022 — Present",
			description: `Crafted digital experiences for startups and personal brands.
			
• Built responsive products with React, Tailwind, and Express  
• Collaborated closely with clients to tailor unique solutions  
• Maintained, optimized, and shipped scalable web applications`,
		},
	];

	return (
		<section
			id='work'
			className='py-20 md:py-24 bg-black relative overflow-hidden'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-5xl font-bold mb-4 text-white tracking-widest uppercase'>
						Experience
					</h2>
					<div className='w-16 h-px bg-white mx-auto mb-6 opacity-30'></div>
					<p className='text-lg text-gray-400 max-w-2xl mx-auto font-light tracking-wide'>
						A chronicle of my professional journey.
					</p>
				</div>

				{/* Timeline */}
				<div className='relative'>
					{/* Minimalist timeline line */}
					<div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2'></div>

					{/* Experience cards */}
					<div className='space-y-20 md:space-y-28'>
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
		</section>
	);
};

export default Experience;
