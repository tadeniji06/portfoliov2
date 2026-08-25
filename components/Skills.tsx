"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const skillCategories = [
	{
		title: "Frontend",
		icon: "mdi:monitor-dashboard",
		description:
			"Accessible, responsive product interfaces with modern React patterns and polished implementation.",
		skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
	},
	{
		title: "Backend",
		icon: "mdi:server-network",
		description:
			"API design, authentication, database-driven features, integrations, and server-side product logic.",
		skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "Prisma", "Firebase"],
	},
	{
		title: "Web3",
		icon: "mdi:ethereum",
		description:
			"Crypto product interfaces, wallet-aware flows, exchange logic, and Solidity-based learning projects.",
		skills: ["Solidity", "Web3 UX", "Wallet flows", "On-chain data", "Crypto swaps", "Smart contracts"],
	},
	{
		title: "AI & Workflow",
		icon: "mdi:robot-outline",
		description:
			"Uses AI tools responsibly to improve development speed, documentation, QA, and debugging.",
		skills: ["Claude", "Codex", "Git", "Vercel", "Sanity", "Technical writing"],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 }
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const }
	}
};

const Skills = () => {
	return (
		<section
			id='skills'
			className='py-20 md:py-28 bg-white relative overflow-hidden'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className='mb-14 max-w-3xl'
				>
					<div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase rounded-full mb-5 font-manrope'>
						<Icon icon='mdi:code-braces' className='text-lg' />
						Technical Capabilities
					</div>
					<h2 className='text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight font-manrope'>
						Skills aligned with modern product teams.
					</h2>
					<p className='text-lg md:text-xl text-slate-600 leading-relaxed font-medium'>
						My strongest work sits where frontend quality, backend reliability, Web3 curiosity, and AI-assisted productivity meet.
					</p>
				</motion.div>

				<motion.div 
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'
				>
					{skillCategories.map((category) => (
						<motion.div
							variants={itemVariants}
							whileHover={{ y: -8, scale: 1.02 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
							key={category.title}
							className='bg-slate-50 border border-slate-200 p-7 rounded-2xl shadow-sm hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 cursor-default bg-white'
						>
							<div className='w-14 h-14 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600 mb-6'>
								<Icon icon={category.icon} className='text-3xl' />
							</div>
							<h3 className='text-2xl font-black mb-3 text-slate-900 tracking-tight font-manrope'>
								{category.title}
							</h3>
							<p className='text-slate-600 leading-relaxed font-medium mb-6'>
								{category.description}
							</p>
							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill) => (
									<span
										key={skill}
										className='rounded-lg bg-slate-100 border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-blue-50 transition-colors'
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
