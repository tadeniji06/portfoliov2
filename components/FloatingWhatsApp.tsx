"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
	"https://wa.me/2349132828613?text=Hi%20Tunmise%2C%20I%27d%20love%20to%20work%20with%20you%21%20Can%20we%20talk%3F";

export default function FloatingWhatsApp() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// First show quickly
		const initial = setTimeout(() => {
			setIsVisible(true);
		}, 1000);

		// Toggle every 5 seconds to slide in and out
		const interval = setInterval(() => {
			setIsVisible((prev) => !prev);
		}, 5000);

		return () => {
			clearTimeout(initial);
			clearInterval(interval);
		};
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.a
					initial={{ x: -150, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -150, opacity: 0, transition: { duration: 0.5 } }}
					transition={{ type: "spring", stiffness: 200, damping: 20 }}
					href={WHATSAPP_URL}
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Chat on WhatsApp'
					className='fixed bottom-6 left-6 z-[9999] group flex flex-col items-center'
				>
					{/* The Widget Card */}
					<div className="relative bg-white/90 backdrop-blur-md border border-slate-200 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] rounded-2xl p-3 pr-5 flex items-end gap-3 hover:shadow-blue-500/30 hover:border-blue-300 transition-all hover:-translate-y-1">
						
						{/* Animated Waving Character Container */}
						<div className="relative w-14 h-14 bg-blue-50/50 rounded-full border border-blue-100 flex items-end justify-center overflow-hidden shrink-0">
							{/* The Desk */}
							<div className="absolute bottom-0 w-full h-3 bg-amber-700/80 rounded-t-sm z-10 border-t border-amber-600 shadow-inner"></div>
							
							{/* The Laptop */}
							<div className="absolute bottom-3 right-2 w-5 h-4 bg-slate-300 rounded-sm z-20 border border-slate-400 rotate-[-15deg] origin-bottom-left"></div>

							{/* The Character (emoji) */}
							<div className="text-4xl absolute -bottom-1 left-1 z-0">
								👨‍🦱
							</div>

							{/* Waving Hand */}
							<motion.div
								animate={{ rotate: [0, 20, -10, 20, 0] }}
								transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
								className="text-2xl absolute top-1 right-0 origin-bottom-right z-30"
							>
								👋
							</motion.div>
						</div>
						
						{/* Text Content */}
						<div className="flex flex-col pb-1">
							<div className="flex items-center gap-1.5 mb-1">
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
								<span className="text-[9px] font-black uppercase tracking-widest text-slate-400 font-jakarta leading-none">Online</span>
							</div>
							<span className="text-sm font-black text-slate-800 font-manrope leading-tight mb-0.5">Let's Chat!</span>
							<span className="text-[10px] font-bold text-blue-600 flex items-center gap-1 uppercase tracking-wider">
								<Icon icon="mdi:whatsapp" className="text-sm" /> WhatsApp
							</span>
						</div>
					</div>
				</motion.a>
			)}
		</AnimatePresence>
	);
}
