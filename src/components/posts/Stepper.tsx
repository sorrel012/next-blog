import Link from 'next/link';
import Image from 'next/image';

export default async function Stepper({ post }) {
  const { title, description, path } = post;

  return (
    <article className="w-full">
      <Link href={`/posts/${path}`} className="relative">
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={100}
          className="size-10/12 w-full object-cover"
        />
        <div className="z-99 absolute left-10 top-20 text-xl font-bold text-white">
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
      </Link>
    </article>
  );
}
