import { hero, pfp } from "@/assets";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const About = () => {
	const values = [
		{
			title: "PRECISION",
			description:
				"Code is either perfect or it is garbage. I don't settle for 'works on my machine'.",
			icon: "mdi:target",
		},
		{
			title: "VIOLENCE",
			description:
				"I attack problems with an intensity most people reserve for life-or-death situations.",
			icon: "mdi:lightning-bolt",
		},
		{
			title: "SILENCE",
			description:
				"Results speak louder than any LinkedIn bio ever could. I ship then I vanish.",
			icon: "mdi:ghost",
		},
	];

	return (
		<section
			id='about'
			className='py-20 md:py-32 bg-black text-white relative overflow-hidden'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* The Ego Header */}
				<div className='mb-24 md:mb-32'>
					<h2 className='text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8'>
						The Entity.
					</h2>
					<div className='w-24 h-px bg-white opacity-50 mb-12'></div>
					<p className='text-2xl md:text-4xl font-light text-gray-500 max-w-4xl leading-tight tracking-tight'>
						I don't just write code. I{" "}
						<span className='text-white'>architect dominance</span>.
					</p>
				</div>

				{/* Identity Block */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32'>
					<div className='lg:col-span-5'>
						<div className='relative group'>
							<div className='absolute -inset-2 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
							<Image
								alt='Tunmise'
								src={pfp}
								width={500}
								height={600}
								className='w-full grayscale contrast-125 filter duration-700 group-hover:grayscale-0'
								priority
							/>
							<div className='absolute bottom-0 left-0 bg-black p-4 text-xs tracking-widest uppercase'>
								Subject-01 // Tunmise E.A
							</div>
						</div>
					</div>

					<div className='lg:col-span-7 space-y-12'>
						<div className='space-y-4'>
							<h3 className='text-xs font-bold tracking-[0.5em] uppercase text-gray-500'>
								The Philosophy
							</h3>
							<p className='text-3xl md:text-5xl font-medium tracking-tighter leading-none'>
								"Most people build to be seen. I build to be felt."
							</p>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-12'>
							{[
								{ num: "3+", label: "Years of War" },
								{ num: "10+", label: "Hard Hits" },
								{ num: "∞", label: "Pure Focus" },
							].map((stat, i) => (
								<div key={i} className='space-y-2'>
									<div className='text-4xl font-black'>
										{stat.num}
									</div>
									<div className='text-xs text-gray-500 uppercase tracking-widest'>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Core Values / Brutalist Grid */}
				<div className='mb-32'>
					<h3 className='text-xs font-bold tracking-[0.5em] uppercase text-gray-500 mb-12 text-center'>
						Operational Standards
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10'>
						{values.map((v, i) => (
							<div
								key={i}
								className='bg-black p-12 space-y-6 hover:bg-neutral-900 transition-colors group'
							>
								<Icon
									icon={v.icon}
									className='text-4xl text-gray-600 group-hover:text-white transition-colors'
								/>
								<h4 className='text-xl font-bold tracking-widest uppercase'>
									{v.title}
								</h4>
								<p className='text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed font-light'>
									{v.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* The Sound of Violence */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center'>
					<div>
						<h3 className='text-xs font-bold tracking-[0.5em] uppercase text-gray-500 mb-8'>
							Acoustic Fuel
						</h3>
						<p className='text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-none'>
							The frequency of <br />
							the streets.
						</p>
						<p className='text-gray-500 text-lg mb-12 max-w-md'>
							The grit of King Von, the raw ambition of Lil Durk, and
							the energy of EBK Jayboo. This is the soundtrack to my
							sessions.
						</p>
						<a
							href='https://open.spotify.com/playlist/37i9dQZF1EpiunT9MRBus8'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block border border-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all group'
						>
							Enter the Abyss
						</a>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						{[
							"King Von",
							"Lil Durk",
							"Polo G",
							"EBK Jayboo",
							"21 Savage",
							"RodWave",
							"PayGotti",
							"Duck",
						].map((artist) => (
							<div
								key={artist}
								className='border border-white/5 p-6 text-xs text-gray-600 tracking-widest uppercase hover:border-white/20 hover:text-white transition-all'
							>
								{artist}
							</div>
						))}
					</div>
				</div>

				{/* Final Call */}
				<div className='border-t border-white/10 pt-24 text-center'>
					<h3 className='text-4xl md:text-8xl font-black tracking-tighter uppercase mb-12'>
						Speak or move on.
					</h3>
					<div className='flex flex-col sm:flex-row justify-center gap-8 items-center'>
						<Link
							href='/'
							className='text-white text-xl font-bold border-b-2 border-white pb-2 hover:opacity-50 transition-opacity uppercase tracking-widest'
						>
							Contact the Authority
						</Link>
						<div className='hidden sm:block w-px h-12 bg-white/20'></div>
						<Link
							href='/blog'
							className='text-gray-500 text-xl font-bold hover:text-white transition-colors uppercase tracking-widest'
						>
							Read the Manifesto
						</Link>
					</div>
				</div>
			</div>

			{/* Background Noise / Elements */}
			<div className='absolute top-1/4 -right-24 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none'></div>
			<div className='absolute bottom-1/4 -left-24 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none'></div>
		</section>
	);
};

export default About;
