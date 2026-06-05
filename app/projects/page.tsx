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
	},
};

const Page = () => {
	return <ProjectsClient />;
};

export default Page;
