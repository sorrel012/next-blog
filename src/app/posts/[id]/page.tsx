import { getPostDetail } from '@/service/posts';
import MarkdownViewer from '@/components/posts/MarkdownViewer';

export default async function PostDetail({ params: { id } }) {
  const post = await getPostDetail(id);
  return (
    <article className="mb-10 px-14">
      <h1 className="mb-10 border-b-2 border-solid border-b-blue-700 text-3xl font-bold text-blue-800">
        {post.title}
      </h1>
      <MarkdownViewer content={post.content} />
    </article>
  );
}
