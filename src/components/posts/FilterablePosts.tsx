'use client';

import { Post } from '@/service/posts';
import { useState } from 'react';
import FeaturedPost from '@/components/home/FeaturedPost';
import Categories from '@/components/posts/Categories';

interface Props {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_POSTS);
  const filteredPosts =
    selectedCategory === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const onClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section>
      <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPosts.map((post) => (
          <FeaturedPost key={post.title} {...post} />
        ))}
      </div>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={onClick}
      />
    </section>
  );
}
