import { Icon } from "@iconify/react/dist/iconify.js";

interface ExperienceCardProps {
	company: string;
	position: string;
	period: string;
	description: string;
	index: number;
}

const ExperienceCard = ({
	company,
	position,
	period,
	description,
	index,
}: ExperienceCardProps) => {
	return (
		<div className='relative'>
			{/* Timeline dot */}
			<div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-900 border-4 border-white z-10 shadow-lg'></div>

			{/* Card */}
			<div
				className={`bg-white border-2 border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300 p-6 ml-8 md:ml-0 md:w-5/12 ${
					index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
				}`}
			>
				<h3 className='text-xl font-bold text-gray-900 mb-1'>
					{position}
				</h3>
				<h4 className='text-lg font-semibold mb-3 text-gray-700'>
					{company}
				</h4>
				<div className='flex items-center mb-4 text-gray-600'>
					<Icon icon='mdi:calendar' className='mr-2 text-lg' />
					<span className='font-medium'>{period}</span>
				</div>
				<p className='text-gray-700 leading-relaxed whitespace-pre-line'>
					{description}
				</p>
			</div>
		</div>
	);
};

const Experience = () => {
	const experiences = [
		{
			company: "BTech 360",
			position: "Lead Front-End Developer",
			period: "February 2025 - Present",
			description: `Spearheading the front-end architecture of scalable business automation platforms tailored to African markets.

• Designing dynamic, responsive interfaces using React and modern JS tooling
• Translating complex requirements into seamless user journeys
• Coordinating cross-functional collaboration between UI/UX, backend, and product teams to deliver fast, intuitive applications`,
		},
		{
			company: "Diakrino",
			position: "Full-Stack & Web3 Developer",
			period: "October 2023 - March 2025",
			description: `Built high-performance Web2 and Web3 applications from the ground up.

• Engineered NFT minting platforms and custom smart contract integrations
• Co-led development of a decentralized social media network using full-stack tools
• Delivered responsive, secure, and user-friendly apps in agile sprints—balancing innovation with stability`,
		},
		{
			company: "Freelance",
			position: "FullStack Web Developer",
			period: "January 2022 - Present",
			description: `Developed custom websites and web applications for various clients across different industries.

• Built responsive websites using HTML, CSS, JavaScript, and React
• Collaborated with clients to understand requirements and deliver tailored solutions
• Maintained and updated existing websites with new features and improvements`,
		},
	];

	return (
		<section
			id='work'
			className='py-16 md:py-20 bg-black relative'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-12 md:mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
						Work Experience
					</h2>
					<div className='w-24 h-0.5 bg-white mx-auto mb-6'></div>
					<p className='text-lg text-gray-300 max-w-2xl mx-auto'>
						My professional journey and the experiences that have
						shaped my development career
					</p>
				</div>

				{/* Timeline */}
				<div className='relative'>
					{/* Timeline line */}
					<div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-600 transform md:-translate-x-1/2'></div>

					{/* Experience cards */}
					<div className='space-y-16 md:space-y-24'>
						{experiences.map((exp, index) => (
							<ExperienceCard
								key={index}
								company={exp.company}
								position={exp.position}
								period={exp.period}
								description={exp.description}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
