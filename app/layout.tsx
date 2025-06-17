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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Multiple structured data objects for better SEO
  const organizationData = {
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

  // Website structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MCODEV Bytes",
    "url": "https://www.mcodevbytes.in",
    "description": "Leading web development company in Kerala specializing in custom web applications, mobile app development, AI automation, and digital marketing solutions.",
    "inLanguage": "en-US",
    "copyrightYear": "2023",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "MCODEV Bytes"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.mcodevbytes.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Preconnect for Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#059669" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="application-name" content="MCODEV Bytes" />
        <meta name="apple-mobile-web-app-title" content="MCODEV Bytes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Geo Location */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Malappuram, Kerala" />
        <meta name="geo.position" content="11.0168;76.0854" />
        <meta name="ICBM" content="11.0168, 76.0854" />
        
        {/* Business Information */}
        <meta name="contact" content="contact@mcodevbytes.in" />
        <meta name="reply-to" content="contact@mcodevbytes.in" />
        <meta name="owner" content="MCODEV Bytes" />
        <meta name="url" content="https://www.mcodevbytes.in" />
        <meta name="identifier-URL" content="https://www.mcodevbytes.in" />
        <meta name="directory" content="submission" />
        <meta name="category" content="Technology, Web Development, Software Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
