import Image from 'next/image';
import profileImage from '../../public/profile.png';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-1">
      <Image
        src={profileImage}
        alt="profile"
        width={250}
        height={250}
        priority
        className="mb-2 rounded-full"
      />
      <h2 className="text-2xl font-bold">Hi, I'm Hana</h2>
      <h3 className="text-xl font-bold">Frontend Engineer</h3>
      <p>안녕하세요, 프론트엔드 개발자 하나입니다.</p>
      <Link href="/contact" className="bg-lightPink rounded-lg px-2 text-white">
        Contact Me
      </Link>
    </section>
  );
}
