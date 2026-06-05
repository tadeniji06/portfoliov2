"use client";

import { pfp } from "@/assets";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
	const focusAreas = [
		{
			title: "Full-stack delivery",
			description:
				"I build responsive frontends, backend APIs, dashboards, authentication flows, and data-driven product features with a strong bias for clean handoff and maintainable code.",
			icon: "mdi:layers-triple-outline",
		},
		{
			title: "Web3 exploration",
			description:
				"I work with crypto product flows, wallet-aware interfaces, Solidity fundamentals, exchange logic, and on-chain UX patterns that make blockchain products easier to use.",
			icon: "mdi:ethereum",
		},
		{
			title: "AI-assisted engineering",
			description:
				"I use tools like Claude and Codex to speed up research, debugging, refactoring, documentation, and implementation while keeping technical judgment in the loop.",
			icon: "mdi:robot-outline",
		},
	];

	const stats = [
		{ value: "5+", label: "Years building" },
		{ value: "15+", label: "Web products shipped" },
		{ value: "3", label: "Core focus areas" },
	];

	const stack = [
		"JavaScript",
		"TypeScript",
		"React",
		"Next.js",
		"Node.js",
		"Express.js",
		"MongoDB",
		"PostgreSQL",
		"Solidity",
		"Tailwind CSS",
		"Claude",
		"Codex",
	];

	return (
		<section
			id='about'
			className='py-28 bg-slate-50 text-slate-900 relative overflow-hidden flex justify-center'
		>
			<div className='absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 pointer-events-none' />

			<div className='max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='mb-16'
				>
					<div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase rounded-full mb-6'>
						<Icon icon='mdi:account-tie' className='w-5 h-5' />
						Professional Profile
					</div>
					<h2 className='text-5xl md:text-7xl font-black tracking-tight mb-8'>
						Full-stack developer building useful software for real teams.
					</h2>
					<p className='text-xl md:text-2xl font-medium text-slate-600 max-w-4xl leading-relaxed'>
						I am Tunmise Adeniji, a Lagos-based software developer focused on frontend engineering, backend systems, and Web3 product development. I like work that has a clear user, a real business need, and enough technical depth to keep the system interesting.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20'>
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className='lg:col-span-5'
					>
						<div className='rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-blue-900/5 bg-white p-2'>
							<Image
								alt='Tunmise Adeniji, full-stack and Web3 developer'
								src={pfp}
								width={500}
								height={600}
								className='w-full rounded-xl object-cover'
								priority
							/>
						</div>
					</motion.div>

					<div className='lg:col-span-7 space-y-8'>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm'
						>
							<h3 className='text-sm font-bold tracking-widest uppercase text-blue-600 mb-4 flex items-center gap-2'>
								<Icon icon='mdi:briefcase-check-outline' className='text-xl' />
								What I bring
							</h3>
							<p className='text-2xl md:text-4xl font-bold tracking-tight leading-tight text-slate-900'>
								A practical engineering mindset: ship the interface, wire the backend, document the decisions, and keep the product understandable.
							</p>
						</motion.div>

						<div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
							{stats.map((stat, i) => (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.08 }}
									key={stat.label}
									className='bg-white p-6 rounded-xl border border-slate-200'
								>
									<div className='text-4xl font-black text-slate-900 mb-2'>
										{stat.value}
									</div>
									<div className='text-xs text-slate-500 font-bold uppercase tracking-widest'>
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>

						<div className='bg-white p-8 rounded-2xl border border-slate-200'>
							<h3 className='text-sm font-bold tracking-widest uppercase text-slate-900 mb-5'>
								Core Stack
							</h3>
							<div className='flex flex-wrap gap-3'>
								{stack.map((tech) => (
									<span
										key={tech}
										className='rounded-lg bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700'
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
					{focusAreas.map((area, i) => (
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.08 }}
							key={area.title}
							className='bg-white p-8 rounded-2xl border border-slate-200 shadow-sm'
						>
							<div className='w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6'>
								<Icon icon={area.icon} className='text-3xl' />
							</div>
							<h4 className='text-2xl font-black tracking-tight text-slate-900 mb-4'>
								{area.title}
							</h4>
							<p className='text-slate-600 leading-relaxed font-medium'>
								{area.description}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='border-t border-slate-200 pt-16 text-center'
				>
					<h3 className='text-4xl md:text-6xl font-black tracking-tight mb-8 text-slate-900'>
						Open to full-stack, frontend, backend, and Web3-focused roles.
					</h3>
					<div className='flex flex-col sm:flex-row justify-center gap-4 items-center'>
						<a
							href='mailto:tadeniji06@gmail.com'
							className='w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all'
						>
							Contact Me <Icon icon='mdi:send' />
						</a>
						<Link
							href='/projects'
							className='w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-slate-50 hover:border-blue-300 transition-all'
						>
							View Projects <Icon icon='mdi:folder-open-outline' className='text-blue-500' />
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
