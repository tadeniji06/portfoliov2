"use client";

import {
	webApplications,
	websiteProjects,
	apiService,
} from "@/utils/projects";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Projects = () => {
	return (
		<section className='py-24 bg-gradient-to-b from-white to-gray-50'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-20'>
					<h2 className='text-5xl md:text-6xl font-bold tracking-tight text-gray-900'>
						My Projects
					</h2>
					<p className='mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
						Where innovation meets execution — a blend of design,
						functionality, and real-world impact.
					</p>
					<div className='w-32 h-1 bg-black mx-auto mt-6 rounded-full' />
				</div>

				{/* Section: Web Applications (PRIORITY SECTION) */}
				<div className='mb-24'>
					<div className='text-center mb-12'>
						<p className='uppercase tracking-wide text-sm font-semibold text-gray-500 mb-2'>
							Core Products
						</p>
						<h3 className='text-3xl md:text-4xl font-bold text-gray-900'>
							Web Applications
						</h3>
						<p className='text-gray-600 mt-3 text-lg'>
							High-performance applications that solve real problems
							and scale with users.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
						{webApplications.map((app, index) => (
							<div
								key={index}
								className='relative bg-black rounded-2xl overflow-hidden shadow-xl group hover:-translate-y-1 transition-all duration-500'
							>
								{/* Image Gallery */}
								<div className='relative w-full h-52 overflow-hidden'>
									<img
										src={app.images[0].src}
										alt={app.title}
										className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80'></div>
								</div>

								{/* Content */}
								<div className='p-8 text-white'>
									<h4 className='text-xl font-semibold mb-2'>
										{app.title}
									</h4>
									<p className='text-gray-300 mb-5 leading-relaxed'>
										{app.description}
									</p>

									{/* Stack */}
									<div className='mb-6'>
										<h5 className='text-sm font-semibold text-gray-400 mb-2'>
											Stack
										</h5>
										<div className='flex flex-wrap gap-2'>
											{app.stack[0].title
												.split(",")
												.map((tech, i) => (
													<span
														key={i}
														className='bg-white text-black px-3 py-1 rounded-full text-xs font-medium'
													>
														{tech.trim()}
													</span>
												))}
										</div>
									</div>

									<Link
										href={app.url}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all'
									>
										View Live
										<Icon
											icon='mdi:external-link'
											className='text-lg'
										/>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Section: Website Projects */}
				<div className='mb-24'>
					<div className='text-center mb-12'>
						<p className='uppercase tracking-wide text-sm font-semibold text-gray-500 mb-2'>
							Client Projects
						</p>
						<h3 className='text-3xl md:text-4xl font-bold text-gray-900'>
							Website Projects
						</h3>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
						{websiteProjects.map((project, index) => (
							<div
								key={index}
								className='bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group'
							>
								<div className='overflow-hidden rounded-t-2xl'>
									<img
										src={project.image.src}
										alt={project.title}
										className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
									/>
								</div>

								<div className='p-8'>
									<h4 className='text-xl font-semibold text-gray-900 mb-2'>
										{project.title}
									</h4>
									<p className='text-gray-600 mb-6 leading-relaxed'>
										{project.desc}
									</p>
									<Link
										href={project.url}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all'
									>
										View Live
										<Icon
											icon='mdi:external-link'
											className='text-lg'
										/>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Section: API Services */}
				<div className='mb-24'>
					<div className='text-center mb-12'>
						<p className='uppercase tracking-wide text-sm font-semibold text-gray-500 mb-2'>
							Development
						</p>
						<h3 className='text-3xl md:text-4xl font-bold text-gray-900'>
							API Services
						</h3>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
						{apiService.map((api, index) => (
							<div
								key={index}
								className='bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 hover:scale-[1.02] transition-transform shadow-lg'
							>
								<div className='flex items-center gap-3 mb-4'>
									<Icon
										icon='mdi:api'
										className='text-3xl text-white'
									/>
									<h4 className='text-xl font-semibold text-white'>
										{api.title}
									</h4>
								</div>

								<p className='text-gray-300 mb-6 leading-relaxed'>
									{api.description}
								</p>

								<div className='mb-6'>
									<h5 className='text-sm font-semibold text-gray-400 mb-2'>
										Tech Stack
									</h5>
									<div className='flex flex-wrap gap-2'>
										{api.tech.map((t, i) => (
											<span
												key={i}
												className='bg-white text-black px-3 py-1 rounded-full text-xs font-medium'
											>
												{t}
											</span>
										))}
									</div>
								</div>

								<div className='flex gap-3'>
									<Link
										href={api.repo}
										target='_blank'
										className='inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors'
									>
										<Icon icon='mdi:github' className='text-lg' />
										Repo
									</Link>
									{api.docs && (
										<Link
											href={api.docs}
											target='_blank'
											className='inline-flex items-center gap-2 border border-white text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-all'
										>
											<Icon
												icon='mdi:file-document'
												className='text-lg'
											/>
											Docs
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
