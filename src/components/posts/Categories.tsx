'use client';

interface CategoryProps {
  categories: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
}

export default function Categories({
  categories,
  selectedCategory,
  onClick,
}: CategoryProps) {
  return (
    <nav className="flex flex-col items-center">
      <h2 className="mb-1 font-semibold text-neutral-600">Category</h2>
      <ul className="flex flex-col">
        {categories.map((category) => (
          <li
            className={`${selectedCategory === category ? 'isCategoryActive' : null} hover: cursor-pointer text-neutral-500 hover:border-b-sky-500 hover:text-sky-500`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
