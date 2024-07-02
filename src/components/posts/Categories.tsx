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
      <h3 className="mb-1 font-semibold text-neutral-600">Category</h3>
      <div className="flex flex-col">
        {categories.map((category) => (
          <button
            className={`${selectedCategory === category ? 'isCategoryActive' : null} text-neutral-500`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
}
