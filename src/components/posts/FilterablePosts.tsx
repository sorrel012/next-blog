'use client';

import { Post } from '@/service/posts';
import { useState } from 'react';
import FeaturedPost from '@/components/home/FeaturedPost';

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

  return (
    <section>
      <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <FeaturedPost key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
}
