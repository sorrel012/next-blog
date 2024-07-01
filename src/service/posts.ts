import path from 'path';
import { promises as fs } from 'fs';

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

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
