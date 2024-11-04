import { Metadata } from 'next';
import { Header, Footer, NewsLetter } from '@/components/layout';
import type { HeaderVariables } from '@/types';

const headerVariables: HeaderVariables = {
  '--text-color': '#000000',
  '--custom-color': '#247dae',
  '--header-height': '10rem',
};

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
      <Header variables={headerVariables} />
      {children}
      <NewsLetter />
      <Footer />
    </>
  );
}
