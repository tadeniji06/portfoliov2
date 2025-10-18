import BlogsClient from "./BlogsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Blog Posts | Tunmise E.A",
  description: "Dive into powerful articles exploring technology, growth, mindset, and modern challenges. Curated by YourBrandName.",
  openGraph: {
    title: "Latest Blog Posts | Tunmise E.A",
    description: "Explore all recent articles and insights by Tunmise E.A.",
    url: "https://www.olutunmise.tech/blog",
    siteName: "Tunmise E.A",
    type: "website",
    images: [
      {
        url: "https://www.olutunmise.tech/icon.svg",
        width: 1200,
        height: 630,
        alt: "Blog overview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Blog Posts | Tunmise E.A",
    description: "Explore fresh takes on growth, tech, and the hustle of modern life.",
    images: ["/icon.svg"],
  },
};

const Page = () => {
  return (
    <div>
      <BlogsClient />
    </div>
  );
};

export default Page;
