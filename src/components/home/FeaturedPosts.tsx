import FeaturedPost from '@/components/home/FeaturedPost';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <>
      <h2>featured Posts</h2>
      {posts.map((post) => (
        <FeaturedPost key={post.title} {...post} />
      ))}
    </>
  );
}
