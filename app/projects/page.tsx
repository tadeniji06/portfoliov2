import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
	title: "Projects | Tunmise E.A - Full-Stack & Web3 Developer",
	description:
		"Selected full-stack and Web3 projects by Tunmise E.A, including MyBuma, The HRM 360, This Is Business 360, Gidswap Exchange, SaaS products, marketplaces, and media platforms.",
	keywords: [
		"Tunmise E.A projects",
		"MyBuma",
		"mybuma.com",
		"The HRM 360",
		"thehrm360.com",
		"This Is Business 360",
		"thisisbusiness360.com",
		"Gidswap exchange",
		"ZigSniper bot",
		"DM360 digital marketing",
		"Web3 developer Nigeria",
		"SaaS developer Nigeria",
		"full-stack developer portfolio",
		"Next.js portfolio projects",
	],
	openGraph: {
		title: "Projects | Tunmise E.A",
		description:
			"Selected full-stack and Web3 projects spanning marketplaces, HR software, media publishing, SaaS, and crypto products.",
		url: "https://www.olutunmise.tech/projects",
		siteName: "Tunmise E.A",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "https://www.olutunmise.tech/pefp.jpeg",
				width: 1200,
				height: 630,
				alt: "Tunmise E.A Projects - Full-Stack & Web3 Portfolio",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects | Tunmise E.A - Full-Stack & Web3 Developer",
		description:
			"Selected full-stack and Web3 projects spanning marketplaces, HR software, media publishing, SaaS, and crypto products.",
		creator: "@tade_niji06",
		site: "@tade_niji06",
		images: ["https://www.olutunmise.tech/pefp.jpeg"],
	},
};

const Page = () => {
	return <ProjectsClient />;
};

export default Page;
