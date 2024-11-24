import type { MetadataRoute } from 'next';
import getPosts from '@/lib/get-posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://growiit.com/blog/${post.slug}`,
    lastModified: new Date(post.lastModified!).toISOString().split('T')[0],
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  const routes: MetadataRoute.Sitemap = [
    {
      url: '/',
      priority: 1.0,
    },
    {
      url: '/politica-de-privacidad',
      priority: 0.3,
    },
    {
      url: '/terminos-del-servicio',
      priority: 0.3,
    },
    {
      url: '/terminos-y-condiciones',
      priority: 0.3,
    },
    {
      url: '/blog',
      priority: 0.8,
    },
  ].map((route) => ({
    url: `https://growiit.com${route.url}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'yearly',
    priority: route.priority,
  }));

  return [...articles, ...routes];
}
