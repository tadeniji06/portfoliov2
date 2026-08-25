"use client";

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function GamifiedProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const [level, setLevel] = useState(1);
	const [isVisible, setIsVisible] = useState(false);
	
	// Transform scroll progress to a percentage string
	const progressPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const strokeDashoffset = useTransform(progressPercentage, (p) => 138 - (138 * p) / 100);
	
	// Show widget after scrolling a bit
	useEffect(() => {
		const unsubscribe = scrollYProgress.on("change", (latest) => {
			if (latest > 0.05) setIsVisible(true);
			else setIsVisible(false);
		});
		return () => unsubscribe();
	}, [scrollYProgress]);

	useEffect(() => {
		const unsubscribe = progressPercentage.on("change", (latest) => {
			if (latest < 25) setLevel(1);
			else if (latest < 50) setLevel(2);
			else if (latest < 75) setLevel(3);
			else if (latest < 95) setLevel(4);
			else setLevel(5); // Max Level
		});
		return () => unsubscribe();
	}, [progressPercentage]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={{ type: "spring", stiffness: 200, damping: 20 }}
					className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-slate-200/50 p-3 pr-5 rounded-full shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] group cursor-default"
				>
					<div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-slate-50 border border-slate-100 shadow-sm overflow-hidden">
						{/* Circular Progress Background */}
						<svg className="absolute inset-0 w-full h-full -rotate-90">
							<circle
								cx="24"
								cy="24"
								r="22"
								fill="none"
								stroke="#f1f5f9"
								strokeWidth="4"
							/>
							<motion.circle
								cx="24"
								cy="24"
								r="22"
								fill="none"
								stroke="#2563eb"
								strokeWidth="4"
								strokeDasharray="138"
								style={{ strokeDashoffset }}
								strokeLinecap="round"
							/>
						</svg>
						<Icon icon="mdi:robot-happy-outline" className="text-xl text-blue-600 relative z-10 group-hover:scale-110 transition-transform" />
					</div>
					
					<div className="flex flex-col">
						<span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-jakarta leading-none mb-1">
							Explorer Level
						</span>
						<span className="text-sm font-bold text-slate-800 font-manrope leading-none flex items-center gap-2">
							{level === 5 ? (
								<span className="text-blue-600 animate-pulse">Max Level! Hire Me?</span>
							) : (
								<span>Level {level}</span>
							)}
						</span>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
