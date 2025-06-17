import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MCODEV Bytes - Premier Web Development Company in Kerala | Custom Web & Mobile App Solutions",
  description: "Leading web development company in Kerala specializing in custom web applications, mobile app development, AI automation, digital marketing, and e-commerce solutions. Expert React.js, Next.js, Flutter, and Node.js development services.",
  keywords: [
    "web development company Kerala",
    "mobile app development",
    "custom web applications",
    "React.js development",
    "Next.js development",
    "Flutter app development",
    "Node.js development",
    "AI automation services",
    "digital marketing",
    "e-commerce solutions",
    "ERP cloud solutions",
    "SEO services",
    "web development Malappuram",
    "software development company",
    "responsive web design",
    "progressive web apps",
    "API development",
    "database design",
    "UI/UX design",
    "business automation"
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
    url: "https://www.mcodevbytes.in",
    title: "MCODEV Bytes - Premier Web Development Company in Kerala",
    description: "Leading web development company in Kerala specializing in custom web applications, mobile app development, AI automation, and digital marketing solutions.",
    siteName: "MCODEV Bytes",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MCODEV Bytes - Web Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCODEV Bytes - Premier Web Development Company in Kerala",
    description: "Leading web development company specializing in custom web applications, mobile app development, and AI automation solutions.",
    site: "@MCODEVBYTES",
    creator: "@MCODEVBYTES",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.mcodevbytes.in",
  },
  category: "Technology",
  classification: "Business",
  verification: {
    google: "your-google-verification-code", // Replace with actual Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MCODEV Bytes",
    "url": "https://www.mcodevbytes.in",
    "logo": "https://www.mcodevbytes.in/logo.png",
    "description": "Leading web development company in Kerala specializing in custom web applications, mobile app development, AI automation, and digital marketing solutions.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Malappuram",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9847274569",
      "contactType": "customer service",
      "availableLanguage": ["English", "Malayalam", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/mcodev-bytes",
      "https://www.instagram.com/mcodev_bytes/",
      "https://www.facebook.com/mcodevbytes",
      "https://x.com/MCODEVBYTES"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Kerala, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web application development using React.js, Next.js, and modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Cross-platform mobile app development using Flutter and React Native"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Business Automation",
            "description": "AI-powered business automation solutions and machine learning integration"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
