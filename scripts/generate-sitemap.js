#!/usr/bin/env node

/**
 * Static Sitemap Generator for MCODEV Bytes
 * This script generates a static sitemap.xml file for production deployment
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.mcodevbytes.in';
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Define all routes with their properties
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: currentDate
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/contact',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  // Service pages
  {
    path: '/services/web-development',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/services/app-development',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/services/ai-business-automation',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/services/digital-marketing',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/services/branding',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/services/ecommerce-solution',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/services/erp-cloud-solution',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/services/seo',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  }
];

// Generate XML content
function generateSitemapXML(routes) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const urls = routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

  const footer = '</urlset>';

  return `${header}\n${urls}\n${footer}`;
}

// Main function
function generateSitemap() {
  try {
    const sitemapContent = generateSitemapXML(routes);
    
    // Create public directory if it doesn't exist
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write sitemap.xml
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    
    console.log('✅ Static sitemap.xml generated successfully!');
    console.log(`📍 Location: ${sitemapPath}`);
    console.log(`🌐 URL: ${baseUrl}/sitemap.xml`);
    console.log(`📊 Total URLs: ${routes.length}`);
    console.log(`📅 Last Modified: ${currentDate}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap, routes }; 