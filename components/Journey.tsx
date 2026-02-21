"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

interface TimelineEvent {
	id: string;
	year: string;
	title: string;
	description: string;
	icon: string;
	category: "early" | "education" | "tech" | "current" | "future";
	details?: string[];
}

const Journey: React.FC = () => {
	const [activeEvent, setActiveEvent] =
		useState<string>("early-life");
	const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

	const timelineEvents: TimelineEvent[] = [
		{
			id: "early-life",
			year: "2004-Present",
			title: "Early Life & Tech Obsession",
			description:
				"Growing up with an insatiable curiosity for how things work",
			icon: "mdi:baby-face",
			category: "early",
			details: [
				"Born with natural curiosity about technology",
				"Dismantled every electronic device I could find",
				"Spent hours watching tech YouTube videos",
				"Dreamed of building the next big thing",
			],
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
		},
		{
			id: "university",
			year: "2020-2023",
			title: "University Journey",
			description: "Industrial Chemistry by chance, Tech by choice",
			icon: "mdi:school",
			category: "education",
			details: [
				"Wanted Chemical/Petroleum Engineering",
				"Ended up in Industrial Chemistry",
				"Lived life in the fast lane",
				"Graduated with Distinction",
				"Coded more than I studied chemistry",
			],
		},
		{
			id: "tech-journey",
			year: "2021-2024",
			title: "Deep Dive into Development",
			description:
				"Following my anxiety for tech, building real solutions",
			icon: "mdi:rocket-launch",
			category: "tech",
			details: [
				"Mastered React, Next.js, TypeScript",
				"Built 10+ real-world projects",
				"Freelanced while studying",
				"Became obsessed with clean code",
			],
		},
		{
			id: "current",
			year: "2024-Present",
			title: "Advanced Engineering",
			description:
				" architecting scalable solutions and pushing technical boundaries",
			icon: "mdi:code-json",
			category: "current",
			details: [
				"Building scalable web applications",
				"Advanced System Architecture",
				"Cloud Infrastructure Management",
				"Performance Optimization",
				"Full Stack Development",
			],
		},
		{
			id: "goals",
			year: "2025+",
			title: "The Vision Ahead",
			description:
				"Not the next Bill Gates, just providing value & affording fast cars",
			icon: "mdi:trophy",
			category: "future",
			details: [
				"Launch innovative products globally",
				"Build multiple SaaS products",
				"Provide value, get recognized",
				"Afford the fastest cars (priorities!)",
				"Inspire the next generation of African developers",
			],
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
		}, 3500);

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
		<section className='py-20 md:py-32 bg-black text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* The Dossier Header */}
				<div className='mb-24 text-left'>
					<h2 className='text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6'>
						The Descent.
					</h2>
					<div className='w-24 h-px bg-white opacity-50 mb-8'></div>
					<p className='text-xl md:text-3xl text-gray-500 font-light max-w-4xl tracking-tight'>
						A documented history of{" "}
						<span className='text-white'>technical evolution</span>.
					</p>
				</div>

				{/* The Core Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
					{/* Navigation: Vertical List */}
					<div className='lg:col-span-4 space-y-4'>
						<div className='flex items-center justify-between mb-8 pb-4 border-b border-white/10'>
							<h3 className='text-xs font-bold tracking-[0.5em] uppercase text-gray-500'>
								Timeline // Data-Feed
							</h3>
							<button
								onClick={() => setIsAutoPlaying(!isAutoPlaying)}
								className='text-[10px] tracking-widest uppercase border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-all'
							>
								{isAutoPlaying ? "Freeze" : "Stream"}
							</button>
						</div>

						<div className='space-y-2'>
							{timelineEvents.map((event) => (
								<div
									key={event.id}
									onClick={() => handleEventClick(event.id)}
									className={`p-6 border transition-all cursor-pointer group ${
										activeEvent === event.id
											? "bg-white text-black border-white"
											: "bg-transparent border-white/5 hover:border-white/20"
									}`}
								>
									<div
										className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${
											activeEvent === event.id
												? "text-black/50"
												: "text-gray-600"
										}`}
									>
										{event.year}
									</div>
									<h4 className='text-lg font-bold uppercase tracking-tighter italic'>
										{event.title}
									</h4>
								</div>
							))}
						</div>
					</div>

					{/* The Data View: Assertive Display */}
					<div className='lg:col-span-8'>
						<div className='border border-white/10 p-8 md:p-16 relative overflow-hidden bg-white/[0.02]'>
							{/* Large background serial number */}
							<div className='absolute -bottom-10 -right-10 text-[10rem] font-black opacity-[0.03] pointer-events-none uppercase tracking-tighter'>
								{currentEvent.id}
							</div>

							<div className='relative z-10'>
								<div className='flex items-center space-x-4 mb-12'>
									<Icon
										icon={currentEvent.icon}
										className='text-5xl text-white'
									/>
									<div className='h-px flex-1 bg-white/10'></div>
									<div className='text-xs font-mono tracking-widest uppercase text-gray-500'>
										Log: {currentEvent.year}
									</div>
								</div>

								<h3 className='text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none'>
									{currentEvent.title}
								</h3>

								<p className='text-xl md:text-2xl text-gray-400 mb-16 font-light leading-relaxed max-w-2xl'>
									{currentEvent.description}
								</p>

								{currentEvent.details && (
									<div className='space-y-12'>
										<div className='h-px w-12 bg-white/50'></div>
										<ul className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6'>
											{currentEvent.details.map((detail, index) => (
												<li
													key={index}
													className='flex items-start space-x-4 group'
												>
													<div className='text-[10px] font-bold text-gray-700 mt-1 pointer-events-none'>
														0{index + 1}
													</div>
													<span className='text-gray-500 font-light group-hover:text-white transition-colors'>
														{detail}
													</span>
												</li>
											))}
										</ul>
									</div>
								)}

								<div className='mt-20 flex gap-4'>
									{activeEvent === "current" && (
										<a
											href='https://github.com/tadeniji06'
											target='_blank'
											rel='noopener noreferrer'
											className='bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.3em] uppercase hover:bg-neutral-200 transition-all'
										>
											Inspect Code
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* The Core Competencies Section */}
				<div className='mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10'>
					{[
						{
							icon: "mdi:calendar",
							label: "Active Combat",
							value: "5+ Years",
						},
						{
							icon: "mdi:code-tags",
							label: "Lethal Stack",
							value: "Full Mastery",
						},
						{
							icon: "mdi:rocket-launch",
							label: "Primary Directive",
							value: "Innovation",
						},
					].map((stat) => (
						<div
							key={stat.label}
							className='bg-black p-12 text-center group hover:bg-neutral-900 transition-all'
						>
							<Icon
								icon={stat.icon}
								className='text-3xl text-gray-600 mb-6 group-hover:text-white transition-colors'
							/>
							<div className='text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold'>
								{stat.label}
							</div>
							<div className='text-3xl font-black uppercase italic'>
								{stat.value}
							</div>
						</div>
					))}
				</div>

				{/* The Manifesto / Philosophy */}
				<div className='mt-32 border border-white/10 p-12 md:p-24 text-left relative overflow-hidden bg-white/[0.01]'>
					<Icon
						icon='mdi:lightbulb'
						className='text-[15rem] absolute -top-12 -right-12 opacity-[0.02] pointer-events-none'
					/>
					<h3 className='text-xs font-bold tracking-[0.5em] uppercase text-gray-500 mb-12'>
						System Philosophy
					</h3>
					<blockquote className='text-4xl md:text-7xl font-black italic tracking-tighter leading-none mb-16 uppercase'>
						"I think, therefore I architect."
					</blockquote>
					<div className='flex flex-wrap gap-4'>
						{[
							"Value-Driven",
							"Passionate",
							"Lethal Speed",
							"Absolute Solver",
						].map((tag) => (
							<span
								key={tag}
								className='text-[10px] tracking-[0.2em] uppercase text-gray-600 border border-white/10 px-4 py-2 hover:border-white hover:text-white transition-all'
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				{/* Transmission Section */}
				<div className='mt-32 text-center'>
					<h3 className='text-6xl md:text-8xl font-black tracking-tighter uppercase mb-20'>
						Transmit Message.
					</h3>
					<div className='flex flex-wrap justify-center gap-12'>
						<a
							href='https://twitter.com/tade_niji06'
							target='_blank'
							rel='noopener noreferrer'
							className='group flex flex-col items-center'
						>
							<span className='text-xs font-bold tracking-[0.5em] uppercase text-gray-500 mb-4 group-hover:text-white transition-colors'>
								X / Twitter
							</span>
							<div className='w-12 h-px bg-white/20 group-hover:w-full transition-all'></div>
						</a>
						<a
							href='https://github.com/tadeniji06'
							target='_blank'
							rel='noopener noreferrer'
							className='group flex flex-col items-center'
						>
							<span className='text-xs font-bold tracking-[0.5em] uppercase text-gray-500 mb-4 group-hover:text-white transition-colors'>
								The Vault / GitHub
							</span>
							<div className='w-12 h-px bg-white/20 group-hover:w-full transition-all'></div>
						</a>
						<a
							href='https://linkedin.com/in/olutunmise-adeniji-16a846250'
							target='_blank'
							rel='noopener noreferrer'
							className='group flex flex-col items-center'
						>
							<span className='text-xs font-bold tracking-[0.5em] uppercase text-gray-500 mb-4 group-hover:text-white transition-colors'>
								Protocol / LinkedIn
							</span>
							<div className='w-12 h-px bg-white/20 group-hover:w-full transition-all'></div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Journey;
