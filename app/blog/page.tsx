import BlogsClient from "./BlogsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Blog Posts | Olutunmise Adeniji",
  description: "Dive into powerful articles exploring technology, growth, mindset, and modern challenges. Curated by YourBrandName.",
  openGraph: {
    title: "Latest Blog Posts | Olutunmise Adeniji",
    description: "Explore all recent articles and insights by Olutunmise.",
    url: "https://www.olutunmise.tech/blog",
    siteName: "Olutunmise E.A",
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
    title: "Latest Blog Posts | Olutunmise",
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
