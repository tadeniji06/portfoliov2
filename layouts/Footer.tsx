import { socials, headerLinks } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-white text-slate-600 border-t border-slate-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
				{/* Background Element */}
				<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-50 blur-[150px] rounded-full pointer-events-none'></div>

				{/* Main Footer Content */}
				<div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10'>
					{/* Brand Section */}
					<div className='lg:col-span-2 space-y-6'>
						<Link href='/' className='inline-block group'>
							<span className='text-2xl font-black text-slate-900 uppercase tracking-widest group-hover:text-blue-600 transition-colors'>
								Tunmise<span className="text-blue-600">.</span>
							</span>
						</Link>
						<p className='text-slate-600 text-lg leading-relaxed font-medium max-w-sm'>
							Building scalable digital solutions. <br />
							Engineering <span className='text-blue-600 font-bold'>interfaces</span> that captivate.
						</p>

						{/* Social Icons */}
						<div className='flex gap-3 flex-wrap pt-4'>
							{socials.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className='w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300'
									aria-label={`${social.name}`}
								>
									<Icon
										icon={social.icon}
										className='w-6 h-6 transition-colors duration-200'
									/>
								</a>
							))}
						</div>
					</div>

					{/* Navigation */}
					<div>
						<h3 className='text-sm font-bold mb-6 text-slate-900 uppercase tracking-widest'>
							Systems Menu
						</h3>
						<ul className='space-y-4'>
							{headerLinks.map((link) => (
								<li key={link.title}>
									<Link
										href={link.link}
										className='text-base font-medium text-slate-500 hover:text-blue-600 transition-colors'
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Connection points */}
					<div>
						<h3 className='text-sm font-bold mb-6 text-slate-900 uppercase tracking-widest'>
							Ping Me
						</h3>
						<div className='space-y-4'>
							<a
								href='mailto:tadeniji06@gmail.com'
								className='flex items-center gap-2 text-base font-medium text-slate-500 hover:text-blue-600 transition-colors'
							>
								<Icon icon="mdi:email-fast-outline" className="w-5 h-5 text-blue-500" />
								tadeniji06@gmail.com
							</a>

							<a
								href='tel:+2349127936598'
								className='flex items-center gap-2 text-base font-medium text-slate-500 hover:text-blue-600 transition-colors'
							>
								<Icon icon="mdi:cellphone-link" className="w-5 h-5 text-blue-500" />
								+234 912 793 6598
							</a>

							<div className='flex items-center gap-2 text-base font-medium text-slate-500 pt-2'>
								<Icon icon="mdi:map-marker-radius-outline" className="w-5 h-5 text-blue-500" />
								Lagos, Nigeria
							</div>
						</div>
					</div>
				</div>

				{/* System Bar */}
				<div className='border-t border-slate-200 py-8 relative z-10'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
						<p className='text-sm font-bold text-slate-400 uppercase tracking-widest'>
							© {currentYear} Tunmise // Root Access Granted
						</p>

						<div className='flex gap-8'>
							<Link
								href='/'
								className='text-sm font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors'
							>
								Security Protocol
							</Link>
							<Link
								href='/'
								className='text-sm font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors'
							>
								Admin Rights
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
