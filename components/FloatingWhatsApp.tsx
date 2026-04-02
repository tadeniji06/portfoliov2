"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
	"https://wa.me/2349132828613?text=Hi%20Tunmise%2C%20I%27d%20love%20to%20work%20with%20you%21%20Can%20we%20talk%3F";

type Phase = "hidden" | "visible";

export default function FloatingWhatsApp() {
	const [phase, setPhase] = useState<Phase>("hidden");

	useEffect(() => {
		// First show quickly
		const initial = setTimeout(() => {
			setPhase("visible");
		}, 1000);

		// Toggle every 5 seconds
		const interval = setInterval(() => {
			setPhase((prev) => (prev === "hidden" ? "visible" : "hidden"));
		}, 5000);

		return () => {
			clearTimeout(initial);
			clearInterval(interval);
		};
	}, []);

	return (
		<AnimatePresence>
			{phase === "visible" && (
				<motion.a
					initial={{ x: 150, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 150, opacity: 0, transition: { duration: 0.5 } }}
					transition={{ type: "spring", stiffness: 200, damping: 20 }}
					href={WHATSAPP_URL}
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Chat on WhatsApp'
					className='fixed bottom-8 right-6 z-[9999] flex items-center gap-3 bg-white text-blue-600 border border-blue-200 font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-6 py-4 rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:scale-105 transition-colors duration-300 group'
				>
					<Icon
						icon='ic:baseline-whatsapp'
						className='flex-shrink-0 text-3xl'
					/>
					<div className='flex flex-col'>
						<span className='whitespace-nowrap text-[10px] text-slate-500 group-hover:text-blue-200 tracking-widest leading-none mb-1'>
							Ping me now
						</span>
						<span className='whitespace-nowrap text-sm leading-none font-black'>
							Start Co-op
						</span>
					</div>
					
					{/* Gamified indicator dot */}
					<div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-sm"></div>
				</motion.a>
			)}
		</AnimatePresence>
	);
}
