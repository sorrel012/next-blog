'use client';

export default function PostsSidebar({ categories }) {
  return (
    <nav className="flex flex-col items-center">
      <h3 className="mb-1">Category</h3>
      <div className="flex flex-col">
        {categories.map((category) => (
          <button key={category}>{category}</button>
        ))}
      </div>
    </nav>
  );
}
