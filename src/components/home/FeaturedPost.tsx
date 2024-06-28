import { Post } from '@/service/posts';
import Image from 'next/image';

export default function FeaturedPost({
  title,
  path,
  description,
  date,
  category,
}: Post) {
  return (
    <article>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={200}
      />
      <div>
        <span>{date}</span>
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{category}</div>
    </article>
  );
}
