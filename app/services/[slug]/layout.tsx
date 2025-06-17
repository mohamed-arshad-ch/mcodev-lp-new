import type { Metadata } from "next";

// Service data for metadata generation
const servicesData = {
  "web-development": {
    title: "Web Development Services",
    description: "Professional web development services in Kerala using React, Next.js, and modern frameworks. Build scalable, high-performance web applications with MCODEV Bytes.",
    keywords: ["web development Kerala", "React development", "Next.js development", "custom web applications", "responsive web design", "web development Malappuram"]
  },
  "app-development": {
    title: "Mobile App Development Services", 
    description: "Expert mobile app development services for iOS and Android in Kerala. Native and cross-platform solutions using React Native and Flutter.",
    keywords: ["mobile app development Kerala", "iOS app development", "Android app development", "React Native", "Flutter development", "app development Malappuram"]
  },
  "ai-business-automation": {
    title: "AI Business Automation Services",
    description: "Revolutionize your business with AI automation services in Kerala. Machine learning, chatbots, and process automation solutions.",
    keywords: ["AI automation Kerala", "business automation", "machine learning", "AI chatbots", "process automation", "artificial intelligence Kerala"]
  },
  "digital-marketing": {
    title: "Digital Marketing Services",
    description: "Data-driven digital marketing services in Kerala. SEO, social media marketing, PPC campaigns, and brand positioning for business growth.",
    keywords: ["digital marketing Kerala", "SEO services", "social media marketing", "PPC campaigns", "digital marketing Malappuram", "online marketing"]
  },
  "branding": {
    title: "Branding Services",
    description: "Professional branding services in Kerala. Logo design, brand identity, visual design, and comprehensive brand strategy solutions.",
    keywords: ["branding services Kerala", "logo design", "brand identity", "visual design", "brand strategy", "branding Malappuram"]
  },
  "ecommerce-solution": {
    title: "E-commerce Development Services",
    description: "Complete e-commerce solutions in Kerala. Custom online stores, payment integration, inventory management, and e-commerce optimization.",
    keywords: ["e-commerce development Kerala", "online store development", "Shopify development", "WooCommerce", "e-commerce Malappuram", "online business"]
  }
};



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const serviceData = servicesData[slug as keyof typeof servicesData];
  
  if (!serviceData) {
    return {
      title: "Service Not Found - MCODEV Bytes",
      description: "The requested service was not found. Explore our other digital services including web development, mobile apps, and AI automation.",
    };
  }

  const baseUrl = "https://www.mcodevbytes.in";
  
  return {
    title: `${serviceData.title} - MCODEV Bytes | Kerala's Leading IT Company`,
    description: serviceData.description,
    keywords: [
      ...serviceData.keywords,
      "MCODEV Bytes",
      "Kerala IT company",
      "software development",
      "digital solutions",
      "technology services"
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
      url: `${baseUrl}/services/${slug}`,
      title: `${serviceData.title} - MCODEV Bytes`,
      description: serviceData.description,
      siteName: "MCODEV Bytes",
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: `${serviceData.title} - MCODEV Bytes`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} - MCODEV Bytes`,
      description: serviceData.description,
      site: "@MCODEVBYTES",
      creator: "@MCODEVBYTES",
      images: [`${baseUrl}/logo.png`],
    },
    alternates: {
      canonical: `${baseUrl}/services/${slug}`,
    },
    category: "Technology",
    verification: {
      google: "your-google-verification-code",
    },
    other: {
      "article:author": "MCODEV Bytes Team",
      "article:section": "Services",
      "article:tag": serviceData.keywords.join(", "),
      "geo.region": "IN-KL",
      "geo.placename": "Malappuram, Kerala",
      "geo.position": "11.0168;76.0854",
      "ICBM": "11.0168, 76.0854"
    }
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
} 