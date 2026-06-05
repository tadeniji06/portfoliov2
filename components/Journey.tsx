"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

interface TimelineEvent {
	year: string;
	title: string;
	description: string;
	icon: string;
	details: string[];
}

const timelineEvents: TimelineEvent[] = [
	{
		year: "2018",
		title: "Started programming with JavaScript",
		description:
			"Moved from curiosity about technology into hands-on web development through tutorials, small experiments, and consistent practice.",
		icon: "mdi:code-braces",
		details: [
			"Learned core JavaScript and browser fundamentals",
			"Built early HTML, CSS, and JavaScript projects",
			"Developed a habit of learning by shipping small features",
		],
	},
	{
		year: "2020-2023",
		title: "Balanced university with software development",
		description:
			"Studied Industrial Chemistry while steadily building practical software skills and taking on real client work.",
		icon: "mdi:school-outline",
		details: [
			"Graduated with Distinction",
			"Built freelance websites and product interfaces",
			"Strengthened problem-solving through both academic and technical work",
		],
	},
	{
		year: "2021-2024",
		title: "Grew into full-stack product work",
		description:
			"Expanded from frontend implementation into backend APIs, databases, dashboards, and production product workflows.",
		icon: "mdi:layers-triple-outline",
		details: [
			"Worked with React, Next.js, TypeScript, Node.js, and MongoDB",
			"Built websites, dashboards, content platforms, and automation products",
			"Improved collaboration with clients, teams, and business stakeholders",
		],
	},
	{
		year: "2024-Present",
		title: "Focused on full-stack, Web3, and AI-assisted engineering",
		description:
			"Now focused on building practical software across frontend, backend, and Web3 while using AI tools to improve development speed and quality.",
		icon: "mdi:rocket-launch-outline",
		details: [
			"Building SaaS, HR, marketplace, publishing, and crypto product experiences",
			"Exploring Solidity, wallet-aware UX, swaps, and Web3 automation",
			"Using Claude and Codex for research, debugging, refactoring, and documentation",
		],
	},
];

const Journey = () => {
	return (
		<section className='pt-32 pb-20 md:pb-32 bg-slate-50 text-slate-900 min-h-screen relative overflow-hidden'>
			<div className='absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-35 pointer-events-none z-0' />

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-16 text-center flex flex-col items-center'
				>
					<div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase rounded-full mb-6'>
						<Icon icon='mdi:map-legend' className='w-5 h-5' />
						Career Journey
					</div>
					<h2 className='text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6'>
						How I grew into software engineering.
					</h2>
					<p className='text-lg md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed'>
						A concise timeline of learning, client work, full-stack growth, and the direction I am currently building toward.
					</p>
				</motion.div>

				<div className='relative'>
					<div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2 rounded-full' />
					<div className='space-y-10 md:space-y-16'>
						{timelineEvents.map((event, index) => (
							<motion.article
								key={event.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.08 }}
								className={`relative md:w-[46%] ml-12 md:ml-0 ${
									index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
								}`}
							>
								<div className='absolute -left-12 md:left-auto md:-translate-x-1/2 md:top-8 top-8 w-8 h-8 rounded-full bg-blue-600 ring-8 ring-blue-100 flex items-center justify-center text-white'>
									<Icon icon={event.icon} className='text-lg' />
								</div>

								<div className='bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-blue-900/5'>
									<div className='text-sm font-black tracking-widest uppercase text-blue-600 mb-3'>
										{event.year}
									</div>
									<h3 className='text-3xl font-black tracking-tight text-slate-900 mb-4'>
										{event.title}
									</h3>
									<p className='text-slate-600 leading-relaxed font-medium mb-6'>
										{event.description}
									</p>
									<ul className='space-y-3'>
										{event.details.map((detail) => (
											<li key={detail} className='flex items-start gap-3 text-slate-700 font-medium'>
												<span className='mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0'>
													<Icon icon='mdi:check' className='text-xs' />
												</span>
												{detail}
											</li>
										))}
									</ul>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Journey;
