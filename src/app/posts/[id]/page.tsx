import { getPostDetail } from '@/service/posts';
import MarkdownViewer from '@/components/posts/MarkdownViewer';
import Image from 'next/image';
import { AiTwotoneCalendar } from 'react-icons/ai';

export default async function PostDetail({ params: { id } }) {
  const { title, description, date, path, content } = await getPostDetail(id);
  return (
    <article className="mb-10 px-14">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
        className="mb-10 w-full"
      />
      <section>
        <div className="flex items-center justify-end text-neutral-600">
          <AiTwotoneCalendar />
          <p>{date.toString()}</p>
        </div>
        <h1 className="border-t-2 border-solid border-b-blue-700 pt-2 text-3xl font-bold text-blue-800">
          {title}
        </h1>
        <p className="mb-10 mt-2 border-b-2 border-solid border-b-blue-700 text-blue-950">
          {description}
        </p>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
