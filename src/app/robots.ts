import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/faq', '/privacy', '/posts', '/posts/*', '/features/*'],
        disallow: [
          '/admin/',
          '/api/',
          '/*.json$',
          '/*.xml$',
          '/_next/',
          '/static/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://www.gutspy.com/sitemap.xml',
    host: 'https://www.gutspy.com',
  }
}
