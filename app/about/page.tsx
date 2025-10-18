import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tunmise E.A | Full-Stack Developer & Tech Enthusiast",
  description: "Meet Tunmise E.A, a 21-year-old full-stack developer from Lagos, Nigeria. Specializing in React, Next.js, TypeScript, and modern web development. Industrial Chemistry graduate turned tech innovator.",
  keywords: [
    // Personal branding
    "Tunmise E.A",
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
  authors: [{ name: "Tunmise E.A" }],
  creator: "Tunmise E.A",
  publisher: "Tunmise E.A",
  
  // Open Graph for social media
  openGraph: {
    title: "About Tunmise E.A | Full-Stack Developer & Tech Enthusiast",
    description: "21-year-old full-stack developer from Lagos, Nigeria. Building modern web applications with React, Next.js, and TypeScript. Industrial Chemistry graduate turned tech innovator.",
    url: "https://www.olutunmise.tech/about",
    siteName: "Tunmise E.A's Portfolio",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/pfp.jpg", 
        width: 600,
        height: 250,
        alt: "Tunmise E.A - Full-Stack Developer",
        type: "image/jpg",
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "About Tunmise E.A | Full-Stack Developer",
    description: "21-year-old full-stack developer from Lagos, Nigeria. Specializing in React, Next.js, TypeScript, and modern web development.",
    creator: "@tade_niji06", 
    images: ["/pfp.jpg"],
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
  
  // Additional structured data
  other: {
    "og:profile:first_name": "Tunmise",
    "og:profile:last_name": "Adeniji",
    "og:profile:username": "tadeniji06",
    "article:author": "Tunmise Adeniji",
    "profile:first_name": "Tunmise",
    "profile:last_name": "Adeniji",
    "profile:username": "taden_iji06"
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
