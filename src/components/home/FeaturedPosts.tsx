import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from '@/components/PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="p-5">
      <h2 className="mb-2 font-bold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
