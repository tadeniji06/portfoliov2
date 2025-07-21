import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
	title: "Olutunmise Adeniji | Software Developer",
	description:
		"Full-stack developer in Nigeria building websites, web apps, mobile apps, and Web3 products. Expert in React, Next.js, Tailwind, and blockchain-ready solutions.",

	icons: {
		icon: "/og.png",
	},
	keywords: [
		"Website Developer Nigeria",
		"Best Website Developer Nigeria",
		"Website Designer Nigeria",
		"Software Development Lagos",
		"Web3 dev",
		"Web3 developer lagos",
		"Freelance Software developer",
		"E-commerce website developer Nigeria",
		"React developer",
		"Frontend developer in Nigeria",
		"Freelance Web Developer Lagos",
		"Responsive website design Lagos",
		"Web development services Nigeria",
		"Next.js developer Nigeria",
		"Fullstack dev Nigeria",
		"Web dev personal portfolio Nigeria",
		"Mobile Application Lagos",
		"Frontend engineer lagos",
	],

	openGraph: {
		title: "Olutunmise Adeniji | FrontEnd Developer",
		description:
			"FrontEnd specialized full-stack enthusiast. Expert in React, Next.js and Web3 specific solutions",
		url: "",
		siteName: "Olutunmise Adeniji",
		images: [
			{
				url: "",
				width: 1400,
				height: 700,
				alt: "Olutunmise Adeniji - Web & Frontend Developer in Nigeria",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Olutunmise Adeniji | FrontEnd Developer in Nigeria",
		description:
			"FrontEnd specialized full-stack enthusiast. Expert in React, Next.js and Web3 specific solutions",
		images: ["/og.png"],
		creator: "@tade_niji06",
		site: "@tade_niji06",
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": "-1",
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased' cz-shortcut-listen='true'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
