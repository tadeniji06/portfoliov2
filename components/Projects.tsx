"use client";
import {
	websiteProjects,
	webApplications,
	apiService,
} from "@/utils/projects";
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
						A curated collection of my best work, showcasing quality
						projects that solve real problems and create genuine
						value.
					</p>
				</div>

				{/* Website Projects Section */}
				<div className='mb-20'>
					<div className='text-center mb-12'>
						<h3 className='text-3xl md:text-4xl font-bold text-black mb-4'>
							Website Projects
						</h3>
						<div className='w-24 h-1 bg-gray-400 mx-auto rounded-full'></div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{websiteProjects.map((project, index) => (
							<div
								key={index}
								className='bg-white border-2 border-black rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl'
							>
								<div className='mb-4'>
									<Icon
										icon='mdi:web'
										className='text-4xl text-black mb-3'
									/>
								</div>
								<h4 className='text-xl font-bold text-black mb-3'>
									{project.title}
								</h4>
								<p className='text-gray-700 mb-6 leading-relaxed'>
									{project.desc}
								</p>
								<Link
									href={project.url}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200'
								>
									<span>View Live</span>
									<Icon
										icon='mdi:external-link'
										className='text-lg'
									/>
								</Link>
							</div>
						))}
					</div>
				</div>

				{/* API Services Section */}
				<div className='mb-20'>
					<div className='text-center mb-12'>
						<h3 className='text-3xl md:text-4xl font-bold text-black mb-4'>
							API Services
						</h3>
						<div className='w-24 h-1 bg-gray-400 mx-auto rounded-full'></div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{apiService.map((api, index) => (
							<div
								key={index}
								className='bg-black border-2 border-black rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl'
							>
								<div className='mb-4'>
									<Icon
										icon='mdi:api'
										className='text-4xl text-white mb-3'
									/>
								</div>
								<h4 className='text-xl font-bold text-white mb-3'>
									{api.title}
								</h4>
								<p className='text-gray-300 mb-4 leading-relaxed'>
									{api.description}
								</p>

								{/* Tech Stack */}
								<div className='mb-6'>
									<h5 className='text-sm font-semibold text-white mb-2'>
										Tech Stack:
									</h5>
									<div className='flex flex-wrap gap-2'>
										{api.tech.map((tech, techIndex) => (
											<span
												key={techIndex}
												className='px-3 py-1 bg-white text-black rounded-full text-sm font-medium'
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div className='flex space-x-3'>
									<Link
										href={api.repo}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200'
									>
										<Icon icon='mdi:github' className='text-lg' />
										<span>Repository</span>
									</Link>
									{api.docs && (
										<Link
											href={api.docs}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center space-x-2 border-2 border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200'
										>
											<Icon
												icon='mdi:file-document'
												className='text-lg'
											/>
											<span>Docs</span>
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Web Applications Section - Coming Soon */}
				<div className='mb-20'>
					<div className='text-center mb-12'>
						<h3 className='text-3xl md:text-4xl font-bold text-black mb-4'>
							Web Applications
						</h3>
						<div className='w-24 h-1 bg-gray-400 mx-auto rounded-full'></div>
					</div>

					<div className='max-w-2xl mx-auto'>
						<div className='bg-gray-50 border-2 border-gray-300 rounded-xl p-8 text-center'>
							<Icon
								icon='mdi:rocket-launch'
								className='text-6xl text-gray-400 mx-auto mb-4'
							/>
							<h4 className='text-2xl font-bold text-gray-700 mb-3'>
								Coming Soon
							</h4>
							<p className='text-gray-600 leading-relaxed'>
								Exciting web applications are currently in
								development. Stay tuned for complex, feature-rich
								applications that showcase advanced functionality and
								user experience.
							</p>
						</div>
					</div>
				</div>

				{/* Skills Showcase */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
							Each project is built with attention to detail,
							performance optimization, and user experience.
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
							value for users and businesses across different
							industries.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
