import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Olutunmise Adeniji | Full-Stack Developer & Tech Enthusiast",
  description: "Meet Olutunmise Adeniji, a 21-year-old full-stack developer from Lagos, Nigeria. Specializing in React, Next.js, TypeScript, and modern web development. Industrial Chemistry graduate turned tech innovator.",
  keywords: [
    // Personal branding
    "Olutunmise Adeniji",
    "Tunmise developer",
    "Nigerian developer",
    "Lagos developer",
    
    // Technical skills
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "JavaScript developer",
    "frontend developer",
    "backend developer",
    "web developer",
    
    // Trending tech keywords 2024
    "modern web development",
    "responsive web design",
    "progressive web apps",
    "JAMstack developer",
    "serverless applications",
    "headless CMS",
    "API development",
    "database design",
    
    // Technologies
    "React.js",
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Vercel",
    
    // Industry terms
    "software engineer",
    "web application developer",
    "UI/UX implementation",
    "mobile-first design",
    "SEO optimization",
    "performance optimization",
    "accessibility",
    "clean code",
    
    // Location-based
    "Nigeria tech talent",
    "African developer",
    "remote developer",
    "freelance developer",
    
    // Soft skills
    "self-aware developer",
    "technical writer",
    "problem solver",
    "continuous learner"
  ],
  authors: [{ name: "Olutunmise Adeniji" }],
  creator: "Olutunmise Adeniji",
  publisher: "Olutunmise Adeniji",
  
  // Open Graph for social media
  openGraph: {
    title: "About Olutunmise Adeniji | Full-Stack Developer & Tech Enthusiast",
    description: "21-year-old full-stack developer from Lagos, Nigeria. Building modern web applications with React, Next.js, and TypeScript. Industrial Chemistry graduate turned tech innovator.",
    url: "https://olutunmise.vercel.app/about",
    siteName: "Olutunmise Adeniji Portfolio",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/hero.jpg", 
        width: 1200,
        height: 630,
        alt: "Olutunmise Adeniji - Full-Stack Developer",
        type: "image/jpg",
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "About Olutunmise Adeniji | Full-Stack Developer",
    description: "21-year-old full-stack developer from Lagos, Nigeria. Specializing in React, Next.js, TypeScript, and modern web development.",
    creator: "@tade_niji06", 
    images: ["/hero.jpg"],
  },
  
  // Additional metadata
  category: "Technology",
  classification: "Personal Portfolio",
  
  // Robots and indexing
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
  
  // verification: {
  //   google: "your-google-verification-code",
  // },
  
  // Additional structured data
  other: {
    "og:profile:first_name": "Olutunmise",
    "og:profile:last_name": "Adeniji",
    "og:profile:username": "tadeniji06",
    "article:author": "Olutunmise Adeniji",
    "profile:first_name": "Olutunmise",
    "profile:last_name": "Adeniji",
    "profile:username": "tadeniji06"
  }
};

const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;
