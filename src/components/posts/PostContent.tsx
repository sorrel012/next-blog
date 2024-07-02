import { AiTwotoneCalendar } from 'react-icons/ai';
import MarkdownViewer from '@/components/posts/MarkdownViewer';

export default function PostContent({ date, title, description, content }) {
  return (
    <section className="mb-6">
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
  );
}
