import path from 'path';
import { promises as fs } from 'fs';
import { cache } from 'react';

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export interface PostData extends Post {
  content: string;
  prevPost: Post | null;
  nextPost: Post | null;
}

export const getPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
});

export async function getFeaturedPosts() {
  const posts = await getPosts();
  const featuredPosts = posts.filter((post) => post.featured);
  featuredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return featuredPosts;
}

export async function getRecommendedPosts() {
  const posts = await getPosts();
  const recommendedPosts = posts.filter((post) => !post.featured);
  recommendedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return recommendedPosts;
}

export async function getPostDetail(fileName): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getPosts();
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const prevPost = index > 0 ? posts[index - 1] : null;
  const nextPost = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await fs.readFile(filePath, 'utf-8');
  return { ...post, content, prevPost, nextPost };
}
