import { MetadataRoute } from 'next';
import { navigation } from '@/lib/constants';
import { getNewsPosts } from '@/lib/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zonify.ai';

  // 1. Static routes and those from constants
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // 2. Add all routes from navigation
  navigation.forEach((section) => {
    section.sublinkGroups.forEach((group) => {
      group.links.forEach((link) => {
        if (link.href && !link.href.startsWith('http') && !link.href.startsWith('#')) {
          routes.push({
            url: `${baseUrl}${link.href}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
          });
        }
      });
    });
  });

  // 3. Add dynamic news articles
  const newsPosts = getNewsPosts();
  newsPosts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/news/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  // Remove duplicates just in case
  const uniqueUrls = new Set();
  return routes.filter((route) => {
    if (uniqueUrls.has(route.url)) {
      return false;
    }
    uniqueUrls.add(route.url);
    return true;
  });
}
