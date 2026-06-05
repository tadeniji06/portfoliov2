import { Icon } from "@iconify/react/dist/iconify.js";

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

const Skills = () => {
	return (
		<section
			id='skills'
			className='py-20 md:py-28 bg-white relative overflow-hidden'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				<div className='mb-14 max-w-3xl'>
					<div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase rounded-full mb-5'>
						<Icon icon='mdi:code-braces' className='text-lg' />
						Technical Capabilities
					</div>
					<h2 className='text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight'>
						Skills aligned with modern product teams.
					</h2>
					<p className='text-lg md:text-xl text-slate-600 leading-relaxed font-medium'>
						My strongest work sits where frontend quality, backend reliability, Web3 curiosity, and AI-assisted productivity meet.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
					{skillCategories.map((category) => (
						<div
							key={category.title}
							className='bg-slate-50 border border-slate-200 p-7 rounded-2xl transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5'
						>
							<div className='w-14 h-14 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600 mb-6'>
								<Icon icon={category.icon} className='text-3xl' />
							</div>
							<h3 className='text-2xl font-black mb-3 text-slate-900 tracking-tight'>
								{category.title}
							</h3>
							<p className='text-slate-600 leading-relaxed font-medium mb-6'>
								{category.description}
							</p>
							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill) => (
									<span
										key={skill}
										className='rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700'
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
