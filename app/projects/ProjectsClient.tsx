"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
	id: string;
	name: string;
	tagline: string;
	description: string;
	type: string[];
	status: "live" | "in_progress";
	url?: string;
	tech: string[];
	features: string[];
	role: string;
}

const projects: Project[] = [
	{
		id: "mybuma",
		name: "MyBuma",
		tagline: "Online media marketplace for creators, buyers, and digital content teams.",
		description:
			"MyBuma is an online media marketplace designed to help users discover, list, and transact around media-related services and assets. The product direction focuses on marketplace usability, vendor visibility, secure account flows, and a clear path from discovery to purchase inquiry.",
		type: ["Marketplace", "Media"],
		status: "live",
		url: "https://mybuma.com",
		tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "API integration"],
		role: "Full-stack implementation and product interface development",
		features: [
			"Marketplace-oriented information architecture",
			"Responsive vendor and listing experience",
			"Search-friendly pages for media services",
			"Conversion-focused navigation and calls to action",
		],
	},
	{
		id: "hrm360",
		name: "The HRM 360",
		tagline: "HR management software for employee operations and business administration.",
		description:
			"The HRM 360 is an HR management software product built for teams that need a cleaner way to manage employee data, operational workflows, and HR administration. The platform is positioned around practical business use: helping teams centralize people operations instead of relying on disconnected spreadsheets and manual processes.",
		type: ["SaaS", "HRTech"],
		status: "live",
		url: "https://thehrm360.com",
		tech: ["Next.js", "React", "TypeScript", "Node.js", "Database design"],
		role: "Full-stack product development and dashboard architecture",
		features: [
			"Employee management product structure",
			"Dashboard-first user experience",
			"Role-aware HR software positioning",
			"Scalable foundation for HR workflows and reporting",
		],
	},
	{
		id: "business360",
		name: "This Is Business 360",
		tagline: "Digital magazine for business news, articles, and editorial publishing.",
		description:
			"This Is Business 360 is an online magazine built for publishing news, long-form articles, business insights, and magazine-style content. The platform emphasizes readability, editorial structure, SEO visibility, and a content experience that can grow with regular publishing.",
		type: ["Publishing", "Media"],
		status: "live",
		url: "https://thisisbusiness360.com",
		tech: ["Next.js", "React", "Sanity CMS", "SEO", "Tailwind CSS"],
		role: "Frontend development, publishing workflow, and SEO-minded implementation",
		features: [
			"Article and magazine content structure",
			"SEO-friendly routing and metadata patterns",
			"Responsive editorial layouts",
			"CMS-ready publishing workflow",
		],
	},
	{
		id: "gidswap",
		name: "Gidswap Exchange",
		tagline: "Crypto swap and fiat access product for a cleaner exchange experience.",
		description:
			"Gidswap Exchange is a crypto product focused on simple swap flows, on-ramp and off-ramp usability, and a less intimidating exchange interface. The work spans product architecture, API integration, rate handling, and Web3-oriented user experience.",
		type: ["Web3", "FinTech"],
		status: "live",
		url: "https://gidswap.com",
		tech: ["Next.js", "Node.js", "MongoDB", "FixedFloat API", "Paycrest API"],
		role: "Technical lead across product architecture, frontend, and backend logic",
		features: [
			"Crypto-to-crypto and crypto-to-fiat swap flows",
			"Third-party liquidity and payment API integration",
			"Real-time rate-oriented product experience",
			"Clean interface for non-technical crypto users",
		],
	},
	{
		id: "imperiagroup",
		name: "Imperia Group",
		tagline: "A real estate company based in Kenya.",
		description:
			"Imperia Group is a digital platform for a real estate company based in Kenya, connecting clients with properties and real estate services across the region.",
		type: ["Real Estate"],
		status: "live",
		url: "https://imperiagrouponline.com",
		tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
		role: "Full-stack development",
		features: [
			"Real estate platform architecture",
			"Responsive property listing interface",
			"Client lead generation flows",
		],
	},
	{
		id: "greenerbricks",
		name: "Greener Bricks Solutions",
		tagline: "A green energy utility based startup.",
		description:
			"Greener Bricks Solutions is a web platform for a green energy utility startup, focused on delivering sustainable energy solutions and infrastructure services.",
		type: ["GreenTech", "Utility"],
		status: "live",
		url: "https://www.greenerbrickssolution.com",
		tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
		role: "Full-stack development",
		features: [
			"Utility service information architecture",
			"Responsive corporate website",
			"Sustainable energy solution showcase",
		],
	},
	{
		id: "zigsniper",
		name: "ZigSniper Bot",
		tagline: "Telegram-native Web3 automation for token buying and selling.",
		description:
			"ZigSniper is a Telegram bot concept for executing token actions from a chat interface. It reflects my interest in automation, Web3 product UX, and making chain interactions accessible without pushing users through heavy dashboards.",
		type: ["Web3", "Automation"],
		status: "live",
		url: "https://t.me/zigSniper_bot",
		tech: ["Node.js", "TypeScript", "Telegram Bot API", "ZigChain SDK"],
		role: "Bot workflow development and Web3 automation implementation",
		features: [
			"Telegram-based token interaction flow",
			"Buy and sell actions from a chat interface",
			"Session-aware bot interaction patterns",
			"Web3 automation experience design",
		],
	},
	{
		id: "dm360",
		name: "DM360",
		tagline: "Marketing operations platform concept for agencies and growing brands.",
		description:
			"DM360 is a SaaS concept for unifying common marketing operations such as SEO management, campaign planning, reporting, and automation. The project highlights product thinking around multi-tool replacement and business workflow design.",
		type: ["SaaS", "MarTech"],
		status: "in_progress",
		url: "https://thedm360.com",
		tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "OpenAI API"],
		role: "Product architecture and full-stack implementation",
		features: [
			"SEO and marketing workflow structure",
			"Agency dashboard product direction",
			"AI-assisted content and reporting concepts",
			"Scalable SaaS architecture planning",
		],
	},
	
];

const typeColors: Record<string, string> = {
	"Real Estate": "bg-teal-50 text-teal-700 border-teal-200",
	GreenTech: "bg-lime-50 text-lime-700 border-lime-200",
	Utility: "bg-cyan-50 text-cyan-700 border-cyan-200",
	Marketplace: "bg-emerald-50 text-emerald-700 border-emerald-200",
	Media: "bg-sky-50 text-sky-700 border-sky-200",
	SaaS: "bg-blue-50 text-blue-700 border-blue-200",
	HRTech: "bg-indigo-50 text-indigo-700 border-indigo-200",
	Publishing: "bg-amber-50 text-amber-700 border-amber-200",
	Web3: "bg-violet-50 text-violet-700 border-violet-200",
	FinTech: "bg-green-50 text-green-700 border-green-200",
	Automation: "bg-orange-50 text-orange-700 border-orange-200",
	MarTech: "bg-pink-50 text-pink-700 border-pink-200",
};

const ProjectCard = ({
	project,
	isActive,
	onClick,
}: {
	project: Project;
	isActive: boolean;
	onClick: () => void;
}) => (
	<button
		onClick={onClick}
		className={`w-full text-left p-5 md:p-6 border-b border-slate-200 transition-all duration-300 group relative overflow-hidden ${
			isActive ? "bg-blue-50/70" : "bg-white hover:bg-slate-50"
		}`}
	>
		{isActive && (
			<motion.div
				layoutId='activeIndicator'
				className='absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 rounded-r-md'
			/>
		)}
		<div className='flex items-start justify-between gap-4'>
			<div className='flex-1 min-w-0'>
				<div className='flex items-center gap-3 mb-3'>
					<span
						className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1.5 ${
							project.status === "live"
								? "bg-emerald-100 text-emerald-700"
								: "bg-amber-100 text-amber-700"
						}`}
					>
						<span className={`w-2 h-2 rounded-full ${project.status === "live" ? "bg-emerald-500" : "bg-amber-500"}`} />
						{project.status === "live" ? "Live" : "In Progress"}
					</span>
				</div>
				<h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors ${isActive ? "text-blue-700" : "text-slate-900 group-hover:text-blue-600"}`}>
					{project.name}
				</h3>
				<p className={`text-sm font-medium leading-relaxed ${isActive ? "text-slate-700" : "text-slate-500"}`}>
					{project.tagline}
				</p>
			</div>
			<div className={`mt-2 w-10 h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600"}`}>
				<Icon icon='mdi:arrow-right' className='text-xl' />
			</div>
		</div>
	</button>
);

const ProjectDetail = ({ project }: { project: Project }) => (
	<motion.div
		key={project.id}
		initial={{ opacity: 0, x: 20 }}
		animate={{ opacity: 1, x: 0 }}
		exit={{ opacity: 0, x: -20 }}
		transition={{ duration: 0.3 }}
		className='p-6 md:p-8 bg-white'
	>
		<div className='mb-6'>
			<div className='flex flex-wrap items-center gap-3 mb-5'>
				{project.type.map((t) => (
					<span
						key={t}
						className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border ${typeColors[t] ?? "bg-slate-50 text-slate-700 border-slate-200"}`}
					>
						{t}
					</span>
				))}
			</div>

			<h2 className='text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3'>
				{project.name}
			</h2>
			<p className='text-base md:text-lg text-blue-600 font-medium mb-4 leading-relaxed'>
				{project.tagline}
			</p>
			<p className='text-xs font-bold tracking-widest uppercase text-slate-500 leading-relaxed'>
				Role: {project.role}
			</p>
		</div>

		<div className='bg-slate-50 p-5 rounded-xl border border-slate-100 mb-7'>
			<p className='text-sm md:text-base text-slate-600 font-medium leading-relaxed'>
				{project.description}
			</p>
		</div>

		<div className='mb-7'>
			<h4 className='flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-900 mb-4'>
				<Icon icon='mdi:check-circle-outline' className='text-blue-500 text-lg' />
				Highlights
			</h4>
			<ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
				{project.features.map((feature, i) => (
					<motion.li
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.06 * i }}
						key={feature}
						className='flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 min-h-[72px]'
					>
						<div className='mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0'>
							<Icon icon='mdi:check' className='text-xs' />
						</div>
						<span className='text-sm text-slate-700 font-medium leading-relaxed'>{feature}</span>
					</motion.li>
				))}
			</ul>
		</div>

		<div className='mb-7'>
			<h4 className='flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-900 mb-4'>
				<Icon icon='mdi:cube-outline' className='text-blue-500 text-lg' />
				Stack
			</h4>
			<div className='flex flex-wrap gap-2.5'>
				{project.tech.map((t) => (
					<span
						key={t}
						className='text-xs px-3 py-2 bg-slate-100 text-slate-700 font-bold tracking-wide rounded-lg'
					>
						{t}
					</span>
				))}
			</div>
		</div>

		<div className='pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4'>
			{project.url && (
				<a
					href={project.url}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-3 px-6 py-3.5 bg-blue-600 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all group'
				>
					<span>Visit Project</span>
					<Icon icon='mdi:open-in-new' className='text-xl group-hover:translate-x-1 transition-transform' />
				</a>
			)}
		</div>
	</motion.div>
);

const ProjectsClient = () => {
	const [activeProject, setActiveProject] = useState<Project>(projects[0]);

	return (
		<div className='bg-slate-50 text-slate-900 min-h-screen relative overflow-hidden'>
			<div className='absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-35 pointer-events-none z-0' />

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20 relative z-10'>
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='mb-6'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm'
					>
						<Icon icon='mdi:arrow-left' />
						Back to Home
					</Link>
				</motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className='text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6'
				>
					Selected <span className='text-blue-600'>Projects</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className='text-lg md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed'
				>
					Production websites, SaaS products, publishing platforms, marketplaces, and Web3-adjacent tools built with a practical full-stack mindset.
				</motion.p>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.25 }}
				className='border-y border-slate-200 bg-white relative z-10'
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{[
							{ label: "Featured projects", value: "6", icon: "mdi:folder-star-outline" },
							{ label: "Live products", value: "5", icon: "mdi:web-check" },
							{ label: "Primary stack", value: "JS/TS", icon: "mdi:language-typescript" },
							{ label: "Focus", value: "Full-stack", icon: "mdi:layers-triple-outline" },
						].map((stat) => (
							<div key={stat.label} className='flex items-center gap-4'>
								<div className='w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0'>
									<Icon icon={stat.icon} className='text-2xl' />
								</div>
								<div>
									<p className='text-2xl md:text-3xl font-black text-slate-900 mb-0.5'>
										{stat.value}
									</p>
									<p className='text-[10px] font-bold tracking-widest uppercase text-slate-500'>
										{stat.label}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</motion.div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10'>
				<div className='lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start'>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.35 }}
						className='lg:col-span-5 flex flex-col gap-4'
					>
						<div className='p-2 mb-2 flex items-center gap-2 text-slate-500'>
							<Icon icon='mdi:format-list-bulleted-square' className='text-xl' />
							<p className='text-xs font-bold tracking-widest uppercase'>
								Project Index
							</p>
						</div>
						<div className='bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(37,99,235,0.06)]'>
							{projects.map((project) => (
								<ProjectCard
									key={project.id}
									project={project}
									isActive={activeProject.id === project.id}
									onClick={() => setActiveProject(project)}
								/>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.45 }}
						className='lg:col-span-7 mt-8 lg:mt-0'
					>
						<div className='bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(37,99,235,0.1)] relative'>
							<div className='border-b border-slate-100 bg-slate-50 px-6 py-4 flex justify-between items-center'>
								<p className='text-xs font-bold tracking-widest uppercase text-slate-600 flex items-center gap-2'>
									<Icon icon='mdi:monitor-dashboard' className='text-lg text-blue-500' />
									Project Details
								</p>
							</div>
							<AnimatePresence mode='wait'>
								<ProjectDetail key={activeProject.id} project={activeProject} />
							</AnimatePresence>
						</div>
					</motion.div>
				</div>
			</div>

			<div className='relative z-10 py-20'>
				<div className='max-w-4xl mx-auto px-4 text-center'>
					<div className='bg-white p-10 md:p-12 rounded-2xl border border-blue-100 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)]'>
						<h3 className='text-4xl md:text-5xl font-black text-slate-900 mb-6'>
							Looking for a developer who can work across the stack?
						</h3>
						<p className='text-lg text-slate-600 font-medium mb-10 max-w-xl mx-auto'>
							I am interested in teams building web products, SaaS platforms, internal tools, marketplaces, and Web3 user experiences.
						</p>
						<a
							href='mailto:tadeniji06@gmail.com'
							className='inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-slate-900 text-white font-bold text-sm tracking-wide hover:bg-blue-600 transition-all group'
						>
							<Icon icon='mdi:email-outline' className='text-2xl' />
							<span>Contact Me</span>
							<Icon icon='mdi:arrow-right-circle' className='text-xl group-hover:translate-x-1 transition-transform' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsClient;
