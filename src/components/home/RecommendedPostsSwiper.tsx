'use client';

import { Post } from '@/service/posts';
import RecommendedPost from '@/components/home/RecommendedPost';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function RecommendedPostsSwiper({ posts }: Post[]) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      autoplay
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        770: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      className="mb-5 w-full"
    >
      {posts.map((post) => (
        <SwiperSlide key={post.title}>
          <RecommendedPost key={post.description} {...post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
