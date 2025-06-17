import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mcodevbytes.in'
  const currentDate = new Date().toISOString()
  
  // Static routes with detailed priorities and frequencies
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]
  
  // Dynamic service routes based on actual service pages
  const serviceRoutes = [
    'web-development',
    'app-development',
    'ai-business-automation',
    'digital-marketing',
    'branding',
    'ecommerce-solution',
    'seo',
    'erp-cloud-solutions',
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [
    ...staticRoutes,
    ...serviceRoutes,
  ]
} 