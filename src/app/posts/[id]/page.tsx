import { getPostDetail } from '@/service/posts';

export default async function PostDetail({ params: { id } }) {
  const post = await getPostDetail(id);
  return <pre>{post}</pre>;
}
