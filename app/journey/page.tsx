import Journey from "@/components/Journey";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"My Journey | Tunmise E.A - From Curious Kid to Tech Builder",
	description:
		"Follow my interactive journey from a tech-obsessed kid to building...",
	keywords: [
		"Tunmise E.A",
		"software developer journey",
		"tech entrepreneur",
		"African developer",
		"full stack developer",
		"React developer",
		"Node.js developer",
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
			"My Journey | Tunmise E.A - From Curious Kid to Tech Builder",
		description:
			"Follow my interactive journey from a tech-obsessed kid to building...",
		siteName: "Tunmise E.A Portfolio",
		images: [
			{
				url: "/pfp.jpeg",
				width: 800,
				height: 300,
				alt: "Tunmise E.A's Tech Journey Timeline",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"My Journey | Tunmise E.A - From Curious Kid to Tech Builder",
		description:
			"Follow my interactive journey from a tech-obsessed kid to building...",
		creator: "@tade_niji06",
		images: ["/pfp.jpeg"],
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
