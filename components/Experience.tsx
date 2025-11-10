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
			{/* Timeline dot */}
			<div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-gray-300 to-gray-700 border-4 border-black shadow-[0_0_20px_rgba(99,102,241,0.8)] z-10'></div>

			{/* Card */}
			<div
				className={`p-6 md:w-5/12 rounded-2xl border border-gray-700 bg-gradient-to-tr from-gray-900 to-gray-800 text-gray-100 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] ${
					index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
				}`}
			>
				<h3 className='text-2xl font-bold text-gray-400 mb-1'>
					{position}
				</h3>
				<h4 className='text-lg font-medium text-gray-300 mb-3'>
					{company}
				</h4>

				<div className='mb-4'>
					<span className='inline-flex items-center bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded-full border border-gray-700'>
						<Icon
							icon='mdi:calendar'
							className='mr-2 text-gray-400'
						/>
						{period}
					</span>
				</div>

				<p className='text-gray-400 leading-relaxed whitespace-pre-line'>
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
			company: "ValoraHR",
			position: "Founder & Lead Developer",
			period: "Oct 2025 — Present",
			description: `Building Africa’s next-gen HR Management SaaS for growing teams.
			
• Architected modular HR systems with Express, Vite, and MongoDB  
• Designed admin dashboards with analytics, payroll, and automation  
• Integrated Paystack OAuth and Google 2FA for secure, smooth workflows`,
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
			{/* Subtle glowing overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent pointer-events-none'></div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-5xl font-bold mb-4 text-white'>
						Work Experience
					</h2>
					<div className='w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto mb-6 rounded-full'></div>
					<p className='text-lg text-gray-400 max-w-2xl mx-auto'>
						A quick tour through the roles and projects that shaped my
						dev journey.
					</p>
				</div>

				{/* Timeline */}
				<div className='relative'>
					{/* Glowing timeline line */}
					<div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-700 via-gray-500 to-gray-700 md:-translate-x-1/2 shadow-[0_0_20px_rgba(99,102,241,0.3)]'></div>

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
