import { EmblaOptionsType } from 'embla-carousel';
import { EmblaCarousel, Explore } from '@/components/pages/blog';
import { Header } from '@/components/layout';
import { adjustColorBrightness } from '@/lib';
import getPosts from '@/lib/get-posts';
import type { HeaderVariables, MainVariables } from '@/types';
import './blog.css'


/**
 * Carga el componente en un chunk separado (SSR)
 * Para cargar el componente solo en el cliente, el componente que lo llama (esta página) debe ser un componente de cliente también.
 */
// const EmblaCarousel = dynamic(() => import('../../components/pages/blog/carousel/carousel'));

export const dynamic = 'force-static'; // Fuerza el renderizado estático y almacena en caché la página

export default async function Page() {
  const options: EmblaOptionsType = { loop: true };
  const articles = await getPosts();

  const initialCustomColor = articles[0].color;
  const initialCustomDarkColor = adjustColorBrightness(initialCustomColor, -50);

  const headerVariables: HeaderVariables = {
    '--text-color': '#000000',
    '--custom-color': initialCustomDarkColor,
    '--header-height': '10rem',
  };

  const mainVariables: MainVariables = {
    '--custom-article-bg-color': initialCustomColor,
  }

  const slidesWithDarkColor = articles.map((article) => {
    return {
      ...article,
      'dark-color': adjustColorBrightness(article.color, -50)
    }
  })

  return (
    <>
      <Header variables={headerVariables} />
      <main id='blog' className="landing-section blog" data-header-color='black' style={mainVariables}>
        <div>
          <EmblaCarousel slides={slidesWithDarkColor} options={options} />
          <Explore />
        </div>
      </main>
    </>
  )
}