import Services from "@/components/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
	title:
		"Services | Olutunmise Adeniji - Curating Quality Over Quantity",
	description:
		"Explore my carefully curated software development projects. Currently filtering by quality and impact for Portfolio V2. Visit my V1 portfolio at olutunmise.netlify.app to see my current work including OLUTEE TECH HUB and more.",
	keywords: [
		"Olutunmise Adeniji projects",
		"software development portfolio",
		"React projects",
		"Next.js applications",
		"OLUTEE TECH HUB",
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
	authors: [{ name: "Olutunmise Adeniji" }],
	creator: "Olutunmise Adeniji",
	publisher: "Olutunmise Adeniji",
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
		url: "https://olutunmise.vercel.app/services",
		title:
			"Services | Olutunmise Adeniji - Quality Software Development Portfolio",
		description:
			"Discover my carefully curated software development projects including OLUTEE TECH HUB, e-commerce solutions, and modern web applications. Quality over quantity approach to showcase impactful work.",
		siteName: "Olutunmise Adeniji Portfolio",
		images: [
			{
				url: "/hero.jpg", // You'll need to create this image
				width: 600,
				height: 250,
				alt: "Olutunmise Adeniji's Software Development Projects Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Services | Olutunmise Adeniji - Quality Software Development Portfolio",
		description:
			"Curating my best software development projects for Portfolio V2. Quality over quantity! 🚀 Check out my current work at olutunmise.netlify.app",
		creator: "@tade_niji06", // Replace with your actual Twitter handle
		images: ["/hero.jpg"], // Same image as OpenGraph
	},
	alternates: {
		canonical: "https://olutunmise.vercel.app/services",
	},
	category: "Technology",
	classification: "Software Development Portfolio",
	other: {
		"portfolio:status": "Curating Quality Projects",
		"portfolio:focus": "Full Stack Development",
		"portfolio:technologies":
			"React, Next.js, TypeScript, Node.js, MongoDB",
		"article:author": "Olutunmise Adeniji",
		"article:section": "Software Development",
		"article:tag":
			"Projects, Portfolio, Web Development, React, Next.js, OLUTEE TECH HUB",
	},
};
const page = () => {
	return (
		<div>
			<Services />
		</div>
	);
};
export default page;
