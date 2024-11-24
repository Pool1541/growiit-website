import { Metadata } from 'next';
import { Footer, NewsLetter } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre tecnología, diseño y desarrollo web, marketing digital y más.',
  alternates: {
    canonical: 'https://growiit.com/blog',
  }
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
