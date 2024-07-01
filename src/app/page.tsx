import Profile from '@/components/home/Profile';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import RecommendedPosts from '@/components/home/RecommendedPosts';

export default function Home() {
  return (
    <>
      <Profile />
      <FeaturedPosts />
      <RecommendedPosts />
    </>
  );
}
