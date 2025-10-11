import { Icon } from "@iconify/react/dist/iconify.js";

interface SkillCardProps {
	icon: string;
	name: string;
	level: number;
	category: string;
	color: string;
}

const SkillCard = ({
	icon,
	name,
	level,
	category,
	color,
}: SkillCardProps) => {
	return (
		<div className='bg-white border-2 border-gray-200 hover:border-gray-900 p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl group rounded-2xl relative overflow-hidden'>
			{/* Background gradient on hover */}
			<div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

			{/* Logo container */}
			<div className='relative w-20 h-20 rounded-2xl flex items-center justify-center bg-gray-100 group-hover:bg-white border-2 border-gray-200 group-hover:border-gray-300 p-4 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg'>
				<Icon
					icon={icon}
					className='text-4xl group-hover:scale-110 transition-transform duration-300'
				/>
			</div>

			{/* Category badge */}
			<span
				className={`text-xs font-semibold px-3 py-1 rounded-full mb-3 ${color} uppercase tracking-wide`}
			>
				{category}
			</span>

			<h3 className='text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-900 transition-colors text-center'>
				{name}
			</h3>

			{/* Circular progress */}
			<div className='relative w-24 h-24 mb-4'>
				<svg
					className='w-24 h-24 transform -rotate-90'
					viewBox='0 0 100 100'
				>
					{/* Background circle */}
					<circle
						cx='50'
						cy='50'
						r='40'
						stroke='#f3f4f6'
						strokeWidth='8'
						fill='none'
					/>
					{/* Progress circle */}
					<circle
						cx='50'
						cy='50'
						r='40'
						stroke='#111827'
						strokeWidth='8'
						fill='none'
						strokeLinecap='round'
						strokeDasharray={`${2.51 * level} 251.2`}
						className='transition-all duration-1000 ease-out group-hover:stroke-gray-700'
					/>
				</svg>
				{/* Percentage text */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<span className='text-lg font-bold text-gray-900'>
						{level}%
					</span>
				</div>
			</div>

			{/* Proficiency level */}
			<div className='text-center'>
				<span className='text-sm text-gray-600 font-medium'>
					{level >= 80
						? "Expert"
						: level >= 60
						? "Advanced"
						: level >= 40
						? "Intermediate"
						: "Beginner"}
				</span>
			</div>
		</div>
	);
};

const Skills = () => {
	const skillCategories = [
		{
			title: "Frontend Development",
			skills: [
				{
					icon: "logos:react",
					name: "React",
					level: 65,
					category: "Frontend",
					color: "bg-blue-100 text-blue-800",
				},
				{
					icon: "logos:nextjs-icon",
					name: "Next.js",
					level: 70,
					category: "Frontend",
					color: "bg-blue-100 text-blue-800",
				},
				{
					icon: "logos:javascript",
					name: "JavaScript",
					level: 70,
					category: "Frontend",
					color: "bg-blue-100 text-blue-800",
				},
				{
					icon: "logos:typescript-icon",
					name: "TypeScript",
					level: 75,
					category: "Frontend",
					color: "bg-blue-100 text-blue-800",
				},
				{
					icon: "logos:tailwindcss-icon",
					name: "Tailwind CSS",
					level: 90,
					category: "Frontend",
					color: "bg-blue-100 text-blue-800",
				},
				{
					icon: "logos:html-5",
					name: "HTML5",
					level: 95,
					category: "Frontend",
					color: "bg-blue-100 text-blue-800",
				},
				{
					icon: "logos:css-3",
					name: "CSS3",
					level: 90,
					category: "Frontend",
					color: "bg-blue-100 text-blue-800",
				},
			],
		},
		{
			title: "Backend Development",
			skills: [
				{
					icon: "logos:nodejs-icon",
					name: "Node.js",
					level: 65,
					category: "Backend",
					color: "bg-green-100 text-green-800",
				},
				{
					icon: "logos:mongodb-icon",
					name: "MongoDB",
					level: 80,
					category: "Backend",
					color: "bg-green-100 text-green-800",
				},
				{
					icon: "logos:python",
					name: "Python",
					level: 45,
					category: "Backend",
					color: "bg-green-100 text-green-800",
				},
			],
		},
		{
			title: "Tools & Others",
			skills: [
				{
					icon: "logos:git-icon",
					name: "Git",
					level: 85,
					category: "Tools",
					color: "bg-purple-100 text-purple-800",
				},
				{
					icon: "logos:figma",
					name: "Figma",
					level: 50,
					category: "Design",
					color: "bg-pink-100 text-pink-800",
				},
				{
					icon: "logos:firebase",
					name: "Firebase",
					level: 75,
					category: "Backend",
					color: "bg-orange-100 text-orange-800",
				},
			],
		},
	];

	const allSkills = skillCategories.flatMap(
		(category) => category.skills
	);

	return (
		<section
			id='skills'
			className='py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden'
		>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Section Header */}
				<div className='text-center mb-16 md:mb-20'>
					<h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight'>
						Technical Skills
					</h2>
					<div className='w-32 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto mb-8 rounded-full'></div>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						Here are the technologies and tools I work with to bring
						ideas to life
					</p>
				</div>

				{/* Skills by Category */}
				<div className='space-y-16'>
					{skillCategories.map((category, categoryIndex) => (
						<div key={category.title} className=''>
							<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center'>
								{category.title}
							</h3>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
								{category.skills.map((skill, index) => (
									<SkillCard
										key={skill.name}
										icon={skill.icon}
										name={skill.name}
										level={skill.level}
										category={skill.category}
										color={skill.color}
									/>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Learning Section */}
				<div className='mt-16 text-center bg-white border-2 border-gray-200 p-10 rounded-2xl shadow-lg'>
					<Icon
						icon='mdi:brain'
						className='text-5xl text-gray-900 mx-auto mb-6'
					/>
					<h3 className='text-2xl font-bold text-gray-900 mb-4'>
						Always Learning
					</h3>
					<p className='text-gray-600 text-lg max-w-2xl mx-auto mb-6'>
						Technology evolves rapidly, and so do I. Currently
						exploring AI/ML, Web3, and advanced React patterns.
					</p>
					<div className='flex flex-wrap justify-center gap-3'>
						{["AI/ML", "Web3", "GraphQL", "Docker", "AWS"].map(
							(tech) => (
								<span
									key={tech}
									className='px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors'
								>
									{tech}
								</span>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
