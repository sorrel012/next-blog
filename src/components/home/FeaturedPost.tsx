import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPost({
  title,
  path,
  description,
  date,
  category,
}: Post) {
  return (
    <Link
      href={`/posts/${path}`}
      className="overflow-hidden rounded-md shadow-lg"
    >
      <article>
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
          className="w-full"
        />
        <div className="flex flex-col items-center gap-1 p-3">
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
