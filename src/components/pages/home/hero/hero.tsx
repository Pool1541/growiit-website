/* eslint-disable @next/next/no-img-element */
import { Wrapper } from '@/components/layout/wrapper';
import { Tiles } from '@/components/ui/tiles';
import styles from './hero.module.css';


export default function Hero() {
  return (
    <section className={`${styles.hero} landing-section`} data-header-color='white'>
      <Wrapper className={styles['hero-container']}>
        <div className={styles['hero-left']}>
          <div>
            <h1>Diseño y Desarrollo de páginas web</h1>
            <p>
              Transformamos tus ideas en soluciones eficaces y elegantes, desde el desarrollo web
              hasta el desarrollo de aplicaciones
            </p>
            <a href='#contact'>
              <button>
                <span>Más información</span>
              </button>
            </a>
          </div>
        </div>
        <div className={styles['hero-right']}>
          <div>
            <img
              src='https://d1ssfwckvhk5up.cloudfront.net/public/office-girl-2.webp'
              alt='Mujer con una mirada fija y sonriente hacia la cámara'
            />
            <Tiles
              top='20%'
              right='-35%'
              width='50%'
              height='30rem'
              variant='partial'
            />
            <Tiles
              top='-7rem'
              right='-20%'
              width='80%'
              height='60%'
              variant='full'
            />
            <Tiles
              top='-3rem'
              right='50%'
              width='30%'
              height='50rem'
              variant='top-to-bottom'
            />
            <Tiles
              top='85%'
              right='80%'
              width='30%'
              height='25rem'
              variant='top-to-bottom'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
