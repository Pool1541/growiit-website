import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';
import { createSlug } from './create-slug';

const MAX_RECOMMENDED_POSTS = 4;
const MAX_RECENT_POSTS = 1;

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const posts = await fs.readdir('./posts/');

  const resolvedPosts = await Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);
        const slug = data.slug || createSlug(data.title.toLowerCase().replace(/ /g, '-'));
        data.slug = slug;

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as BlogArticleInterface;
      })
  );

  return resolvedPosts.filter((post) => post !== null);
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.published !== false && post.slug === slug);
}

export async function getRecentPosts() {
  const posts = await getPosts();
  // Ordenar los posts por fecha de publicación
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, MAX_RECENT_POSTS);
}

export async function getTopViewedPosts() {
  const posts = await getPosts();
  const recentPosts = await getRecentPosts();

  return posts
    .filter((post) => !recentPosts.includes(post))
}

export async function getRecommendedPosts(excludePost?: BlogArticleInterface) {
  const posts = await getPosts();

  return posts.filter((post) => post !== excludePost).slice(0, MAX_RECOMMENDED_POSTS);
}

export default getPosts;