import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PostsSidebar from '@/components/posts/PostsSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Posts',
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-between p-3">
      <main>{children}</main>
      <PostsSidebar />
    </div>
  );
}
