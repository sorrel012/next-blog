import { getPostDetail } from '@/service/posts';

export default async function PostDetail({ params: { id } }) {
  const post = await getPostDetail(id);
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
