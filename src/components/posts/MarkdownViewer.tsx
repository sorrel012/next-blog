import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownViewer({ content }) {
  return (
    <Markdown className="prose lg:prose-xl" remarkPlugins={[remarkGfm]}>
      {content}
    </Markdown>
  );
}
