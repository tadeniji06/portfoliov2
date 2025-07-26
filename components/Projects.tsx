"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Projects = () => {
	return (
		<section className='py-20 md:py-24 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight'>
						My Projects
						<span className='block text-2xl md:text-3xl text-gray-600 font-normal mt-2'>
							Quality Over Quantity
						</span>
					</h2>
					<div className='w-32 h-1 bg-black mx-auto mb-8 rounded-full'></div>
					<p className='text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
						I'm currently curating my best work for this v2 portfolio,
						filtering by quality and impact to showcase only the
						projects that matter most.
					</p>
				</div>

				{/* Main Content Card */}
				<div className='max-w-4xl mx-auto'>
					<div className='bg-black border-2 border-black p-12 md:p-16 rounded-2xl text-center shadow-2xl'>
						{/* Icon */}
						<div className='mb-8'>
							<Icon
								icon='mdi:hammer-wrench'
								className='text-8xl text-white mx-auto mb-4'
							/>
						</div>

						{/* Status */}
						<div className='mb-8'>
							<span className='inline-flex items-center px-6 py-3 bg-white text-black rounded-full text-lg font-semibold'>
								<Icon
									icon='mdi:clock-outline'
									className='mr-2 text-xl'
								/>
								Work in Progress
							</span>
						</div>

						{/* Main Message */}
						<h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
							Curating Excellence
						</h3>
						<p className='text-xl text-gray-300 mb-8 leading-relaxed'>
							I'm handpicking my most impactful projects for this
							portfolio v2. Each project will be thoroughly documented
							with case studies, tech stacks, challenges overcome, and
							lessons learned.
						</p>

						{/* What's Coming */}
						<div className='bg-white p-8 rounded-xl mb-8 text-left'>
							<h4 className='text-2xl font-bold text-black mb-6 text-center'>
								What's Coming Soon:
							</h4>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								{[
									"OLUTEE TECH HUB - HR Management Platform",
									"E-commerce Solutions with Payment Integration",
									"Real-time Chat Applications",
									"API Development & Microservices",
									"Mobile-First Web Applications",
									"Database Design & Optimization Projects",
								].map((item, index) => (
									<div
										key={index}
										className='flex items-center space-x-3'
									>
										<Icon
											icon='mdi:check-circle'
											className='text-black text-xl flex-shrink-0'
										/>
										<span className='text-gray-700 font-medium'>
											{item}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Additional Info Cards */}
				<div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Quality Focus */}
					<div className='bg-white border-2 border-black p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300'>
						<Icon
							icon='mdi:diamond-stone'
							className='text-5xl text-black mx-auto mb-4'
						/>
						<h4 className='text-xl font-bold text-black mb-3'>
							Quality First
						</h4>
						<p className='text-gray-700'>
							Each project will include detailed case studies,
							technical documentation, and live demos.
						</p>
					</div>

					{/* Tech Stack */}
					<div className='bg-black border-2 border-black p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300'>
						<Icon
							icon='mdi:code-braces'
							className='text-5xl text-white mx-auto mb-4'
						/>
						<h4 className='text-xl font-bold text-white mb-3'>
							Modern Tech
						</h4>
						<p className='text-gray-300'>
							React, Next.js, TypeScript, Node.js, MongoDB, and other
							cutting-edge technologies.
						</p>
					</div>

					{/* Real Impact */}
					<div className='bg-white border-2 border-black p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300'>
						<Icon
							icon='mdi:target'
							className='text-5xl text-black mx-auto mb-4'
						/>
						<h4 className='text-xl font-bold text-black mb-3'>
							Real Impact
						</h4>
						<p className='text-gray-700'>
							Projects that solve real problems and create genuine
							value for users and businesses.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
