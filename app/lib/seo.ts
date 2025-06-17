// SEO Utilities for MCODEV Bytes
export const baseUrl = 'https://www.mcodevbytes.in'

export const companyInfo = {
  name: 'MCODEV Bytes',
  description: 'Leading web development company in Kerala specializing in custom web applications, mobile app development, AI automation, and digital marketing solutions.',
  phone: '+91-9847274569',
  email: 'mcodevbiz@gmail.com',
  address: {
    locality: 'Malappuram',
    region: 'Kerala',
    country: 'IN'
  },
  socialMedia: [
    'https://www.linkedin.com/company/mcodev-bytes',
    'https://www.instagram.com/mcodev_bytes/',
    'https://www.facebook.com/mcodevbytes',
    'https://x.com/MCODEVBYTES'
  ],
  services: [
    'Web Development',
    'Mobile App Development',
    'AI Business Automation',
    'Digital Marketing',
    'Branding',
    'E-commerce Solutions'
  ]
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Generate Organization structured data
export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyInfo.name,
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": companyInfo.description,
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": companyInfo.address.locality,
      "addressRegion": companyInfo.address.region,
      "addressCountry": companyInfo.address.country
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.phone,
      "contactType": "customer service",
      "availableLanguage": ["English", "Malayalam", "Hindi"]
    },
    "sameAs": companyInfo.socialMedia,
    "serviceArea": {
      "@type": "Place",
      "name": "Kerala, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": companyInfo.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "provider": {
            "@type": "Organization",
            "name": companyInfo.name
          }
        }
      }))
    }
  }
}

// Generate Website structured data
export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": companyInfo.name,
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

// Generate Local Business structured data
export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyInfo.name,
    "description": companyInfo.description,
    "url": baseUrl,
    "telephone": companyInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": companyInfo.address.locality,
      "addressRegion": companyInfo.address.region,
      "addressCountry": companyInfo.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.0168",
      "longitude": "76.0854"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "₹₹",
    "sameAs": companyInfo.socialMedia
  }
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// SEO Meta Tags Generator
export function generateMetaTags(page: {
  title: string
  description: string
  url: string
  type?: string
  image?: string
  keywords?: string[]
}) {
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: page.type || 'website',
      url: page.url,
      title: page.title,
      description: page.description,
      siteName: companyInfo.name,
      images: [{
        url: page.image || `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: page.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [page.image || `${baseUrl}/logo.png`],
    },
    alternates: {
      canonical: page.url,
    },
    keywords: page.keywords || [],
    robots: {
      index: true,
      follow: true,
    }
  }
} 