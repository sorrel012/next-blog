import { getPostDetail, getPosts } from '@/service/posts';
import Image from 'next/image';
import Stepper from '@/components/posts/Stepper';
import PostContent from '@/components/posts/PostContent';

export default async function PostDetail({ params: { id } }) {
  const post = await getPostDetail(id);
  const { title, path } = post;
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.title === title);
  const prevIndex = index - 1;
  const nextIndex = index + 1;

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
      <section className="flex">
        {prevIndex >= 0 && <Stepper post={posts[prevIndex]} />}
        {nextIndex < posts.length && <Stepper post={posts[nextIndex]} />}
      </section>
    </article>
  );
}
