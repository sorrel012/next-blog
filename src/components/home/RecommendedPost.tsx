import { Post } from '@/service/posts';
import Link from 'next/link';
import Image from 'next/image';

export default function RecommendedPost({
  title,
  path,
  description,
  date,
  category,
}: Post) {
  return (
    <Link
      href={`/posts/${path}`}
      className="mb-2 block h-full rounded-md px-7 shadow-lg"
    >
      <article className="relative h-full">
        <div className="relative h-40 w-full">
          <Image
            src={`/images/posts/${path}.png`}
            alt={title}
            fill
            className="w-full object-cover"
          />
        </div>
        <div className="relative flex flex-col items-center gap-1 p-3">
          <time className="self-end text-xs text-neutral-400">{date}</time>
          <h3 className="font-semibold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="mx-auto my-1 w-1/2 rounded-full bg-green-100 px-2 text-center text-green-800">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
