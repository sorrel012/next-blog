import { getPostDetail } from '@/service/posts';
import Image from 'next/image';
import AdjacentPostCard from '@/components/posts/AdjacentPostCard';
import PostContent from '@/components/posts/PostContent';

export default async function PostDetail({ params: { id } }) {
  const post = await getPostDetail(id);
  const { title, path, prevPost, nextPost } = post;

  return (
    <article className="px-14">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
        className="mb-10 w-full"
      />
      <PostContent {...post} />
      <section className="flex shadow-md">
        {prevPost && <AdjacentPostCard post={prevPost} type="prev" />}
        {nextPost && <AdjacentPostCard post={nextPost} type="next" />}
      </section>
    </article>
  );
}
