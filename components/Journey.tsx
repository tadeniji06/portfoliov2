"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineEvent {
	id: string;
	year: string;
	title: string;
	description: string;
	icon: string;
	category: "early" | "education" | "tech" | "current" | "future";
	details?: string[];
	level: string;
}

const Journey: React.FC = () => {
	const [activeEvent, setActiveEvent] = useState<string>("early-life");
	const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

	const timelineEvents: TimelineEvent[] = [
		{
			id: "early-life",
			year: "2004-Present",
			title: "Early Life & Tech Obsession",
			description:
				"Growing up with an insatiable curiosity for how things work",
			icon: "mdi:baby-face-outline",
			category: "early",
			details: [
				"Born with natural curiosity about technology",
				"Dismantled every electronic device I could find",
				"Spent hours watching tech YouTube videos",
				"Dreamed of building the next big thing",
			],
			level: "Lv. 01 Tutorial",
		},
		{
			id: "first-code",
			year: "2018",
			title: "First Line of Code",
			description:
				"The moment that changed everything - Hello World!",
			icon: "mdi:code-braces",
			category: "tech",
			details: [
				"Discovered programming through online tutorials",
				'Wrote my first "Hello World" in JS',
				"Stayed up all night coding simple programs",
				"Realized this was my true calling",
			],
			level: "Lv. 10 Initiated",
		},
		{
			id: "university",
			year: "2020-2023",
			title: "University Journey",
			description: "Industrial Chemistry by chance, Tech by choice",
			icon: "mdi:school-outline",
			category: "education",
			details: [
				"Wanted Chemical/Petroleum Engineering",
				"Ended up in Industrial Chemistry",
				"Lived life in the fast lane",
				"Graduated with Distinction",
				"Coded more than I studied chemistry",
			],
			level: "Lv. 25 Grind",
		},
		{
			id: "tech-journey",
			year: "2021-2024",
			title: "Deep Dive into Development",
			description:
				"Following my anxiety for tech, building real solutions",
			icon: "mdi:rocket-launch-outline",
			category: "tech",
			details: [
				"Mastered React, Next.js, TypeScript",
				"Built 10+ real-world projects",
				"Freelanced while studying",
				"Became obsessed with clean code",
			],
			level: "Lv. 50 Mastery",
		},
		{
			id: "current",
			year: "2024-Present",
			title: "Advanced Engineering",
			description:
				"Architecting scalable solutions and pushing technical boundaries",
			icon: "mdi:console-network",
			category: "current",
			details: [
				"Building scalable web applications",
				"Advanced System Architecture",
				"Cloud Infrastructure Management",
				"Performance Optimization",
				"Full Stack Development",
			],
			level: "Lv. 80 Awakened",
		},
		{
			id: "goals",
			year: "2025+",
			title: "The Vision Ahead",
			description:
				"Not the next Bill Gates, just providing value & affording fast cars",
			icon: "mdi:trophy-outline",
			category: "future",
			details: [
				"Launch innovative products globally",
				"Build multiple SaaS products",
				"Provide value, get recognized",
				"Afford the fastest cars (priorities!)",
				"Inspire the next generation of African developers",
			],
			level: "Lv. 99 Boss",
		},
	];

	// Auto-play functionality
	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			setActiveEvent((prev) => {
				const currentIndex = timelineEvents.findIndex(
					(event) => event.id === prev,
				);
				const nextIndex = (currentIndex + 1) % timelineEvents.length;
				return timelineEvents[nextIndex]?.id || timelineEvents[0]?.id;
			});
		}, 4000);

		return () => clearInterval(interval);
	}, [isAutoPlaying, timelineEvents]);

	const handleEventClick = (eventId: string): void => {
		setActiveEvent(eventId);
		setIsAutoPlaying(false);
	};

	const getActiveEvent = (): TimelineEvent => {
		return (
			timelineEvents.find((event) => event.id === activeEvent) ||
			timelineEvents[0]
		);
	};

	const currentEvent = getActiveEvent();

	return (
		<section className='pt-32 pb-20 md:pb-32 bg-slate-50 text-slate-900 min-h-screen relative overflow-hidden'>
			{/* Gamified Background */}
			<div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=")] pointer-events-none opacity-50 z-0'></div>
			<div className='absolute top-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-[150px] rounded-full pointer-events-none z-0'></div>
			<div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/20 blur-[150px] rounded-full pointer-events-none z-0'></div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Campaign Header */}
				<motion.div 
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-20 text-center flex flex-col items-center'
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase rounded-full mb-6">
						<Icon icon="mdi:map-legend" className="w-5 h-5 animate-bounce-slow" /> 
						Main Campaign
					</div>
					<h2 className='text-5xl md:text-8xl font-black tracking-tight text-slate-900 mb-6'>
						The <span className="text-blue-600">Evolution.</span>
					</h2>
					<p className='text-lg md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed'>
						A documented history of technical growth, leveled up skills, and milestone achievements.
					</p>
				</motion.div>

				{/* The Core Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
					{/* Navigation: Vertical List / Quest Log */}
					<motion.div 
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className='lg:col-span-4 space-y-4'
					>
						<div className='flex items-center justify-between mb-6 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm'>
							<h3 className='text-xs font-bold tracking-widest uppercase text-slate-500 flex items-center gap-2'>
								<Icon icon="mdi:format-list-checks" className="text-blue-500 text-lg" />
								Timeline Logs
							</h3>
							<button
								onClick={() => setIsAutoPlaying(!isAutoPlaying)}
								className={`text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
									isAutoPlaying 
										? 'bg-amber-100 text-amber-700 border border-amber-200 hover:bg-amber-200' 
										: 'bg-emerald-100 text-emerald-700 border border-emerald-200 hover:bg-emerald-200'
								}`}
							>
								{isAutoPlaying ? (
									<><Icon icon="mdi:pauseCircle" /> Auto: ON</>
								) : (
									<><Icon icon="mdi:playCircle" /> Auto: OFF</>
								)}
							</button>
						</div>

						<div className='space-y-3 relative'>
							<div className="absolute left-6 top-8 bottom-8 w-1 bg-slate-200 rounded-full"></div>
							
							{timelineEvents.map((event) => (
								<div
									key={event.id}
									onClick={() => handleEventClick(event.id)}
									className={`p-5 rounded-2xl transition-all cursor-pointer relative z-10 flex gap-4 items-center overflow-hidden ${
										activeEvent === event.id
											? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 -translate-y-1"
											: "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50"
									}`}
								>
									{/* Active pulse effect */}
									{activeEvent === event.id && (
										<div className="absolute top-1/2 left-4 w-4 h-4 bg-white rounded-full animate-ping opacity-30"></div>
									)}
									
									<div className={`w-3 h-3 rounded-full flex-shrink-0 z-10 border-2 ${
										activeEvent === event.id ? 'bg-white border-white' : 'bg-slate-300 border-white'
									}`}></div>
									
									<div className="flex-1 min-w-0 z-10">
										<div
											className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${
												activeEvent === event.id
													? "text-blue-100"
													: "text-blue-500"
											}`}
										>
											{event.level}
										</div>
										<h4 className={`text-base font-bold truncate ${
											activeEvent === event.id ? "text-white" : "text-slate-900"
										}`}>
											{event.title}
										</h4>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					{/* The Data View: HUD Display */}
					<motion.div 
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
						className='lg:col-span-8'
					>
						<div className='bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] min-h-[600px] flex flex-col'>
							{/* Background watermark */}
							<div className='absolute -bottom-10 -right-10 text-[8rem] md:text-[12rem] font-black text-slate-50 uppercase tracking-tighter leading-none pointer-events-none select-none z-0 whitespace-nowrap'>
								{currentEvent.year}
							</div>

							<div className='relative z-10 flex-1 flex flex-col'>
								<AnimatePresence mode="wait">
									<motion.div 
										key={currentEvent.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.4 }}
										className="flex-1 flex flex-col"
									>
										<div className='flex items-center gap-4 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100'>
											<div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
												<Icon
													icon={currentEvent.icon}
													className='text-4xl'
												/>
											</div>
											<div className="flex-1">
												<div className='text-xs font-bold tracking-widest uppercase text-blue-500 mb-1'>
													Phase Complete
												</div>
												<div className='text-sm font-bold text-slate-800'>
													Log Duration: {currentEvent.year}
												</div>
											</div>
											<div className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-600 font-bold text-sm shadow-sm flex items-center gap-2">
												<Icon icon="mdi:star" className="text-amber-400" />
												{currentEvent.level}
											</div>
										</div>

										<h3 className='text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6'>
											{currentEvent.title}
										</h3>

										<div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl mb-10">
											<p className='text-xl md:text-2xl text-blue-800 font-medium leading-relaxed italic'>
												"{currentEvent.description}"
											</p>
										</div>

										{currentEvent.details && (
											<div className='space-y-6 mt-auto'>
												<h4 className="text-sm font-bold tracking-widest uppercase text-slate-900 flex items-center gap-2">
													<Icon icon="mdi:format-list-checks" className="text-blue-500 text-lg" />
													Action Items & Milestones
												</h4>
												<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
													{currentEvent.details.map((detail, index) => (
														<motion.div
															initial={{ opacity: 0, x: -10 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ delay: 0.2 + (index * 0.1) }}
															key={index}
															className='flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all'
														>
															<div className='w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5'>
																<Icon icon="mdi:check-bold" className="text-xs" />
															</div>
															<span className='text-slate-700 font-medium leading-relaxed'>
																{detail}
															</span>
														</motion.div>
													))}
												</div>
											</div>
										)}

										<div className='mt-10 pt-8 border-t border-slate-100 flex gap-4'>
											{activeEvent === "current" && (
												<a
													href='https://github.com/tadeniji06'
													target='_blank'
													rel='noopener noreferrer'
													className='inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 transition-all'
												>
													<Icon icon="mdi:github" className="text-2xl" />
													Inspect Tech Tree
												</a>
											)}
										</div>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Journey;
