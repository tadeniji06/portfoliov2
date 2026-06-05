"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

interface ExperienceCardProps {
	company: string;
	position: string;
	period: string;
	location: string;
	jobType: string;
	description: string;
	index: number;
}

const experiences = [
	{
		company: "BTech 360",
		position: "Lead Front-End Developer",
		period: "Feb 2025 - Apr 2026",
		location: "Lagos, Nigeria",
		jobType: "Onsite",
		description:
			"Led frontend delivery for business automation and enterprise web products. Built reusable React and TypeScript interfaces, improved implementation quality, and collaborated with stakeholders to turn business workflows into usable dashboards.",
	},
	{
		company: "Gidswap Exchange",
		position: "Technical Lead",
		period: "Aug 2025 - Present",
		location: "Lagos, Nigeria",
		jobType: "Remote",
		description:
			"Owns product architecture and engineering direction for a crypto exchange product. Worked across Next.js, Node.js, MongoDB, and third-party payment/liquidity APIs to support swap flows, rate handling, and a clean user experience.",
	},
	{
		company: "Diakrino",
		position: "Full-Stack & Web3 Developer",
		period: "Oct 2023 - Mar 2025",
		location: "London, UK",
		jobType: "Remote",
		description:
			"Delivered Web2 and Web3 product features for remote teams. Contributed to NFT, identity, and social dApp concepts using React, Solidity fundamentals, and API-backed application logic.",
	},
	{
		company: "Freelance",
		position: "Full-Stack Developer",
		period: "Jan 2022 - Present",
		location: "Global",
		jobType: "Remote",
		description:
			"Built websites, dashboards, APIs, and content platforms for startups, agencies, and growing businesses. Projects include online marketplaces, HR software, media platforms, business websites, and Web3-adjacent products.",
	},
];

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
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5, delay: index * 0.08 }}
			className='relative group w-full'
		>
			<div className='absolute left-0 md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full bg-blue-600 z-10 ring-4 ring-blue-100' />

			<div
				className={`bg-white border border-slate-200 p-8 md:p-10 rounded-2xl transition-all duration-300 shadow-xl shadow-blue-900/5 hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.35)] hover:border-blue-300 ml-8 md:ml-0 ${
					index % 2 === 0
						? "md:mr-auto text-left md:pr-14"
						: "md:ml-auto text-left md:pl-14"
				} md:w-[45%] relative z-20`}
			>
				<div className='flex flex-wrap items-center gap-3 mb-6'>
					<div className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-[10px] font-black tracking-widest uppercase text-white'>
						<Icon icon='mdi:calendar-clock' className='text-sm' />
						{period}
					</div>
					<div className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-[10px] font-black tracking-widest uppercase text-slate-500'>
						<Icon icon='mdi:map-marker-radius' className='text-sm text-blue-500' />
						{location}
					</div>
					<div className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-[10px] font-black tracking-widest uppercase text-slate-500'>
						<Icon icon='mdi:briefcase-variant' className='text-sm text-blue-500' />
						{jobType}
					</div>
				</div>

				<h3 className='text-3xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors'>
					{position}
				</h3>

				<h4 className='text-xl font-bold text-slate-500 mb-6 flex items-center gap-2'>
					<Icon icon='mdi:domain' className='w-6 h-6 text-blue-500' />
					{company}
				</h4>

				<p className='text-slate-600 leading-relaxed font-medium text-base group-hover:text-slate-800 transition-colors'>
					{description}
				</p>
			</div>
		</motion.div>
	);
};

const Experience = () => {
	return (
		<section
			id='work'
			className='py-24 md:py-36 bg-slate-50 relative overflow-hidden flex justify-center'
		>
			<div className='absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-35' />

			<div className='max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='mb-20 text-center md:text-left flex flex-col items-center md:items-start'
				>
					<div className='inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-blue-600 font-bold text-sm tracking-widest uppercase mb-6 border border-slate-100'>
						<Icon icon='mdi:briefcase-outline' className='text-xl' />
						Experience
					</div>
					<h2 className='text-5xl md:text-7xl font-black tracking-tight mb-8 text-slate-900 leading-none'>
						Work <span className='text-blue-600'>History</span>
					</h2>
					<p className='text-lg md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed'>
						A snapshot of product work across frontend engineering, backend systems, Web3 products, and client delivery.
					</p>
				</motion.div>

				<div className='relative'>
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: "100%" }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: "easeOut" }}
						className='absolute left-2 md:left-1/2 top-4 w-1 bg-gradient-to-b from-blue-600 via-blue-300 to-slate-200 md:-translate-x-1/2 rounded-full'
					/>

					<div className='space-y-10 md:space-y-24'>
						{experiences.map((exp, index) => (
							<ExperienceCard
								key={`${exp.company}-${exp.period}`}
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
			</div>
		</section>
	);
};

export default Experience;
