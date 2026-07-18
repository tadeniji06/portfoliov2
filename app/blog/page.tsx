import BlogsClient from "./BlogsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Blog Posts | Tunmise E.A",
  description:
    "Explore articles on full-stack development, Web3, tech, and the journey of building products as a developer in Nigeria. Written by Tunmise E.A.",
  openGraph: {
    title: "Latest Blog Posts | Tunmise E.A",
    description:
      "Explore articles on full-stack development, Web3, tech, and the journey of building products. Written by Tunmise E.A.",
    url: "https://www.olutunmise.tech/blog",
    siteName: "Tunmise E.A",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.olutunmise.tech/pefp.jpeg",
        width: 1200,
        height: 630,
        alt: "Tunmise E.A Blog - Tech, Web3 & Development",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Blog Posts | Tunmise E.A",
    description:
      "Explore articles on full-stack development, Web3, and the journey of building products as a developer in Nigeria.",
    creator: "@tade_niji06",
    site: "@tade_niji06",
    images: ["https://www.olutunmise.tech/pefp.jpeg"],
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
