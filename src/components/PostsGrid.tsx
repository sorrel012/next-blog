import PostCard from '@/components/PostCard';

export default function PostsGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <PostCard key={post.title} {...post} />
      ))}
    </div>
  );
}
