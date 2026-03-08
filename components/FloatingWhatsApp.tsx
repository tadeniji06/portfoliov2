"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

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
		<a
			href={WHATSAPP_URL}
			target='_blank'
			rel='noopener noreferrer'
			aria-label='Chat on WhatsApp'
			className={`
				fixed bottom-8 right-6 z-[9999]
				flex items-center gap-3
				bg-white text-black border border-white/20
				font-black uppercase tracking-wider
				shadow-[0_0_30px_rgba(255,255,255,0.2)]
				transition-all duration-700 ease-in-out
				px-6 py-4 rounded-none
				hover:bg-neutral-200 hover:scale-105
				${
					phase === "visible"
						? "translate-x-0 opacity-100"
						: "translate-x-[150%] opacity-0 pointer-events-none"
				}
			`}
		>
			<Icon
				icon='ic:baseline-whatsapp'
				className='flex-shrink-0 text-2xl text-black'
			/>
			<span className='whitespace-nowrap text-[11px] leading-none'>
				Want to work with me?
			</span>
		</a>
	);
}
