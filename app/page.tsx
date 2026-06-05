import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<div className='min-h-screen'>
			<Hero />
			<Skills />
			<Experience />
		</div>
	);
}
