import Journey from "@/components/Journey";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Career Journey | Tunmise E.A - Full-Stack & Web3 Developer",
	description:
		"Follow Tunmise E.A's career journey from learning JavaScript to building full-stack web applications, SaaS products, Web3 interfaces, and AI-assisted engineering workflows.",
	keywords: [
		"Tunmise E.A",
		"software developer journey",
		"tech entrepreneur",
		"African developer",
		"full stack developer",
		"Web3 developer",
		"TypeScript developer",
		"React developer",
		"Node.js developer",
		"Solidity developer",
		"HR management software",
		"tech startup Africa",
		"developer story",
		"coding journey",
		"self-taught programmer",
		"Industrial Chemistry graduate",
		"youngest graduate",
		"tech passion",
		"value creation",
		"problem solver",
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
		url: "https://www.olutunmise.tech/journey",
		title:
			"Career Journey | Tunmise E.A - Full-Stack & Web3 Developer",
		description:
			"From JavaScript fundamentals to full-stack, Web3, SaaS, and AI-assisted product development.",
		siteName: "Tunmise E.A Portfolio",
		images: [
			{
				url: "/pefp.jpeg",
				width: 800,
				height: 300,
				alt: "Tunmise E.A's Tech Journey Timeline",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Career Journey | Tunmise E.A - Full-Stack & Web3 Developer",
		description:
			"From JavaScript fundamentals to full-stack, Web3, SaaS, and AI-assisted product development.",
		creator: "@tade_niji06",
		images: ["/pefp.jpeg"],
	},
	alternates: {
		canonical: "https://www.olutunmise.tech/journey",
	},
	category: "Technology",
	classification: "Personal Portfolio",
	other: {
		"article:author": "Tunmise E.A",
		"article:section": "Technology",
		"article:tag":
			"Software Development, Entrepreneurship, Tech Journey",
	},
};

const page = () => {
	return (
		<div>
			<Journey />
		</div>
	);
};

export default page;
