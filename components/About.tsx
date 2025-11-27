import { hero, pfp } from "@/assets";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const About = () => {
	const interests = [
		{
			icon: "mdi:music",
			title: "Music Lover",
			description:
				"Chicago drill to West Coast - King Von, Lil Durk, Polo G, EBK Jayboo",
			color: "text-purple-600",
		},
		{
			icon: "mdi:dumbbell",
			title: "Fitness Enthusiast",
			description:
				"Calisthenics training and staying in peak physical condition",
			color: "text-red-600",
		},
		{
			icon: "mdi:soccer",
			title: "Football Player",
			description:
				"Playing football in my free time - the beautiful game",
			color: "text-green-600",
		},
		{
			icon: "mdi:pen",
			title: "Peak Writer",
			description:
				"Crafting compelling content and technical documentation",
			color: "text-blue-600",
		},
	];

	const stats = [
		{ number: "21", label: "Years Old" },
		{ number: "3+", label: "Years Coding" },
		{ number: "10+", label: "Projects" },
		{ number: "∞", label: "Lines of Code" },
	];

	const techStack = [
		{ icon: "logos:react", name: "React" },
		{ icon: "logos:nextjs-icon", name: "Next.js" },
		{ icon: "logos:typescript-icon", name: "TypeScript" },
		{ icon: "logos:nodejs-icon", name: "Node.js" },
		{ icon: "logos:python", name: "Python" },
		{ icon: "logos:tailwindcss-icon", name: "Tailwind" },
	];

	return (
		<section
			id='about'
			className='py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden'
		>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Section Header */}
				<div className='text-center mb-16 md:mb-20'>
					<h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight'>
						About Me
					</h2>
					<div className='w-32 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto mb-8 rounded-full'></div>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						The story behind the code - who I am beyond the screen
					</p>
				</div>
				{/* Profile Image & Info */}
				<div className='relative'>
					<div className='bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-10 text-center rounded-2xl shadow-2xl mb-6'>
						{/* Profile Image */}
						<div className='relative w-56 h-56 mx-auto mb-8'>
							<div className='w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 rounded-full overflow-hidden shadow-2xl'>
								<Image
									alt='Olutunmise Adeniji'
									src={pfp}
									width={224}
									height={224}
									className='w-full h-full object-cover object-top scale-110'
									priority
								/>
							</div>
							{/* Decorative rings */}
							<div className='absolute -inset-4 border-2 border-gray-600 rounded-full opacity-20'></div>
							<div className='absolute -inset-8 border border-gray-500 rounded-full opacity-10'></div>
						</div>

						<h4 className='text-2xl font-bold text-white mb-3'>
							Tunmise E.A
						</h4>
						<p className='text-gray-300 mb-2 text-lg'>
							Full-Stack Developer
						</p>
						<p className='text-gray-400 mb-8 text-sm'>
							Lagos, Nigeria 🇳🇬
						</p>

						{/* Social Links */}
						<div className='flex justify-center space-x-4 mb-8'>
							{[
								{
									href: "https://open.spotify.com/user/31cnksr3i6gfq5jsn3733pfspkbi?si=tBO9TU4GTzKEfJd59hM6iw",
									icon: "logos:spotify-icon",
									label: "Spotify",
									color: "hover:bg-green-600",
								},
								{
									href: "https://github.com/tadeniji06",
									icon: "mdi:github",
									label: "GitHub",
									color: "hover:bg-gray-700",
								},
								{
									href: "https://www.linkedin.com/in/tunmise-e-a-16a846250/",
									icon: "mdi:linkedin",
									label: "LinkedIn",
									color: "hover:bg-blue-600",
								},
							].map((social, index) => (
								<a
									key={index}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className={`p-4 bg-gray-800 border border-gray-700 ${social.color} transition-all duration-300 rounded-xl hover:scale-110 hover:shadow-lg group`}
									title={social.label}
								>
									<Icon
										icon={social.icon}
										className='text-2xl text-white group-hover:text-white'
									/>
								</a>
							))}
						</div>

						{/* Status */}
						<div className='flex items-center justify-center space-x-2 text-green-400'>
							<div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
							<span className='text-sm font-medium'>
								Available for work
							</span>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20'>
					{/* Text Content */}
					<div className='space-y-8'>
						{/* Quick Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
							{stats.map((stat, index) => (
								<div
									key={index}
									className='text-center p-6 bg-white border-2 border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 rounded-xl group'
								>
									<div className='text-3xl font-bold text-gray-900 group-hover:text-gray-900 mb-2'>
										{stat.number}
									</div>
									<div className='text-sm text-gray-600 font-semibold uppercase tracking-wide'>
										{stat.label}
									</div>
								</div>
							))}
						</div>

						{/* Tech Stack */}
						<div className='bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg'>
							<h4 className='text-xl font-bold text-gray-900 mb-6 text-center'>
								Tech Stack
							</h4>
							<div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
								{techStack.map((tech, index) => (
									<div
										key={index}
										className='flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors group'
									>
										<Icon
											icon={tech.icon}
											className='text-3xl mb-2 group-hover:scale-110 transition-transform'
										/>
										<span className='text-xs text-gray-600 font-medium'>
											{tech.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Interests Grid */}
				<div className='mb-20'>
					<h3 className='text-3xl font-bold text-center mb-12 text-gray-900'>
						Beyond The Code
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{interests.map((interest, index) => (
							<div
								key={index}
								className='bg-white border-2 border-gray-200 hover:border-gray-900 p-8 text-center transition-all duration-300 hover:shadow-xl group rounded-2xl'
							>
								<div className='w-20 h-20 mx-auto mb-6 bg-gray-100 group-hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110'>
									<Icon
										icon={interest.icon}
										className={`text-3xl ${interest.color} group-hover:scale-110 transition-transform`}
									/>
								</div>
								<h4 className='font-bold text-gray-900 mb-3 text-lg'>
									{interest.title}
								</h4>
								<p className='text-gray-600 leading-relaxed'>
									{interest.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Music Section */}
				<div className='bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-10 md:p-12 text-center rounded-2xl shadow-2xl mb-20'>
					<h3 className='text-3xl font-bold text-white mb-6'>
						<Icon icon='mdi:music' className='inline mr-3 text-4xl' />
						Currently Vibing To
					</h3>
					<p className='text-gray-300 mb-8 text-lg max-w-2xl mx-auto'>
						From Chicago drill to West Coast beats - music fuels my
						creativity and coding sessions
					</p>
					<div className='flex flex-wrap justify-center gap-3 mb-8'>
						{[
							"King Von",
							"Lil Durk",
							"Polo G",
							"EBK Jayboo",
							"21 Savage",
							"RodWave",
							"PayGotti",
						].map((artist, index) => (
							<span
								key={artist}
								className='px-4 py-2 bg-gray-800 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-medium rounded-full transition-all duration-200 hover:bg-gray-700'
							>
								{artist}
							</span>
						))}
					</div>
					<a
						href='https://open.spotify.com/playlist/37i9dQZF1EpiunT9MRBus8?si=TimyGZJJQaa2bs6MWiZ13g&pi=yfGAXrrdS06Mo'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center justify-center bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 py-4 px-8 font-semibold rounded-xl hover:scale-105 hover:shadow-lg'
					>
						<Icon
							icon='logos:spotify-icon'
							className='mr-3 text-xl'
						/>
						Check My Playlist
					</a>
				</div>

				{/* Call to Action */}
				<div className='text-center bg-white border-2 border-gray-200 p-12 rounded-2xl shadow-lg'>
					<h3 className='text-3xl font-bold text-gray-900 mb-6'>
						Let's Build Something Amazing Together
					</h3>
					<p className='text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed'>
						Whether you need a full-stack application, want to discuss
						the latest drill tracks, or just want to connect - I'm
						always down for good conversation.
					</p>
					<div className='flex flex-col sm:flex-row justify-center gap-6'>
						<Link
							href='/'
							className='inline-flex items-center justify-center bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all duration-300 py-4 px-10 font-semibold rounded-xl hover:scale-105 hover:shadow-lg'
						>
							<Icon icon='mdi:email' className='mr-3 text-xl' />
							Get In Touch
						</Link>
						<Link
							href='/projects'
							className='inline-flex items-center justify-center bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 py-4 px-10 font-semibold rounded-xl hover:scale-105 hover:shadow-lg'
						>
							<Icon
								icon='mdi:rocket-launch'
								className='mr-3 text-xl'
							/>
							View My Work
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
