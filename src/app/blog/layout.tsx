import { Metadata } from 'next';
import { Footer, NewsLetter } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <NewsLetter />
      <Footer />
    </>
  );
}
