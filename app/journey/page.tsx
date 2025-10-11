import Journey from "@/components/Journey";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"My Journey | Olutunmise Adeniji - From Curious Kid to Tech Builder",
	description:
		"Follow my interactive journey from a tech-obsessed kid to building...",
	keywords: [
		"Olutunmise Adeniji",
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
		url: "https://www.olutunmise.tech/journey",
		title:
			"My Journey | Olutunmise Adeniji - From Curious Kid to Tech Builder",
		description:
			"Follow my interactive journey from a tech-obsessed kid to building...",
		siteName: "Olutunmise Adeniji Portfolio",
		images: [
			{
				url: "/pfp.jpg",
				width: 800,
				height: 300,
				alt: "Olutunmise Adeniji's Tech Journey Timeline",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"My Journey | Olutunmise Adeniji - From Curious Kid to Tech Builder",
		description:
			"Follow my interactive journey from a tech-obsessed kid to building...",
		creator: "@tade_niji06",
		images: ["/pfp.jpg"],
	},
	alternates: {
		canonical: "https://www.olutunmise.tech/journey",
	},
	category: "Technology",
	classification: "Personal Portfolio",
	other: {
		"article:author": "Olutunmise Adeniji",
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
