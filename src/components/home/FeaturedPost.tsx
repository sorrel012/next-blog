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
    <Link href={`/posts/${path}`} className="rounded-md shadow-lg">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={200}
        className="rounded-t-md"
      />
      <div className="p-2 text-center">
        <div className="text-right text-xs text-neutral-400">{date}</div>
        <div className="font-semibold">{title}</div>
        <div>{description}</div>
        <div className="mx-auto mt-1 w-1/2 rounded-full bg-green-100 text-green-800">
          {category}
        </div>
      </div>
    </Link>
  );
}
