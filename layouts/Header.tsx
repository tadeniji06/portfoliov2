"use client";

import { headerLinks } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header 
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-sm py-0" : "bg-transparent py-2"
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<nav className='flex items-center justify-between h-20'>
					{/* Logo/Brand */}
					<Link href={"/"} className='flex-shrink-0 group'>
						<span className='text-xl font-black text-slate-900 uppercase tracking-[0.2em] group-hover:text-blue-600 transition-colors'>
							Tunmise<span className="text-blue-600 group-hover:text-slate-900 transition-colors">.</span>
						</span>
					</Link>

					{/* Desktop Navigation */}
					<ul className='hidden md:flex items-center space-x-12'>
						{headerLinks.map((link) => (
							<li key={link.title}>
								<Link
									href={link.link}
									className='text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-all duration-300 relative group'
								>
									{link.title}
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
								</Link>
							</li>
						))}
					</ul>

					{/* Mobile menu button */}
					<button
						onClick={toggleMobileMenu}
						className='md:hidden p-2 text-slate-900 hover:text-blue-600 transition-colors bg-white/50 rounded-lg backdrop-blur-sm'
						aria-label='System Menu'
					>
						<Icon
							icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
							className='h-7 w-7'
						/>
					</button>
				</nav>

				{/* Mobile Navigation Menu */}
				<div
					className={`md:hidden absolute left-0 right-0 w-full transition-all duration-500 ease-in-out bg-white border-b border-slate-200 shadow-xl ${
						isMobileMenuOpen
							? "max-h-screen opacity-100 py-12"
							: "max-h-0 opacity-0 overflow-hidden py-0 border-transparent shadow-none"
					}`}
				>
					<div className='flex flex-col items-center space-y-8'>
						{headerLinks.map((link) => (
							<Link
								key={link.title}
								href={link.link}
								onClick={closeMobileMenu}
								className='text-xl font-bold text-slate-900 hover:text-blue-600 uppercase tracking-widest transition-all'
							>
								{link.title}
							</Link>
						))}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
