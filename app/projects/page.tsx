import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
	title: "Projects | Tunmise E.A",
	description:
		"A classified dossier of engineered products: SaaS platforms, Web3 exchanges, Telegram bots, and enterprise HR systems built by Tunmise E.A.",
	keywords: [
		"Tunmise E.A projects",
		"Gidswap exchange",
		"ZigSniper bot",
		"DM360 digital marketing",
		"Valora HR",
		"Web3 developer Nigeria",
		"SaaS developer Nigeria",
	],
	openGraph: {
		title: "The Arsenal | Tunmise E.A",
		description:
			"Engineered products spanning Web3, SaaS, and enterprise systems.",
		url: "https://www.olutunmise.tech/projects",
		siteName: "Tunmise E.A",
		type: "website",
	},
};

const Page = () => {
	return <ProjectsClient />;
};

export default Page;
