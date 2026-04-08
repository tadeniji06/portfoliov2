import RatesClient from "./RatesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Rate Card & Services | Tunmise E.A",
	description:
		"View rates for system builds, web apps, dApps, and automation bots. Build your package and initiate co-op.",
};

const page = () => {
	return <RatesClient />;
};

export default page;
