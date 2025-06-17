import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - MCODEV Bytes | Web Development, App Development & Digital Solutions Kerala",
  description: "Explore MCODEV Bytes comprehensive digital services including web development, mobile app development, AI automation, digital marketing, branding, and e-commerce solutions. Transform your business with Kerala's leading IT company.",
  keywords: [
    "web development services Kerala",
    "mobile app development services",
    "AI automation services",
    "digital marketing Kerala",
    "branding services Malappuram",
    "e-commerce development",
    "ERP cloud solutions",
    "SEO services Kerala",
    "software development services",
    "digital transformation Kerala",
    "custom web applications",
    "React development services",
    "Next.js development Kerala",
    "Flutter app development",
    "business automation solutions",
    "IT services Kerala",
    "software company Malappuram",
    "digital agency Kerala"
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
    url: "https://www.mcodevbytes.in/services",
    title: "Our Services - MCODEV Bytes | Comprehensive Digital Solutions Kerala",
    description: "Explore our comprehensive digital services including web development, mobile app development, AI automation, and digital marketing. Transform your business with MCODEV Bytes.",
    siteName: "MCODEV Bytes",
    images: [
      {
        url: "https://www.mcodevbytes.in/logo.png",
        width: 1200,
        height: 630,
        alt: "MCODEV Bytes Services - Digital Solutions Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - MCODEV Bytes | Digital Solutions Kerala",
    description: "Comprehensive digital services including web development, mobile apps, AI automation, and digital marketing in Kerala.",
    site: "@MCODEVBYTES",
    creator: "@MCODEVBYTES",
    images: ["https://www.mcodevbytes.in/logo.png"],
  },
  alternates: {
    canonical: "https://www.mcodevbytes.in/services",
  },
  category: "Technology",
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "article:author": "MCODEV Bytes Team",
    "article:section": "Services",
    "article:tag": "Web Development, Mobile Apps, AI Automation, Digital Marketing, Kerala",
    "geo.region": "IN-KL",
    "geo.placename": "Malappuram, Kerala",
    "geo.position": "11.0168;76.0854",
    "ICBM": "11.0168, 76.0854"
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 