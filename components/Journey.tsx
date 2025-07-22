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
				"Graduated at 19 - youngest in my class",
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
			year: "2024",
			title: "Building OLUTEE HUB",
			description: "Africa's HR Brain - Full Feature Stack, All In",
			icon: "mdi:brain",
			category: "current",
			details: [
				"Comprehensive HR management platform",
				"Payroll automation with Paystack/Flutterwave",
				"Real-time notifications & document management",
				"Targeting African businesses first",
				"Built with React, Node.js, MongoDB",
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
				"Launch OLUTEE TECH HUB globally",
				"Build multiple SaaS products",
				"Provide value, get recognized",
				"Afford the fastest cars (priorities! 🏎️)",
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
					(event) => event.id === prev
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
		<section className='py-20 md:py-24 bg-black'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight'>
						My Journey
						<span className='block text-2xl md:text-3xl text-gray-400 font-normal mt-2'>
							From Curious Kid to Tech Builder
						</span>
					</h2>
					<div className='w-32 h-1 bg-white mx-auto mb-8 rounded-full'></div>
					<p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
						An interactive roadmap of my evolution from a
						tech-obsessed kid to building
						<span className='text-white font-semibold'>
							{" "}
							OLUTEE HUB
						</span>{" "}
						- Africa's HR Brain
					</p>
				</div>

				{/* Interactive Timeline */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
					{/* Timeline Navigation */}
					<div className='space-y-6'>
						<div className='flex items-center justify-between mb-8'>
							<h3 className='text-2xl font-bold text-white'>
								Interactive Roadmap
							</h3>
							<button
								onClick={() => setIsAutoPlaying(!isAutoPlaying)}
								className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
									isAutoPlaying
										? "bg-white border-white text-black hover:bg-gray-200"
										: "bg-black border-white text-white hover:bg-gray-900"
								}`}
							>
								<Icon
									icon={isAutoPlaying ? "mdi:pause" : "mdi:play"}
									className='inline mr-2'
								/>
								{isAutoPlaying ? "Pause" : "Play"}
							</button>
						</div>

						<div className='relative'>
							{/* Timeline Line */}
							<div className='absolute left-8 top-0 bottom-0 w-1 bg-white rounded-full'></div>

							{timelineEvents.map((event, index) => (
								<div
									key={event.id}
									className={`relative flex items-start space-x-6 pb-8 cursor-pointer group ${
										activeEvent === event.id
											? "scale-105"
											: "hover:scale-102"
									} transition-transform duration-300`}
									onClick={() => handleEventClick(event.id)}
								>
									{/* Timeline Dot */}
									<div
										className={`relative z-10 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center transition-all duration-300 ${
											activeEvent === event.id
												? "bg-white scale-110 shadow-2xl"
												: "bg-black group-hover:bg-gray-900"
										}`}
									>
										<Icon
											icon={event.icon}
											className={`text-2xl transition-all duration-300 ${
												activeEvent === event.id
													? "text-black"
													: "text-white"
											}`}
										/>
									</div>

									{/* Event Info */}
									<div
										className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
											activeEvent === event.id
												? "bg-white border-white shadow-2xl"
												: "bg-gray-900 border-gray-700 hover:border-gray-600"
										}`}
									>
										<div
											className={`text-sm font-semibold mb-1 ${
												activeEvent === event.id
													? "text-gray-600"
													: "text-gray-400"
											}`}
										>
											{event.year}
										</div>
										<h4
											className={`text-lg font-bold mb-2 ${
												activeEvent === event.id
													? "text-black"
													: "text-white"
											}`}
										>
											{event.title}
										</h4>
										<p
											className={`text-sm ${
												activeEvent === event.id
													? "text-gray-700"
													: "text-gray-300"
											}`}
										>
											{event.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Active Event Details */}
					<div className='lg:sticky lg:top-8'>
						<div className='bg-white border-2 border-gray-200 p-8 md:p-10 rounded-2xl shadow-2xl'>
							{/* Event Header */}
							<div className='flex items-center space-x-4 mb-6'>
								<div className='w-20 h-20 rounded-2xl bg-black flex items-center justify-center'>
									<Icon
										icon={currentEvent.icon}
										className='text-4xl text-white'
									/>
								</div>
								<div>
									<div className='text-sm font-semibold text-gray-600 mb-1'>
										{currentEvent.year}
									</div>
									<h3 className='text-2xl md:text-3xl font-bold text-black'>
										{currentEvent.title}
									</h3>
								</div>
							</div>

							{/* Event Description */}
							<p className='text-lg text-gray-700 mb-8 leading-relaxed'>
								{currentEvent.description}
							</p>

							{/* Event Details */}
							{currentEvent.details && (
								<div className='space-y-4 mb-8'>
									<h4 className='text-xl font-bold text-black mb-4'>
										Key Highlights:
									</h4>
									<ul className='space-y-3'>
										{currentEvent.details.map((detail, index) => (
											<li
												key={index}
												className='flex items-start space-x-3'
											>
												<div className='w-2 h-2 rounded-full bg-black mt-2 flex-shrink-0'></div>
												<span className='text-gray-700 leading-relaxed'>
													{detail}
												</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Special Content for Current Project */}
							{activeEvent === "current" && (
								<div className='bg-black p-6 rounded-xl mb-6'>
									<h4 className='text-xl font-bold text-white mb-4 flex items-center'>
										<Icon
											icon='mdi:brain'
											className='mr-3 text-2xl text-white'
										/>
										OLUTEE HUB Features
									</h4>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
										{[
											"Employee Onboarding & Management",
											"Automated Payroll System",
											"HR Letters & Document Management",
											"KPI & Performance Tracking",
											"Leave Management System",
											"Real-time Notifications",
											"ID Card Generation",
											"Audit Trail & Logging",
										].map((feature, index) => (
											<div
												key={index}
												className='flex items-center space-x-2'
											>
												<Icon
													icon='mdi:check-circle'
													className='text-white'
												/>
												<span className='text-gray-300'>
													{feature}
												</span>
											</div>
										))}
									</div>
									<div className='mt-4 pt-4 border-t border-gray-700'>
										<p className='text-gray-400 text-sm'>
											<strong className='text-white'>
												Tech Stack:
											</strong>{" "}
											React, Node.js, MongoDB, Paystack, Socket.IO
										</p>
									</div>
								</div>
							)}

							{/* Call to Action based on active event */}
							<div className='flex flex-wrap gap-4'>
								{activeEvent === "current" && (
									<>
										<a
											href='https://twitter.com/olutee_hub'
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300'
										>
											<Icon
												icon='mdi:twitter'
												className='mr-2 text-xl'
											/>
											Follow the Journey
										</a>
										<a
											href='https://github.com/tadeniji06'
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center bg-white hover:bg-gray-100 text-black border-2 border-black px-6 py-3 rounded-xl font-semibold transition-all duration-300'
										>
											<Icon
												icon='mdi:github'
												className='mr-2 text-xl'
											/>
											View Code
										</a>
									</>
								)}

								{activeEvent === "goals" && (
									<div className='w-full bg-white border-2 border-black p-4 rounded-xl text-center'>
										<p className='text-black font-bold text-lg mb-2'>
											The Fast Car Fund is Loading...
										</p>
										<p className='text-gray-700 text-sm'>
											Every line of code gets me closer to that!
										</p>
									</div>
								)}

								{(activeEvent === "early-life" ||
									activeEvent === "first-code") && (
									<div className='w-full bg-black p-4 rounded-xl text-center text-white'>
										<p className='font-bold mb-1'>
											💡 Fun Fact: I still get the same excitement
											writing code today!
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Stats Section */}
				<div className='mt-20 grid grid-cols-1 md:grid-cols-4 gap-6'>
					{[
						{
							icon: "mdi:calendar",
							label: "Years Coding",
							value: "5+",
						},
						{
							icon: "mdi:school",
							label: "Graduated at",
							value: "19",
						},
						{
							icon: "mdi:code-braces",
							label: "Projects Built",
							value: "15+",
						},
						{
							icon: "mdi:rocket-launch",
							label: "Current Focus",
							value: "OLUTEE",
						},
					].map((stat, index) => (
						<div
							key={stat.label}
							className='bg-white border-2 border-black p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl'
						>
							<Icon
								icon={stat.icon}
								className='text-4xl text-black mx-auto mb-3'
							/>
							<div className='text-2xl font-bold text-black mb-1'>
								{stat.value}
							</div>
							<div className='text-gray-600 text-sm'>
								{stat.label}
							</div>
						</div>
					))}
				</div>

				{/* Philosophy Section */}
				<div className='mt-20 bg-white border-2 border-black p-10 md:p-12 rounded-2xl shadow-2xl text-center'>
					<Icon
						icon='mdi:lightbulb'
						className='text-6xl text-black mx-auto mb-6'
					/>
					<h3 className='text-3xl font-bold text-black mb-6'>
						My Philosophy
					</h3>
					<blockquote className='text-xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto mb-8'>
						"I don't want to be the next Bill Gates or Elon Musk. I
						just want to provide real value, get recognized for my
						work, and afford the fastest cars I find appealing. Tech
						is my passion, fast cars are my motivation, and value
						creation is my mission."
					</blockquote>
					<div className='flex flex-wrap justify-center gap-4'>
						<span className='px-4 py-2 bg-black text-white rounded-full text-sm font-medium'>
							Value-Driven
						</span>
						<span className='px-4 py-2 bg-white border-2 border-black text-black rounded-full text-sm font-medium'>
							Tech Passionate
						</span>
						<span className='px-4 py-2 bg-black text-white rounded-full text-sm font-medium'>
							Speed Enthusiast
						</span>
						<span className='px-4 py-2 bg-white border-2 border-black text-black rounded-full text-sm font-medium'>
							Problem Solver
						</span>
					</div>
				</div>

				{/* Connect Section */}
				<div className='mt-16 text-center'>
					<h3 className='text-2xl font-bold text-white mb-6'>
						Want to Follow My Journey?
					</h3>
					<div className='flex flex-wrap justify-center gap-4'>
						<a
							href='https://twitter.com/tade_niji06'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300'
						>
							<Icon icon='mdi:twitter' className='mr-3 text-xl' />
							Follow on Twitter
						</a>
						<a
							href='https://github.com/tadeniji06'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center bg-black border-2 border-white hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300'
						>
							<Icon icon='mdi:github' className='mr-3 text-xl' />
							GitHub
						</a>
						<a
							href='https://linkedin.com/in/olutunmise-adeniji-16a846250'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300'
						>
							<Icon icon='mdi:linkedin' className='mr-3 text-xl' />
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Journey;
