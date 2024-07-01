'use client';

const categories = [
  'All Posts',
  'my story',
  'frontend',
  'backend',
  'javascript',
];
export default function PostsSidebar() {
  return (
    <nav>
      <h3 className="mb-1">Category</h3>
      <div className="flex flex-col items-center">
        {categories.map((category) => (
          <button key={category}>{category}</button>
        ))}
      </div>
    </nav>
  );
}
