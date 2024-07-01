import { getRecommendedPosts } from '@/service/posts';
import RecommendedPostsSwiper from '@/components/home/RecommendedPostsSwiper';

export default async function RecommendedPosts() {
  const posts = await getRecommendedPosts();

  return (
    <section className="p-5">
      <h2 className="mb-2 font-bold">You May Like</h2>
      <RecommendedPostsSwiper posts={posts} />
    </section>
  );
}
