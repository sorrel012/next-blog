import { AiFillGithub } from 'react-icons/ai';
import { SiTistory } from 'react-icons/si';
import { PiButterfly } from 'react-icons/pi';
import ContactForm from '@/components/contact/ContactForm';

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.com/sorrel012',
    class: 'text-5xl',
  },
  {
    icon: <SiTistory />,
    url: 'https://sorrel012.tistory.com',
    class: 'text-4xl',
  },
  {
    icon: <PiButterfly />,
    url: 'https://www.hwh-in-wonderland.com/',
    class: 'text-5xl',
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="mb-8 mt-2 text-3xl font-bold">Contact Me</h2>
      <p className="mb-8 text-xl">sorrel012@gmail.com</p>
      <ul className="my-2 flex gap-4 rounded-2xl bg-neutral-100 px-4 py-3">
        {LINKS.map((link, index) => (
          <a
            className={`${link.class!} flex items-center px-2 text-neutral-700 hover:text-yellow-400`}
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="my-8 text-2xl font-bold">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
