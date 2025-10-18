import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Projects | Tunmise E.A - Curating Quality Over Quantity",
	description:
		"Explore my carefully curated software development projects.",
	keywords: [
		"Tunmise E.A projects",
		"software development portfolio",
		"React projects",
		"Next.js applications",
		"HR management software",
		"full stack projects",
		"JavaScript projects",
		"TypeScript applications",
		"Node.js backend",
		"MongoDB projects",
		"API development",
		"web applications",
		"e-commerce solutions",
		"real-time applications",
		"African developer projects",
		"tech startup projects",
		"quality software development",
		"modern web development",
		"responsive web design",
	],
	authors: [{ name: "Tunmise E.A" }],
	creator: "Tunmise E.A",
	publisher: "Tunmise E.A",
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
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.olutunmise.tech/projects",
		title:
			"Projects | Tunmise E.A - Quality Software Development Portfolio",
		description:
			"Discover my carefully curated software development projects including OLUTEE TECH HUB, e-commerce solutions, and modern web applications. Quality over quantity approach to showcase impactful work.",
		siteName: "Tunmise E.A Portfolio",
		images: [
			{
				url: "/pfp.jpg", 
				width: 600,
				height: 250,
				alt: "Tunmise E.A's Software Development Projects Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Projects | Tunmise E.A - Quality Software Development Portfolio",
		description:
			"Curating my best software development projects for Portfolio V2. Quality over quantity!",
		creator: "@tade_niji06", 
		images: ["/pfp.jpg"], 
	},
	alternates: {
		canonical: "https://www.olutunmise.tech/projects",
	},
	category: "Technology",
	classification: "Software Development Portfolio",
	other: {
		"portfolio:status": "Curating Quality Projects",
		"portfolio:focus": "Full Stack Development",
		"portfolio:technologies":
			"React, Next.js, TypeScript, Node.js, MongoDB",
		"article:author": "Tunmise E.A",
		"article:section": "Software Development",
		"article:tag":
			"Projects, Portfolio, Web Development, React, Next.js",
	},
};

const page = () => {
	return (
		<div>
			<Projects />
		</div>
	);
};

export default page;
