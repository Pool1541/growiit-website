
import { EmblaOptionsType } from 'embla-carousel';
import { EmblaCarousel, Explore } from '@/components/pages/blog';
import { adjustColorBrightness } from '@/lib';
import { Header } from '@/components/layout';
import type { HeaderVariables } from '@/types';
import './blog.css'
import getPosts from '@/lib/get-posts';

/**
 * Carga el componente en un chunk separado (SSR)
 * Para cargar el componente solo en el cliente, el componente que lo llama (esta página) debe ser un componente de cliente también.
 */
// const EmblaCarousel = dynamic(() => import('../../components/pages/blog/carousel/carousel'));

const headerVariables: HeaderVariables = {
  '--text-color': '#000000',
  '--custom-color': '#247dae',
  '--header-height': '10rem',
};

export const dynamic = 'force-static'; // Fuerza el renderizado estático y almacena en caché la página

export default async function Page() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const articles = await getPosts();

  const slidesWithDarkColor = articles.map((article) => {
    return {
      ...article,
      'dark-color': adjustColorBrightness(article.color, -50)
    }
  })

  return (
    <>
      <Header variables={headerVariables} />
      <main id='blog' className="landing-section blog" data-header-color='black'>
        <div>
          <EmblaCarousel slides={slidesWithDarkColor} options={OPTIONS} />
          <Explore />
        </div>
      </main>
    </>
    
  )
}