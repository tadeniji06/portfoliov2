"use client";

import { headerLinks } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className='sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<nav className='flex items-center justify-between h-20'>
					{/* Logo/Brand */}
					<Link href={"/"} className='flex-shrink-0 group'>
						<span className='text-sm font-black text-white uppercase tracking-[0.4em] group-hover:italic transition-all'>
							Tunmise // Archive
						</span>
					</Link>

					{/* Desktop Navigation */}
					<ul className='hidden md:flex items-center space-x-12'>
						{headerLinks.map((link) => (
							<li key={link.title}>
								<Link
									href={link.link}
									className='text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-[0.3em] transition-all duration-300'
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>

					{/* Mobile menu button */}
					<button
						onClick={toggleMobileMenu}
						className='md:hidden p-2 text-white hover:text-gray-400 transition-colors'
						aria-label='System Menu'
					>
						<Icon
							icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
							className='h-5 w-5'
						/>
					</button>
				</nav>

				{/* Mobile Navigation Menu */}
				<div
					className={`md:hidden transition-all duration-500 ease-in-out bg-black border-t border-white/5 ${
						isMobileMenuOpen
							? "max-h-screen opacity-100 py-12"
							: "max-h-0 opacity-0 overflow-hidden"
					}`}
				>
					<div className='flex flex-col items-center space-y-8'>
						{headerLinks.map((link) => (
							<Link
								key={link.title}
								href={link.link}
								onClick={closeMobileMenu}
								className='text-lg font-black text-white hover:text-gray-500 uppercase tracking-[0.5em] transition-all'
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
