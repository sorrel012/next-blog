'use client';

import { Post } from '@/service/posts';
import { useState } from 'react';
import Categories from '@/components/posts/Categories';
import PostsGrid from '@/components/PostsGrid';

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
      <PostsGrid posts={filteredPosts} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={onClick}
      />
    </section>
  );
}
