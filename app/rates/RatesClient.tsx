"use client";

import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ServiceItem {
	id: string;
	category: string;
	name: string;
	priceUSD: number;
	description: string;
	features: string[];
	icon: string;
	isMonthly?: boolean;
}

const services: ServiceItem[] = [
	{
		id: "tg-bot",
		category: "Automation",
		name: "Telegram / Discord Bots",
		priceUSD: 300,
		description: "High-performance chat bots for community management, sniping, or custom trading alerts.",
		features: ["Basic Command Handle", "API Integrations", "Database Setup", "Deployment"],
		icon: "mdi:robot-outline",
	},
	{
		id: "landing-page",
		category: "Web Frontend",
		name: "Landing Pages & Simple Websites",
		priceUSD: 200,
		description: "Highly interactive, converting micro-sites with gamified UI, Framer Motion animations & fast load times.",
		features: ["Up to 3 Pages", "Framer Motion Animations", "Responsive Design", "Contact Form"],
		icon: "mdi:web",
	},
	{
		id: "saas-mvp",
		category: "Web Apps",
		name: "SaaS MVP / Dashboard Core",
		priceUSD: 1000,
		description: "End-to-end fullstack interface structure, authentication, database setup and core functionality.",
		features: ["Authentication System", "Database & API Core", "Dashboard UI", "Payment Integration"],
		icon: "mdi:view-dashboard-outline",
	},
	{
		id: "web3-dapp",
		category: "Web3",
		name: "Web3 dApp Integration",
		priceUSD: 1500,
		description: "Decentralized applications involving wallet connections, smart contract execution, and on-chain querying.",
		features: ["Wallet Connect Integration", "Smart Contract Calls", "Web3 UI/UX", "Transaction Handling"],
		icon: "mdi:ethereum",
	},
	{
		id: "full-stack",
		category: "Enterprise",
		name: "Full-Stack System Architecture",
		priceUSD: 2500,
		description: "Complex, scalable systems with intricate backend logic, multi-tier architecture, and enterprise APIs.",
		features: ["Advanced Architecture", "Custom Logic & Microservices", "Admin Panels", "Performance Optimization"],
		icon: "mdi:server-network",
	},
	{
		id: "retainer",
		category: "Maintenance",
		name: "Technical Retainer",
		priceUSD: 100,
		description: "On-call debugging, performance optimizations, server maintenance and minor feature updates.",
		features: ["Priority Bug Fixes", "Server Maintenance", "Minor Updates", "Tech Consultation"],
		icon: "mdi:shield-check-outline",
		isMonthly: true,
	},
	{
		id: "custom",
		category: "Custom",
		name: "Custom Request",
		priceUSD: 0,
		description: "If none of the options cover your requirements, select this to discuss a tailored solution.",
		features: ["Tailored Scope", "Advanced Requirements", "Consultation"],
		icon: "mdi:lightbulb-on-outline",
	},
];

const EXCHANGE_RATE_NGN = 1500; // 1 USD = 1500 NGN

export default function RatesClient() {
	const [cart, setCart] = useState<string[]>([]);
	const [currency, setCurrency] = useState<"USD" | "NGN">("USD");

	const toggleCartItem = (id: string) => {
		setCart((prev) => 
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
		);
	};

	const formatPrice = (usdRaw: number) => {
		if (usdRaw === 0) return "TBD";
		if (currency === "USD") {
			return `$${usdRaw.toLocaleString()}`;
		}
		return `₦${(usdRaw * EXCHANGE_RATE_NGN).toLocaleString()}`;
	};

	const generateCheckoutMessage = () => {
		const selectedServices = services.filter((s) => cart.includes(s.id));
		const totalUsd = selectedServices.reduce((sum, s) => sum + s.priceUSD, 0);
		
		let text = `Hi Tunmise, I'd like to initiate a Co-op session.\n\nHere is my selected loadout:\n`;
		selectedServices.forEach((s) => {
			if (s.priceUSD === 0) {
				text += `- *${s.name}* (Price TBD)\n`;
			} else {
				text += `- *${s.name}* (${formatPrice(s.priceUSD)}${s.isMonthly ? '/mo' : ''})\n`;
			}
		});
		text += `\n*Estimated Base Total:* ${formatPrice(totalUsd)}`;
		if (cart.includes("custom")) {
			text += `\n\n_I also have some extra requirements to discuss:_ `;
		}
		return encodeURIComponent(text);
	};

	const checkoutWhatsApp = () => {
		window.open(`https://wa.me/2349132828613?text=${generateCheckoutMessage()}`, "_blank");
	};

	const checkoutTelegram = () => {
		window.open(`https://t.me/tadeniji06?text=${generateCheckoutMessage()}`, "_blank");
	};

	const totalAmountUsd = services
		.filter((s) => cart.includes(s.id))
		.reduce((sum, s) => sum + s.priceUSD, 0);

	return (
		<div className='bg-slate-50 text-slate-900 min-h-screen relative overflow-hidden'>
			{/* Gamified Background Grids */}
			<div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=")] pointer-events-none opacity-50 z-0'></div>
			<div className='absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-[150px] rounded-full pointer-events-none z-0'></div>
			
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 relative z-10'>
				<motion.div 
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-6'
				>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow-md'
					>
						<Icon icon="mdi:arrow-left" />
						Return to Base
					</Link>
				</motion.div>

				{/* Header Section */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8'
				>
					<div>
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase rounded-full mb-6">
							<Icon icon="mdi:store-outline" className="w-5 h-5" /> 
							Service Shop
						</div>
						<h1 className='text-5xl md:text-8xl font-black tracking-tight text-slate-900 mb-6'>
							Select <span className="text-blue-600">Loadout.</span>
						</h1>
						<p className='text-lg md:text-2xl text-slate-600 font-medium max-w-2xl'>
							Build your custom tech stack package. Review base pricing and initiate a co-op development session.
							<br />
							<span className="text-sm font-bold text-rose-500 mt-2 block">* All prices exclude domain and hosting infrastructure costs.</span>
							<span className="text-sm font-bold text-amber-500 mt-1 block">* Note: Extra complexity of a selected module beyond its core features might be subject to price changes.</span>
						</p>
					</div>

					{/* Currency Toggle */}
					<div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2 w-max">
						<button
							onClick={() => setCurrency("USD")}
							className={`px-6 py-3 rounded-xl font-bold text-sm tracking-widest uppercase transition-all ${
								currency === "USD" 
									? "bg-slate-900 text-white shadow-md" 
									: "text-slate-500 hover:bg-slate-100"
							}`}
						>
							USD ($)
						</button>
						<button
							onClick={() => setCurrency("NGN")}
							className={`px-6 py-3 rounded-xl font-bold text-sm tracking-widest uppercase transition-all ${
								currency === "NGN" 
									? "bg-blue-600 text-white shadow-md shadow-blue-500/30" 
									: "text-slate-500 hover:bg-slate-100"
							}`}
						>
							NGN (₦)
						</button>
					</div>
				</motion.div>

				<div className='lg:grid lg:grid-cols-12 lg:gap-12'>
					{/* Left: Item Grid */}
					<motion.div 
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className='lg:col-span-8 flex flex-col gap-6'
					>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{services.map((item) => {
								const isSelected = cart.includes(item.id);
								return (
									<button
										key={item.id}
										onClick={() => toggleCartItem(item.id)}
										className={`text-left p-6 md:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden group ${
											isSelected
												? "bg-blue-600 border-blue-500 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] -translate-y-2"
												: "bg-white border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md hover:-translate-y-1"
										}`}
									>
										{/* Selection Checkmark */}
										<div className={`absolute top-6 right-6 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
											isSelected ? "bg-white border-white text-blue-600" : "border-slate-300 text-transparent group-hover:border-blue-300"
										}`}>
											<Icon icon="mdi:check-bold" className="text-sm" />
										</div>

										<div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
											isSelected ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
										}`}>
											<Icon icon={item.icon} className="text-3xl" />
										</div>

										<div className={`text-[10px] font-black tracking-widest uppercase mb-2 ${isSelected ? "text-blue-200" : "text-slate-400"}`}>
											{item.category}
										</div>

										<h3 className={`text-2xl font-bold tracking-tight mb-3 ${isSelected ? "text-white" : "text-slate-900"}`}>
											{item.name}
										</h3>

										<p className={`text-sm leading-relaxed mb-6 flex-1 ${isSelected ? "text-blue-50" : "text-slate-500"}`}>
											{item.description}
										</p>

										<div className="space-y-2 mb-8">
											<p className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${isSelected ? "text-blue-200" : "text-slate-400"}`}>Core Features</p>
											{item.features.map((feature, i) => (
												<div key={i} className={`flex items-start gap-2 text-xs font-medium ${isSelected ? "text-blue-50" : "text-slate-600"}`}>
													<Icon icon="mdi:check-circle" className={`mt-0.5 ${isSelected ? "text-blue-200" : "text-blue-500"}`} />
													{feature}
												</div>
											))}
										</div>

										<div className="pt-6 border-t border-current opacity-60"></div>
										<div className={`text-2xl font-black mt-4 flex items-end gap-1 ${isSelected ? "text-white" : "text-blue-600"}`}>
											{formatPrice(item.priceUSD)}
											{item.isMonthly && <span className={`text-sm font-bold opacity-70 mb-1`}>/mo</span>}
										</div>
									</button>
								);
							})}
						</div>
					</motion.div>

					{/* Right: Cart / Checkout Panel */}
					<motion.div 
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}
						className='lg:col-span-4 mt-12 lg:mt-0 relative'
					>
						<div className="sticky top-32 bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.1)]">
							<div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 rounded-t-[2.5rem]"></div>
							
							<div className='flex justify-between items-center mb-8 pt-4'>
								<h3 className='text-xs font-bold tracking-widest uppercase text-slate-500 flex items-center gap-2'>
									<Icon icon="mdi:bag-checked" className="text-xl text-blue-500" />
									Active Cart
								</h3>
								<div className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-black rounded-lg">
									{cart.length} ITEMS
								</div>
							</div>

							<div className="min-h-[200px]">
								<AnimatePresence>
									{cart.length === 0 ? (
										<motion.div 
											initial={{ opacity: 0 }} 
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											className="h-40 flex flex-col items-center justify-center text-center border-2 border-dashed border-slate-200 rounded-2xl"
										>
											<Icon icon="mdi:cart-outline" className="text-4xl text-slate-300 mb-2" />
											<p className="text-sm font-bold text-slate-400">Inventory is Empty</p>
										</motion.div>
									) : (
										<div className="space-y-4">
											{cart.map((id) => {
												const item = services.find(s => s.id === id)!;
												return (
													<motion.div 
														key={id}
														initial={{ opacity: 0, y: -10, scale: 0.95 }}
														animate={{ opacity: 1, y: 0, scale: 1 }}
														exit={{ opacity: 0, scale: 0.9, height: 0, marginBottom: 0 }}
														className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 group"
													>
														<div className="flex-1 min-w-0 pr-4">
															<p className="text-sm font-bold text-slate-900 truncate">{item.name}</p>
															<p className="text-xs font-bold text-blue-600 mt-1">{formatPrice(item.priceUSD)}{item.isMonthly ? '/mo' : ''}</p>
														</div>
														<button 
															onClick={() => toggleCartItem(id)}
															className="w-8 h-8 rounded-full bg-white text-rose-400 flex items-center justify-center border border-slate-200 shadow-sm hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors"
														>
															<Icon icon="mdi:close" />
														</button>
													</motion.div>
												);
											})}
										</div>
									)}
								</AnimatePresence>
							</div>

							<div className="pt-8 mt-8 border-t border-slate-100">
								<div className="flex justify-between items-end mb-8">
									<div>
										<p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-1">Estimated Total</p>
										<p className="text-slate-500 text-xs">Excludes custom extras</p>
									</div>
									<div className="text-3xl font-black text-slate-900">
										{formatPrice(totalAmountUsd)}
									</div>
								</div>

								<div className="space-y-4">
									<button
										onClick={checkoutWhatsApp}
										disabled={cart.length === 0}
										className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-bold tracking-widest uppercase transition-all duration-300 ${
											cart.length > 0 
												? "bg-slate-900 text-white hover:-translate-y-1 hover:shadow-xl shadow-md hover:bg-emerald-600" 
												: "bg-slate-100 text-slate-400 cursor-not-allowed"
										}`}
									>
										<Icon icon="mdi:whatsapp" className="text-2xl" /> Proceed to WhatsApp
									</button>

									<button
										onClick={checkoutTelegram}
										disabled={cart.length === 0}
										className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-bold tracking-widest uppercase transition-all duration-300 ${
											cart.length > 0 
												? "bg-blue-50 text-blue-600 border border-blue-200 hover:-translate-y-1 hover:shadow-lg hover:bg-blue-500 hover:text-white" 
												: "bg-white text-slate-300 border border-slate-100 cursor-not-allowed"
										}`}
									>
										<Icon icon="mdi:telegram" className="text-2xl" /> Proceed to Telegram
									</button>
								</div>
								
								<p className="text-center text-xs text-slate-400 mt-6 font-medium leading-relaxed">
									On proceeding, a drafted message will be created on the selected platform detailing your current loadout.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
