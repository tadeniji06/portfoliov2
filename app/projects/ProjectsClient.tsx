"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

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
	},
	{
		id: "dm360",
		name: "DM360",
		tagline: "Full-Stack Digital Domination.",
		description:
			"An end-to-end digital marketing platform combining design studio, SEO management, social scheduling, and email automation under one dashboard. DM360 is built for agencies and brands that refuse to manage 15 tools simultaneously.",
		type: ["SaaS", "MarTech"],
		status: "coming_soon",
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
	},
	{
		id: "valora",
		name: "Valora HR",
		tagline: "Modern HR. Built for Africa.",
		description:
			"An enterprise-grade HR management system engineered for the African context. Valora automates end-to-end HR operations — from payroll and KYC to performance tracking and KPI management — without the bloat of legacy HRMS platforms.",
		type: ["SaaS", "Enterprise"],
		status: "coming_soon",
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
	},
];

const typeColors: Record<string, string> = {
	Web3: "border-white/40 text-white",
	FinTech: "border-white/20 text-gray-400",
	Automation: "border-white/20 text-gray-400",
	SaaS: "border-white/40 text-white",
	MarTech: "border-white/20 text-gray-400",
	Enterprise: "border-white/20 text-gray-400",
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
		className={`w-full text-left p-8 border-b transition-all duration-500 group ${
			isActive
				? "bg-white text-black border-white"
				: "bg-black text-white border-white/10 hover:border-white/30 hover:bg-neutral-950"
		}`}
	>
		<div className='flex items-start justify-between gap-4'>
			<div className='flex-1 min-w-0'>
				<div className='flex items-center gap-4 mb-3'>
					<span
						className={`text-[9px] font-black tracking-[0.5em] uppercase px-3 py-1 border ${
							isActive
								? "border-black/30 text-black/60"
								: project.status === "live"
									? "border-white/40 text-white"
									: "border-white/10 text-gray-600"
						}`}
					>
						{project.status === "live" ? "● LIVE" : "○ INCOMING"}
					</span>
				</div>
				<h3
					className={`text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-1 ${
						isActive ? "text-black" : "text-white"
					}`}
				>
					{project.name}
				</h3>
				<p
					className={`text-xs font-bold tracking-[0.2em] uppercase ${
						isActive ? "text-black/50" : "text-gray-600"
					}`}
				>
					{project.tagline}
				</p>
			</div>
			<Icon
				icon='mdi:arrow-top-right'
				className={`text-2xl flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
					isActive ? "text-black" : "text-gray-700"
				}`}
			/>
		</div>
	</button>
);

const ProjectDetail = ({ project }: { project: Project }) => (
	<div className='p-8 md:p-16 h-full flex flex-col'>
		{/* Header */}
		<div className='mb-16'>
			<div className='flex items-center gap-4 mb-8'>
				{project.type.map((t) => (
					<span
						key={t}
						className={`text-[9px] font-black tracking-[0.4em] uppercase px-4 py-2 border ${typeColors[t]}`}
					>
						{t}
					</span>
				))}
			</div>

			<h2 className='text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4'>
				{project.name}
			</h2>
			<p className='text-lg text-gray-600 font-bold italic tracking-tight mb-8'>
				"{project.tagline}"
			</p>
			<div className='w-16 h-px bg-white/20'></div>
		</div>

		{/* Description */}
		<p className='text-xl text-neutral-400 font-light leading-relaxed mb-16 flex-grow-0'>
			{project.description}
		</p>

		{/* Features */}
		<div className='mb-16'>
			<h4 className='text-[10px] font-black tracking-[0.5em] uppercase text-gray-600 mb-8'>
				Core Systems
			</h4>
			<ul className='space-y-4'>
				{project.features.map((feature, i) => (
					<li key={i} className='flex items-start gap-6'>
						<div className='w-8 h-px bg-white/30 mt-4 flex-shrink-0'></div>
						<span className='text-neutral-300 font-light leading-relaxed'>
							{feature}
						</span>
					</li>
				))}
			</ul>
		</div>

		{/* Tech Stack */}
		<div className='mb-16'>
			<h4 className='text-[10px] font-black tracking-[0.5em] uppercase text-gray-600 mb-6'>
				Stack
			</h4>
			<div className='flex flex-wrap gap-2'>
				{project.tech.map((t) => (
					<span
						key={t}
						className='text-[10px] px-4 py-2 border border-white/10 text-gray-400 font-bold tracking-wider uppercase hover:border-white/30 hover:text-white transition-all cursor-default'
					>
						{t}
					</span>
				))}
			</div>
		</div>

		{/* CTA */}
		<div className='mt-auto pt-8 border-t border-white/10'>
			{project.status === "live" && project.url ? (
				<a
					href={project.url}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black text-xs tracking-[0.4em] uppercase hover:bg-neutral-200 transition-all group'
				>
					<span>Access System</span>
					<Icon
						icon='mdi:arrow-top-right'
						className='text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
					/>
				</a>
			) : (
				<div className='inline-flex items-center gap-4 px-10 py-5 border border-white/10 text-gray-600 font-black text-xs tracking-[0.4em] uppercase'>
					<div className='w-2 h-2 bg-gray-700 rounded-full animate-pulse'></div>
					<span>System Deploying</span>
				</div>
			)}
		</div>
	</div>
);

const ProjectsClient = () => {
	const [activeProject, setActiveProject] = useState<Project>(
		projects[0],
	);

	return (
		<div className='bg-black text-white min-h-screen'>
			{/* Header */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-40 md:pb-32'>
				<div className='mb-4'>
					<Link
						href='/'
						className='text-xs font-bold tracking-[0.4em] uppercase text-gray-600 hover:text-white transition-colors'
					>
						← Return to Archive
					</Link>
				</div>
				<h1 className='text-6xl md:text-[10rem] font-black tracking-tighter uppercase mb-6 leading-none'>
					The Arsenal.
				</h1>
				<div className='w-24 h-px bg-white opacity-50 mb-8'></div>
				<p className='text-xl md:text-3xl text-gray-500 font-light max-w-3xl tracking-tight leading-tight'>
					Classified systems built in{" "}
					<span className='text-white'>production</span>. Each one
					engineered with precision, deployed with intent.
				</p>
			</div>

			{/* Stats Bar */}
			<div className='border-y border-white/5 bg-neutral-950'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{[
							{ label: "Products Shipped", value: "4" },
							{ label: "Domains", value: "Web3 / SaaS" },
							{ label: "Live Systems", value: "02" },
							{ label: "Deploying Soon", value: "02" },
						].map((stat) => (
							<div key={stat.label}>
								<p className='text-2xl md:text-4xl font-black text-white mb-1'>
									{stat.value}
								</p>
								<p className='text-[10px] font-black tracking-[0.3em] uppercase text-gray-600'>
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Main Grid - Desktop Side-by-Side, Mobile Stacked */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32'>
				<div className='lg:grid lg:grid-cols-5 lg:gap-0 border border-white/10'>
					{/* Left: Project List */}
					<div className='lg:col-span-2 border-r border-white/10'>
						<div className='border-b border-white/10 p-6'>
							<p className='text-[10px] font-black tracking-[0.5em] uppercase text-gray-600'>
								Operational Index
							</p>
						</div>
						{projects.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								isActive={activeProject.id === project.id}
								onClick={() => setActiveProject(project)}
							/>
						))}
					</div>

					{/* Right: Project Detail */}
					<div className='lg:col-span-3 min-h-[600px] hidden lg:block'>
						<div className='border-b border-white/10 p-6'>
							<p className='text-[10px] font-black tracking-[0.5em] uppercase text-gray-600'>
								System Brief
							</p>
						</div>
						<ProjectDetail project={activeProject} />
					</div>
				</div>

				{/* Mobile: Show expanded detail cards */}
				<div className='lg:hidden mt-8 space-y-8'>
					{projects.map((project) => (
						<div
							key={project.id}
							className='border border-white/10 bg-neutral-950'
						>
							<ProjectDetail project={project} />
						</div>
					))}
				</div>
			</div>

			{/* Bottom CTA */}
			<div className='border-t border-white/5 bg-neutral-950'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center'>
					<h3 className='text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8'>
						Got a Mission?
					</h3>
					<p className='text-xl text-gray-500 font-light mb-16 max-w-xl mx-auto'>
						I build systems that operate. If you have a problem that
						requires precision engineering, let's talk.
					</p>
					<a
						href='mailto:tadeniji06@gmail.com'
						className='inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xs tracking-[0.5em] uppercase hover:bg-neutral-200 transition-all group'
					>
						<span>Initiate Contact</span>
						<Icon
							icon='mdi:arrow-top-right'
							className='text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectsClient;
