import { socials, headerLinks } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-black text-gray-400 border-t border-white/5'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black'>
				{/* Main Footer Content */}
				<div className='py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
					{/* Brand Section */}
					<div className='lg:col-span-2 space-y-8'>
						<Link href='/' className='inline-block group'>
							<span className='text-xl font-black text-white group-hover:italic transition-all uppercase tracking-[0.4em]'>
								Tunmise // Archive
							</span>
						</Link>
						<p className='text-gray-600 text-lg leading-tight font-light tracking-tight max-w-sm'>
							Building high-agency software.{" "}
							<span className='text-white'>Dominating</span> the
							interface.
						</p>

						{/* Social Icons - Brutalist */}
						<div className='flex gap-2 flex-wrap'>
							{socials.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className='w-12 h-12 flex items-center justify-center border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all'
									aria-label={`Protocol: ${social.name}`}
								>
									<Icon
										icon={social.icon}
										className='w-5 h-5 transition-colors duration-200'
									/>
								</a>
							))}
						</div>
					</div>

					{/* Navigation intel */}
					<div>
						<h3 className='text-[10px] font-bold mb-8 text-white uppercase tracking-[0.5em]'>
							Intel Feed
						</h3>
						<ul className='space-y-4'>
							{headerLinks.map((link) => (
								<li key={link.title}>
									<Link
										href={link.link}
										className='text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]'
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Connection points */}
					<div>
						<h3 className='text-[10px] font-bold mb-8 text-white uppercase tracking-[0.5em]'>
							Direct Uplink
						</h3>
						<div className='space-y-6'>
							<a
								href='mailto:tadeniji06@gmail.com'
								className='block text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]'
							>
								Transmission: tadeniji06@gmail.com
							</a>

							<a
								href='tel:+2349127936598'
								className='block text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]'
							>
								Signal: +234 912 793 6598
							</a>

							<div className='text-xs font-bold text-gray-800 uppercase tracking-[0.2em]'>
								Loc: Lagos // Nigeria
							</div>
						</div>
					</div>
				</div>

				{/* System Bar */}
				<div className='border-t border-white/5 py-12'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-8'>
						<p className='text-[10px] font-bold text-gray-800 uppercase tracking-[0.4em]'>
							© {currentYear} Tunmise Adeniji // All Systems Nominal
						</p>

						<div className='flex gap-12'>
							<Link
								href='/'
								className='text-[10px] font-bold text-gray-800 hover:text-white transition-all uppercase tracking-[0.2em]'
							>
								Privacy Protocol
							</Link>
							<Link
								href='/'
								className='text-[10px] font-bold text-gray-800 hover:text-white transition-all uppercase tracking-[0.2em]'
							>
								Terms of Engagement
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
