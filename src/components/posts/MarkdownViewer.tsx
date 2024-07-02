import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function MarkdownViewer({ content }) {
  return (
    <Markdown
      className="prose max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={oneDark}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img(image) {
          return (
            <Image
              src={image.src || ''}
              alt={image.alt || ''}
              width={500}
              height={250}
              className="max-h-60 w-full object-cover"
            />
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}
