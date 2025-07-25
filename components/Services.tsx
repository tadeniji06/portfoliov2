"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

const SectionHeader = ({
	icon,
	title,
}: {
	icon: string;
	title: string;
}) => (
	<div className='flex items-center gap-3 text-2xl font-semibold text-white mb-6'>
		<div className='p-2 bg-blue-500/20 rounded-lg'>
			<Icon icon={icon} className='text-blue-400 text-2xl' />
		</div>
		<h2>{title}</h2>
	</div>
);

const ServiceItem = ({
	title,
	description,
	price,
	features,
}: {
	title: string;
	description: string;
	price: string;
	features?: string[];
}) => (
	<div className='bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/30 transition-all duration-300'>
		<div className='flex justify-between items-start mb-3'>
			<h3 className='font-semibold text-lg text-white'>{title}</h3>
			<span className='text-blue-400 font-bold text-lg whitespace-nowrap ml-4'>
				{price}
			</span>
		</div>
		<p className='text-gray-300 text-sm mb-4 leading-relaxed'>
			{description}
		</p>
		{features && (
			<ul className='space-y-1'>
				{features.map((feature, index) => (
					<li
						key={index}
						className='flex items-center gap-2 text-xs text-gray-400'
					>
						<Icon
							icon='mdi:check-circle'
							className='text-blue-400 text-sm flex-shrink-0'
						/>
						{feature}
					</li>
				))}
			</ul>
		)}
	</div>
);

const Services = () => {
	return (
		<section className='min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-16 font-roboto'>
			{/* Header */}
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h1 className='text-5xl font-bold mb-4 text-blue-400'>
						Services & Pricing
					</h1>
					<p className='text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed'>
						Professional web development solutions tailored to your
						business needs. Quality code, modern tech stack, and
						competitive pricing.
					</p>
				</div>

				<div className='space-y-16'>
					{/* Frontend Development */}
					<div>
						<SectionHeader
							icon='mdi:monitor-dashboard'
							title='Frontend Development'
						/>
						<div className='grid md:grid-cols-2 gap-6'>
							<ServiceItem
								title='Landing Page'
								description='High-converting single page with modern design, optimized for speed and mobile responsiveness.'
								price='$150'
								features={[
									"Responsive design across all devices",
									"Page speed optimization (90+ Lighthouse score)",
									"Contact forms with validation",
									"Basic SEO setup included",
								]}
							/>
							<ServiceItem
								title='Portfolio Website'
								description='Professional portfolio with content management system, perfect for showcasing your work.'
								price='$300'
								features={[
									"React.js with headless CMS integration",
									"Blog-ready architecture",
									"Image optimization and lazy loading",
									"Admin panel for content updates",
								]}
							/>
							<ServiceItem
								title='Web Application UI'
								description='Complex dashboard interfaces and multi-page applications with advanced user interactions.'
								price='$400 - $700'
								features={[
									"Modern component architecture",
									"State management (Redux/Zustand)",
									"Interactive data visualizations",
									"User authentication interfaces",
								]}
							/>
							<ServiceItem
								title='Next.js Application'
								description='Enterprise-grade applications with server-side rendering and advanced performance optimization.'
								price='$600 - $1,200'
								features={[
									"SEO-optimized with SSR/SSG",
									"Advanced routing and middleware",
									"API routes and backend integration",
									"Performance monitoring setup",
								]}
							/>
						</div>
					</div>

					{/* Fullstack Development */}
					<div>
						<SectionHeader
							icon='mdi:server-network'
							title='Fullstack Development'
						/>
						<div className='grid md:grid-cols-2 gap-6'>
							<ServiceItem
								title='CRUD Application'
								description='Complete web application with user authentication, database, and admin dashboard.'
								price='$600'
								features={[
									"Secure JWT authentication system",
									"RESTful API architecture",
									"Database design and optimization",
									"Admin dashboard with analytics",
								]}
							/>
							<ServiceItem
								title='Advanced Web Platform'
								description='Feature-rich applications with complex business logic, integrations, and scalable architecture.'
								price='$1,000 - $2,000'
								features={[
									"Role-based access control",
									"Email notifications and alerts",
									"Third-party API integrations",
									"Real-time features with WebSocket",
									"Comprehensive API documentation",
								]}
							/>
						</div>
					</div>

					{/* E-commerce Solutions */}
					<div>
						<SectionHeader
							icon='mdi:storefront-outline'
							title='E-commerce Solutions'
						/>
						<div className='grid md:grid-cols-2 gap-6'>
							<ServiceItem
								title='Starter E-commerce'
								description='Perfect for small businesses getting started with online sales. Clean, conversion-focused design.'
								price='$500 - $700'
								features={[
									"Up to 50 products",
									"Secure payment processing",
									"Inventory management",
									"Order tracking system",
									"Customer accounts",
								]}
							/>
							<ServiceItem
								title='Full E-commerce Platform'
								description='Complete online store with advanced features for established businesses and high-volume sales.'
								price='$1,500+'
								features={[
									"Unlimited products and categories",
									"Advanced admin panel",
									"Multi-payment gateway support",
									"Discount and coupon system",
									"Analytics and reporting dashboard",
									"Email marketing integration",
								]}
							/>
						</div>
						<div className='mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg'>
							<p className='text-sm text-blue-200'>
								<Icon
									icon='mdi:information'
									className='inline mr-2'
								/>
								Custom-built solutions (no WordPress/Shopify).
								Includes Stripe, PayPal, or crypto payment
								integration.
							</p>
						</div>
					</div>

					{/* Web3 Development */}
					<div>
						<SectionHeader
							icon='mdi:ethereum'
							title='Web3 & Blockchain Development'
						/>
						<div className='grid md:grid-cols-2 gap-6'>
							<ServiceItem
								title='Trading Bots'
								description='Automated trading solutions with advanced algorithms and risk management features.'
								price='$400 - $800'
								features={[
									"Multi-chain support (ETH, BSC, Polygon)",
									"Telegram bot interface",
									"Gas optimization strategies",
									"Portfolio tracking and analytics",
								]}
							/>
							<ServiceItem
								title='DeFi Dashboard'
								description='Comprehensive interfaces for decentralized finance applications and token management.'
								price='$600 - $1,000'
								features={[
									"Wallet connectivity (MetaMask, WalletConnect)",
									"Real-time price feeds and charts",
									"Transaction history and analytics",
									"Multi-chain asset tracking",
								]}
							/>
						</div>
					</div>

					{/* SEO & Analytics */}
					<div>
						<SectionHeader
							icon='mdi:trending-up'
							title='SEO & Performance Optimization'
						/>
						<div className='grid md:grid-cols-3 gap-6'>
							<ServiceItem
								title='Technical SEO Audit'
								description='Comprehensive website analysis and optimization recommendations.'
								price='$200'
								features={[
									"Core Web Vitals optimization",
									"Schema markup implementation",
									"Site speed improvements",
								]}
							/>
							<ServiceItem
								title='Analytics Setup'
								description='Professional tracking and monitoring setup for data-driven decisions.'
								price='$150'
								features={[
									"Google Analytics 4 configuration",
									"Conversion tracking setup",
									"Custom reporting dashboard",
								]}
							/>
							<ServiceItem
								title='SEO Package'
								description='Complete on-page optimization for better search engine visibility.'
								price='$300'
								features={[
									"Keyword research and optimization",
									"Meta tags and Open Graph",
									"XML sitemap and robots.txt",
								]}
							/>
						</div>
					</div>

					{/* Terms & Process */}
					<div className='grid md:grid-cols-2 gap-8 pt-16 border-t border-gray-800'>
						<div>
							<SectionHeader
								icon='mdi:handshake'
								title='Work Process & Terms'
							/>
							<div className='space-y-4'>
								<div className='flex items-start gap-3'>
									<Icon
										icon='mdi:numeric-1-circle'
										className='text-blue-400 text-xl mt-1'
									/>
									<div>
										<h4 className='font-semibold text-white mb-1'>
											Project Discovery
										</h4>
										<p className='text-sm text-gray-300'>
											Free consultation to understand your
											requirements and provide detailed proposal.
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<Icon
										icon='mdi:numeric-2-circle'
										className='text-blue-400 text-xl mt-1'
									/>
									<div>
										<h4 className='font-semibold text-white mb-1'>
											Development Phase
										</h4>
										<p className='text-sm text-gray-300'>
											Regular updates and previews throughout the
											development process.
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<Icon
										icon='mdi:numeric-3-circle'
										className='text-blue-400 text-xl mt-1'
									/>
									<div>
										<h4 className='font-semibold text-white mb-1'>
											Delivery & Support
										</h4>
										<p className='text-sm text-gray-300'>
											Final delivery with documentation and optional
											ongoing maintenance.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<SectionHeader
								icon='mdi:file-document-check'
								title='Payment & Policies'
							/>
							<div className='space-y-4 text-sm'>
								<div className='flex items-center gap-3'>
									<Icon icon='mdi:cash' className='text-blue-400' />
									<span>
										<strong>Payment Terms:</strong> 50% upfront, 50%
										on delivery
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<Icon
										icon='mdi:clock-fast'
										className='text-blue-400'
									/>
									<span>
										<strong>Rush Delivery:</strong> Projects under 48h
										incur +$150 fee
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<Icon
										icon='mdi:shield-check'
										className='text-blue-400'
									/>
									<span>
										<strong>Warranty:</strong> 30-day bug-fix
										guarantee included
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<Icon
										icon='mdi:headset'
										className='text-blue-400'
									/>
									<span>
										<strong>Support:</strong> Maintenance packages
										from $25/month
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<Icon
										icon='mdi:file-code'
										className='text-blue-400'
									/>
									<span>
										<strong>Deliverables:</strong> Source code,
										documentation, deployment guide
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Tech Stack */}
					<div className='pt-12 border-t border-gray-800'>
						<SectionHeader
							icon='mdi:code-tags-check'
							title='Technology Stack'
						/>
						<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm'>
							<div>
								<h4 className='font-semibold text-blue-400 mb-3'>
									Frontend
								</h4>
								<ul className='space-y-2 text-gray-300'>
									<li>React.js / Next.js</li>
									<li>TypeScript</li>
									<li>Tailwind CSS</li>
									<li>Framer Motion / GSAP</li>
								</ul>
							</div>
							<div>
								<h4 className='font-semibold text-blue-400 mb-3'>
									Backend
								</h4>
								<ul className='space-y-2 text-gray-300'>
									<li>Node.js / Express</li>
									<li>Python / FastAPI</li>
									<li>MongoDB / PostgreSQL</li>
									<li>Redis / WebSocket</li>
								</ul>
							</div>
							<div>
								<h4 className='font-semibold text-blue-400 mb-3'>
									Payments & APIs
								</h4>
								<ul className='space-y-2 text-gray-300'>
									<li>Stripe / PayPal</li>
									<li>Paystack / Flutterwave</li>
									<li>Crypto Wallets</li>
									<li>RESTful / GraphQL</li>
								</ul>
							</div>
							<div>
								<h4 className='font-semibold text-blue-400 mb-3'>
									DevOps & Hosting
								</h4>
								<ul className='space-y-2 text-gray-300'>
									<li>Vercel / Netlify</li>
									<li>AWS / Railway</li>
									<li>Docker / CI/CD</li>
									<li>Domain & SSL Setup</li>
								</ul>
							</div>
						</div>
					</div>

					{/* CTA Section */}
					<div className='pt-16 text-center'>
						<div className='bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-8'>
							<h3 className='text-2xl font-bold text-white mb-4'>
								Ready to Start Your Project?
							</h3>
							<p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
								Let's discuss your requirements and create something
								amazing together. Free consultation and detailed
								project proposal included.
							</p>
							<div className='flex flex-wrap justify-center gap-4'>
								<a
									target='_blank'
									href='https://wa.me/2349127936598?text=Hi%20Olutunmise%2C%20I%27m%20interested%20in%20your%20web/software%20development%20services.%20Could%20we%20schedule%20a%20brief%20discussion%3F'
								>
									<button className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors'>
										Get Started
									</button>
								</a>
								<Link href={"/"}>
									<button className='border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold transition-colors'>
										View Portfolio
									</button>
								</Link>
							</div>
						</div>
					</div>

					<div className='pt-12 text-center text-sm text-gray-500 border-t border-gray-800'>
						<p>
							© 2025 Olutunmise E.A. Professional Web Development
							Services. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
