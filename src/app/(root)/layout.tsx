import type { HeaderVariables } from '@/types';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const headerVariables: HeaderVariables = {
  '--text-color': '#ffffff',
  '--custom-color': '#ed696c',
  '--header-height': '15rem',
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
      <Footer />
    </>
  );
}
