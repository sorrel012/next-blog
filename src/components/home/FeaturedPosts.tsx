import FeaturedPost from '@/components/home/FeaturedPost';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="p-5">
      <h2 className="mb-2 font-bold">Featured Posts</h2>
      <div className="grid grid-cols-4 gap-3 text-sm">
        {posts.map((post) => (
          <FeaturedPost key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
}
