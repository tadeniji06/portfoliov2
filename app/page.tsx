import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import GamifiedProgress from "@/components/GamifiedProgress";

export default function Home() {
	return (
		<div className='min-h-screen'>
			<GamifiedProgress />
			<Hero />
			<Skills />
			<Experience />
		</div>
	);
}

