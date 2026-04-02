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
	status: "live" | "coming_soon";
	url?: string;
	tech: string[];
	features: string[];
	index: number;
	xp: number;
}

const projects: Project[] = [
	{
		id: "gidswap",
		name: "Gidswap Exchange",
		tagline: "Move Money. No Friction.",
		description:
			"A minimalist crypto exchange engineered for seamless on-ramping and off-ramping. Gidswap strips away the noise of traditional exchanges and delivers clean, fast, reliable liquidity access for the African market and beyond.",
		type: ["Web3", "FinTech"],
		status: "live",
		url: "https://gidswap.com",
		tech: [
			"Next.js",
			"Node.js",
			"MongoDB",
			"FixedFloat API",
			"Paycrest API",
		],
		features: [
			"Instant P2P crypto-to-fiat conversion",
			"On-ramp & off-ramp support for African currencies",
			"Minimalist UX built for speed and clarity",
			"Automated swap routing via FixedFloat & Paycrest",
			"Real-time exchange rate engine",
		],
		index: 0,
		xp: 2500,
	},
	{
		id: "zigsniper",
		name: "ZigSniper Bot",
		tagline: "Snipe. Buy. Sell. Dominate.",
		description:
			"A high-performance Telegram-native trading bot for ZigChain. ZigSniper gives users surgical precision when buying and selling tokens on-chain — from sniping new launches to executing exits, all from a chat interface.",
		type: ["Web3", "Automation"],
		status: "live",
		url: "https://t.me/zigSniper_bot",
		tech: [
			"Node.js",
			"Telegram Bot API",
			"ZigChain SDK",
			"TypeScript",
		],
		features: [
			"Token sniping on new ZigChain launches",
			"Buy & sell tokens directly from Telegram",
			"Real-time on-chain data feeds",
			"Multi-wallet session management",
			"Slippage controls and gas optimization",
		],
		index: 1,
		xp: 1800,
	},
	{
		id: "dm360",
		name: "DM360",
		tagline: "One Platform. Total Marketing Control.",
		description:
			"An end-to-end digital marketing platform combining design studio, SEO management, social scheduling, and email automation under one dashboard. DM360 is built for agencies and brands that refuse to juggle 15 tools simultaneously.",
		type: ["SaaS", "MarTech"],
		status: "coming_soon",
		url: "https://thedm360.com",
		tech: [
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Redis",
			"OpenAI API",
			"Nodemailer",
		],
		features: [
			"Integrated design studio with brand kit management",
			"SEO audit engine with actionable recommendations",
			"Unified social media scheduler (X, LinkedIn, Instagram)",
			"Email automation with behavioral triggers",
			"Client analytics dashboard with white-label reporting",
		],
		index: 2,
		xp: 3200,
	},
	{
		id: "emplorahq",
		name: "EmploraHQ",
		tagline: "employrahq.com",
		description:
			"An enterprise-grade HR management system engineered for the African context. EmploraHQ automates end-to-end HR operations — from payroll and KYC to performance tracking and KPI management — without the bloat of legacy HRMS platforms.",
		type: ["SaaS", "Enterprise"],
		status: "coming_soon",
		url: "https://employrahq.com",
		tech: [
			"Next.js",
			"Node.js",
			"PostgreSQL",
			"Dojah KYC API",
			"TypeScript",
			"Prisma",
		],
		features: [
			"Automated multi-currency African payroll engine",
			"KYC verification integrated via Dojah",
			"Employee performance & KPI tracking dashboards",
			"Leave management and onboarding automation",
			"HR analytics with real-time reporting",
		],
		index: 3,
		xp: 4500,
	},
];

const typeColors: Record<string, string> = {
	Web3: "bg-purple-100 text-purple-700 border-purple-200",
	FinTech: "bg-green-100 text-green-700 border-green-200",
	Automation: "bg-orange-100 text-orange-700 border-orange-200",
	SaaS: "bg-blue-100 text-blue-700 border-blue-200",
	MarTech: "bg-pink-100 text-pink-700 border-pink-200",
	Enterprise: "bg-slate-100 text-slate-700 border-slate-200",
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
		className={`w-full text-left p-6 md:p-8 border-b border-slate-200 transition-all duration-300 group relative overflow-hidden ${
			isActive
				? "bg-blue-50/50"
				: "bg-white hover:bg-slate-50"
		}`}
	>
		{isActive && (
			<motion.div 
				layoutId="activeIndicator"
				className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 rounded-r-md"
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
						<span className={`w-2 h-2 rounded-full ${project.status === "live" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}></span>
						{project.status === "live" ? "Live" : "In Dev"}
					</span>
					<span className="text-xs font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">+{project.xp} XP</span>
				</div>
				<h3
					className={`text-2xl font-bold mb-1 transition-colors ${
						isActive ? "text-blue-700" : "text-slate-900 group-hover:text-blue-600"
					}`}
				>
					{project.name}
				</h3>
				<p className={`text-sm font-medium truncate ${isActive ? "text-slate-700" : "text-slate-500"}`}>
					{project.tagline}
				</p>
			</div>
			<div className={`mt-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
				<Icon
					icon='mdi:arrow-right'
					className={`text-xl transition-transform ${isActive ? 'translate-x-0' : '-translate-x-0.5 group-hover:translate-x-0.5'}`}
				/>
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
		transition={{ duration: 0.4 }}
		className='p-8 md:p-12 h-full flex flex-col bg-white'
	>
		{/* Header */}
		<div className='mb-12'>
			<div className='flex flex-wrap items-center gap-3 mb-6'>
				{project.type.map((t) => (
					<span
						key={t}
						className={`text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border ${typeColors[t]}`}
					>
						{t}
					</span>
				))}
				<span className="ml-auto flex items-center gap-1.5 text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">
					<Icon icon="mdi:star-four-points" className="text-amber-500" />
					Difficulty: Hard
				</span>
			</div>

			<h2 className='text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4'>
				{project.name}
			</h2>
			<p className='text-xl text-blue-600 font-medium mb-8'>
				{project.tagline}
			</p>
			<div className='w-full h-px bg-slate-100'></div>
		</div>

		{/* Description */}
		<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-12 relative overflow-hidden">
			<Icon icon="mdi:format-quote-open" className="absolute -top-4 -left-4 text-6xl text-slate-200" />
			<p className='text-lg text-slate-600 font-medium leading-relaxed relative z-10'>
				{project.description}
			</p>
		</div>

		{/* Features */}
		<div className='mb-12'>
			<h4 className='flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-900 mb-6'>
				<Icon icon="mdi:target" className="text-blue-500 text-lg" /> Mision Objectives
			</h4>
			<ul className='space-y-4'>
				{project.features.map((feature, i) => (
					<motion.li 
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.1 * i }}
						key={i} 
						className='flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all'
					>
						<div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
							<Icon icon="mdi:check" className="text-sm" />
						</div>
						<span className='text-slate-700 font-medium'>
							{feature}
						</span>
					</motion.li>
				))}
			</ul>
		</div>

		{/* Tech Stack */}
		<div className='mb-12'>
			<h4 className='flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-900 mb-6'>
				<Icon icon="mdi:cube-outline" className="text-blue-500 text-lg" /> Stack Loadout
			</h4>
			<div className='flex flex-wrap gap-3'>
				{project.tech.map((t) => (
					<span
						key={t}
						className='flex items-center gap-1.5 text-xs px-4 py-2 bg-slate-100 text-slate-700 font-bold tracking-wide rounded-lg hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm'
					>
						<Icon icon="mdi:code-tags" className="opacity-50" />
						{t}
					</span>
				))}
			</div>
		</div>

		{/* CTA */}
		<div className='mt-auto pt-8 border-t border-slate-100 flex flex-wrap items-center gap-4'>
			{project.status === "live" && project.url ? (
				<a
					href={project.url}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 transition-all group'
				>
					<span>Execute Mission</span>
					<Icon
						icon='mdi:rocket-launch'
						className='text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
					/>
				</a>
			) : (
				<div className='flex flex-wrap items-center gap-4 w-full'>
					<div className='inline-flex items-center gap-3 px-6 py-4 bg-slate-100 rounded-xl text-slate-500 font-bold tracking-wide border border-slate-200'>
						<Icon icon="mdi:clock-fast" className="text-xl animate-spin-slow" />
						<span>Compiling Assets...</span>
					</div>
					{project.url && (
						<a
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors ml-auto underline underline-offset-4'
						>
							<Icon icon='mdi:earth' className='text-xl' />
							{project.url.replace("https://", "")}
						</a>
					)}
				</div>
			)}
		</div>
	</motion.div>
);

const ProjectsClient = () => {
	const [activeProject, setActiveProject] = useState<Project>(
		projects[0],
	);

	return (
		<div className='bg-slate-50 text-slate-900 min-h-screen relative overflow-hidden'>
			{/* Gamified Background Grid */}
			<div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=")] pointer-events-none opacity-50 z-0'></div>
			<div className='absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none z-0'></div>
			
			{/* Header */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-24 relative z-10'>
				<motion.div 
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-6'
				>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow-md'
					>
						<Icon icon="mdi:arrow-left" />
						Return to Main Base
					</Link>
				</motion.div>
				<motion.h1 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className='text-5xl md:text-8xl font-black tracking-tight text-slate-900 mb-6 flex items-center gap-4'
				>
					Mission <span className="text-blue-600">Control</span>
					<Icon icon="mdi:radar" className="text-blue-500 text-5xl md:text-7xl animate-pulse" />
				</motion.h1>
				<motion.p 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className='text-lg md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed'
				>
					Classified systems built in production. Select a mission node to view tactical details and operational status.
				</motion.p>
			</div>

			{/* Stats Bar (Player HUD) */}
			<motion.div 
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className='border-y border-slate-200 bg-white relative z-10'
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{[
							{ label: "Missions Completed", value: "4", icon: "mdi:trophy-outline" },
							{ label: "Current Rank", value: "S-Tier", icon: "mdi:chevron-triple-up" },
							{ label: "Active Nodes", value: "02", icon: "mdi:server-network" },
							{ label: "Total XP Earned", value: "12k+", icon: "mdi:star-shooting-outline" },
						].map((stat, i) => (
							<div key={stat.label} className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
									<Icon icon={stat.icon} className="text-2xl" />
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

			{/* Main Grid - Terminal Interface */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10'>
				<div className='lg:grid lg:grid-cols-12 lg:gap-8'>
					{/* Left: Quest List */}
					<motion.div 
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}
						className='lg:col-span-5 flex flex-col gap-4'
					>
						<div className='p-2 mb-2 flex items-center gap-2 text-slate-500'>
							<Icon icon="mdi:format-list-bulleted-square" className="text-xl" />
							<p className='text-xs font-bold tracking-widest uppercase'>
								Available Logs
							</p>
						</div>
						<div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(37,99,235,0.06)]">
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

					{/* Right: Quest Detail */}
					<motion.div 
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5 }}
						className='lg:col-span-7 min-h-[700px] mt-8 lg:mt-0'
					>
						<div className="h-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(37,99,235,0.1)] relative">
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500"></div>
							<div className='border-b border-slate-100 bg-slate-50 p-6 flex justify-between items-center'>
								<p className='text-xs font-bold tracking-widest uppercase text-slate-600 flex items-center gap-2'>
									<Icon icon="mdi:monitor-dashboard" className="text-lg text-blue-500" />
									Mission Brief
								</p>
								<div className="flex gap-2">
									<div className="w-3 h-3 rounded-full bg-rose-400"></div>
									<div className="w-3 h-3 rounded-full bg-amber-400"></div>
									<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
								</div>
							</div>
							<AnimatePresence mode="wait">
								<ProjectDetail key={activeProject.id} project={activeProject} />
							</AnimatePresence>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Bottom CTA Element */}
			<div className='relative z-10 py-24'>
				<div className='max-w-4xl mx-auto px-4 text-center'>
					<motion.div 
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						className="bg-white p-12 rounded-[2.5rem] border border-blue-100 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] relative overflow-hidden"
					>
						<Icon icon="mdi:hexagram-outline" className="absolute -top-10 -right-10 text-[15rem] text-blue-50 rotate-45 pointer-events-none" />
						
						<div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-600">
							<Icon icon="mdi:sword-cross" className="text-4xl" />
						</div>
						<h3 className='text-4xl md:text-5xl font-black text-slate-900 mb-6'>
							Start a New Co-op Session?
						</h3>
						<p className='text-lg text-slate-600 font-medium mb-10 max-w-xl mx-auto'>
							I party up with elite teams to raid complex technical challenges. Drop your coordinates and let's craft something crazy.
						</p>
						<a
							href='mailto:tadeniji06@gmail.com'
							className='inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-slate-900 text-white font-bold text-sm tracking-wide hover:bg-blue-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 transition-all group'
						>
							<Icon icon="mdi:handshake" className="text-2xl" />
							<span>Form Party</span>
							<Icon
								icon='mdi:arrow-right-circle'
								className='text-xl group-hover:translate-x-1 transition-transform'
							/>
						</a>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsClient;
