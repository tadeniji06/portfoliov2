import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Tunmise E.A | Full-Stack & Web3 Developer",
	description:
		"Learn about Tunmise E.A, a Lagos-based full-stack and Web3 developer building web applications, APIs, SaaS platforms, and blockchain-ready products with JavaScript, TypeScript, Node.js, React, Next.js, and Solidity.",
	keywords: [
		// Personal branding
		"Tunmise E.A",
		"Tunmise developer",
		"Nigerian developer",
		"Lagos developer",

		// Technical skills
		"full-stack developer",
		"React developer",
		"Next.js developer",
		"TypeScript developer",
		"JavaScript developer",
		"frontend developer",
		"backend developer",
		"web developer",
		"Web3 developer",
		"Solidity developer",
		"Node.js developer",
		"AI assisted developer",
		"Claude AI developer",
		"Codex developer",

		// Trending tech keywords 2024
		"modern web development",
		"responsive web design",
		"progressive web apps",
		"JAMstack developer",
		"serverless applications",
		"headless CMS",
		"API development",
		"database design",

		// Technologies
		"React.js",
		"Next.js",
		"TypeScript",
		"Tailwind CSS",
		"Node.js",
		"Express.js",
		"MongoDB",
		"PostgreSQL",
		"Solidity",
		"Firebase",
		"Vercel",

		// Industry terms
		"software engineer",
		"web application developer",
		"UI/UX implementation",
		"mobile-first design",
		"SEO optimization",
		"performance optimization",
		"accessibility",
		"clean code",

		// Location-based
		"Nigeria tech talent",
		"African developer",
		"remote developer",
		"freelance developer",

		// Soft skills
		"self-aware developer",
		"technical writer",
		"problem solver",
		"continuous learner",
	],
	authors: [{ name: "Tunmise E.A" }],
	creator: "Tunmise E.A",
	publisher: "Tunmise E.A",

	// Open Graph for social media
	openGraph: {
		title:
			"About Tunmise E.A | Full-Stack & Web3 Developer",
		description:
			"Full-stack and Web3 developer from Lagos, Nigeria building modern web applications, APIs, SaaS platforms, and blockchain-ready products.",
		url: "https://www.olutunmise.tech/about",
		siteName: "Tunmise E.A's Portfolio",
		type: "profile",
		locale: "en_US",
		images: [
			{
				url: "/pefp.jpeg",
				width: 600,
				height: 250,
				alt: "Tunmise E.A - Full-Stack Developer",
				type: "image/jpeg",
			},
		],
	},

	// Twitter Card
	twitter: {
		card: "summary_large_image",
		title: "About Tunmise E.A | Full-Stack & Web3 Developer",
		description:
			"Full-stack and Web3 developer from Lagos, Nigeria specializing in React, Next.js, TypeScript, Node.js, and Solidity.",
		creator: "@tade_niji06",
		images: ["/pefp.jpeg"],
	},

	// Additional metadata
	category: "Technology",
	classification: "Personal Portfolio",

	// Robots and indexing
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	// Additional structured data
	other: {
		"og:profile:first_name": "Tunmise",
		"og:profile:last_name": "Adeniji",
		"og:profile:username": "tadeniji06",
		"article:author": "Tunmise Adeniji",
		"profile:first_name": "Tunmise",
		"profile:last_name": "Adeniji",
		"profile:username": "taden_iji06",
	},
};

const page = () => {
	return (
		<div>
			<About />
		</div>
	);
};

export default page;
