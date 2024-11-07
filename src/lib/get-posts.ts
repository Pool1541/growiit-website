import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';
import { createSlug } from './replace-accents';

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
        const slug = createSlug(data.title.toLowerCase().replace(/ /g, '-'))
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

export default getPosts;
