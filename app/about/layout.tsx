import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MCODEV Bytes - Leading Web Development Company in Kerala | Our Story & Mission",
  description: "Discover MCODEV Bytes' journey as Kerala's premier web development company. Learn about our mission, vision, core values, and commitment to delivering innovative digital solutions since 2023.",
  keywords: [
    "about mcodev bytes",
    "web development company kerala story",
    "software development team malappuram", 
    "digital agency kerala mission",
    "web development company history",
    "kerala it company about",
    "mcodev bytes team",
    "web development company vision",
    "software company kerala values",
    "digital transformation company",
    "web development malappuram",
    "kerala software company",
    "it company kerala about us"
  ],
  authors: [{ name: "MCODEV Bytes Team" }],
  creator: "MCODEV Bytes",
  publisher: "MCODEV Bytes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mcodevbytes.in/about",
    title: "About MCODEV Bytes - Leading Web Development Company in Kerala",
    description: "Discover MCODEV Bytes' journey as Kerala's premier web development company. Learn about our mission, vision, and commitment to delivering innovative digital solutions.",
    siteName: "MCODEV Bytes",
    images: [
      {
        url: "https://www.mcodevbytes.in/logo.png",
        width: 1200,
        height: 630,
        alt: "MCODEV Bytes - About Our Web Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MCODEV Bytes - Leading Web Development Company in Kerala",
    description: "Discover our journey as Kerala's premier web development company. Mission-driven team delivering innovative digital solutions.",
    site: "@MCODEVBYTES",
    creator: "@MCODEVBYTES",
    images: ["https://www.mcodevbytes.in/logo.png"],
  },
  alternates: {
    canonical: "https://www.mcodevbytes.in/about",
  },
  category: "Technology",
  verification: {
    google: "your-google-verification-code", // Replace with actual Google verification code
  },
  other: {
    "article:author": "MCODEV Bytes Team",
    "article:section": "About",
    "article:tag": "Web Development, Kerala, Software Company, Digital Agency",
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 