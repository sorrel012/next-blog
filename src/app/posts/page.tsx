import { getPosts } from '@/service/posts';
import FilterablePosts from '@/components/posts/FilterablePosts';

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [
    'All Posts',
    ...new Set(posts.map((post) => post.category)),
  ];

  return (
    <>
      <FilterablePosts posts={posts} categories={categories} />
    </>
  );
}
