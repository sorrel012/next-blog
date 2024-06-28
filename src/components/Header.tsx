import Link from 'next/link';

interface Menu {
  name: string;
  path: string;
}

const menuList: Menu[] = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'posts',
    path: '/posts',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

export default function Header() {
  return (
    <>
      <header className="mb-14 mt-2 text-center">
        <h1 className="py-5 text-2xl font-semibold">나무의 하루</h1>
        <nav>
          <ul className="mt-3 flex justify-center gap-5 text-neutral-500">
            {menuList.map((menu) => (
              <Link
                key={menu.name}
                href={menu.path}
                className="rounded-md bg-gray-100 px-2"
              >
                {menu.name.toUpperCase()}
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
