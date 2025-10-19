import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ClarityScript from "@/components/Clarity";
import AnalyticsScript from "@/components/Analytics";

export const metadata: Metadata = {
	title: "Tunmise E.A | Software Developer",
	description:
		"Full-stack developer in Nigeria building websites, web apps, mobile apps, and Web3 products. Expert in React, Next.js, Tailwind, and blockchain-ready solutions.",

	icons: {
		icon: "/favicon.ico",
	},
	alternates: {
		canonical: "https://olutunmise.tech",
	},
	metadataBase: new URL("https://olutunmise.tech"),

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
		title: "Tunmise E.A | Software Developer",
		description:
			"Software specialized full-stack enthusiast. Expert in React, Next.js and Web3 specific solutions",
		url: "https://www.olutunmise.tech",
		siteName: "Tunmise E.A",
		images: [
			{
				url: "https://www.olutunmise.tech/pfp.jpg",
				width: 700,
				height: 300,
				alt: "Tunmise E.A - Fullstack Developer in Nigeria",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tunmise E.A | Software Developer in Nigeria",
		description:
			"Software specialized full-stack enthusiast. Expert in React, Next.js and Web3 specific solutions",
		images: ["/pfp.jpg"],
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
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Olutunmise Adeniji",
							url: "https://olutunmise.tech",
							sameAs: [
								"https://github.com/tadeniji06",
								"https://x.com/tade_niji06",
								"https://www.linkedin.com/in/tunmise-e-a-16a846250/",
							],
							jobTitle: "Software Developer",
							worksFor: {
								"@type": "Organization",
								name: "Haychar Hub",
							},
							description:
								"Full-stack developer in Nigeria building websites, web apps, mobile apps, and Web3 products.",
						}),
					}}
				/>
			</head>

			<body className='antialiased' cz-shortcut-listen='true'>
				<Header />
				{children}
				<Footer />
				<ClarityScript />
				<AnalyticsScript />
			</body>
		</html>
	);
}
