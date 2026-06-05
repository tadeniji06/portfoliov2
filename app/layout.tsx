import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ClarityScript from "@/components/Clarity";
import AnalyticsScript from "@/components/Analytics";
import { Toaster } from "sonner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
	title: "Tunmise E.A | Full-Stack & Web3 Developer",
	description:
		"Full-stack and Web3 developer in Lagos, Nigeria building production web applications, APIs, SaaS platforms, and blockchain-ready products with JavaScript, TypeScript, Node.js, React, Next.js, and Solidity.",

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
		"Solidity developer Nigeria",
		"Freelance Software developer",
		"E-commerce website developer Nigeria",
		"React developer",
		"Node.js developer Nigeria",
		"TypeScript developer Nigeria",
		"JavaScript developer Nigeria",
		"AI assisted software developer",
		"Claude AI developer",
		"Codex developer",
		"Frontend developer in Nigeria",
		"Backend developer Nigeria",
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
		title: "Tunmise E.A | Full-Stack & Web3 Developer",
		description:
			"Full-stack and Web3 developer building React, Next.js, Node.js, TypeScript, and Solidity products for startups and growing teams.",
		url: "https://www.olutunmise.tech",
		siteName: "Tunmise E.A",
		images: [
			{
				url: "https://www.olutunmise.tech/pefp.jpeg",
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
		title: "Tunmise E.A | Full-Stack & Web3 Developer in Nigeria",
		description:
			"Full-stack and Web3 developer building React, Next.js, Node.js, TypeScript, and Solidity products.",
		images: ["/pefp.jpeg"],
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
								"Full-stack and Web3 developer in Nigeria building production web applications, APIs, SaaS platforms, and blockchain-ready products.",
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
				<Toaster richColors position='top-right' />
				<FloatingWhatsApp />
			</body>
		</html>
	);
}
