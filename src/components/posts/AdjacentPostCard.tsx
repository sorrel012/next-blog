import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/service/posts';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface AdjacentPostProps {
  post: Post;
  type: 'prev' | 'next';
}

const ICON_CLASS = 'm-4 text-5xl text-yellow-300 transition-all hover:text-6xl';

export default async function AdjacentPostCard({
  post,
  type,
}: AdjacentPostProps) {
  const { title, description, path } = post;

  return (
    <Link href={`/posts/${path}`} className="relative max-h-56 w-full bg-black">
      <Image
        className="max-h-56 w-full opacity-40"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={80}
      />
      <div className="group absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-around px-8 text-white">
        {type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="font-bold"> {description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
