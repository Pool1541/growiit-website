/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { CSSProperties } from 'react';
import { Wrapper } from '@/components/layout/wrapper';
import { Tiles, Title } from '@/components/ui';
import styles from './hero.module.css';

export default function Hero() {
  const titleStyle: CSSProperties = {
    fontSize: 'clamp(3rem, 4.5vw, 4rem)',
    textWrap: 'wrap',
    marginBottom: '1.6rem',
    color: 'var(--white)',
  };

  return (
    <section className={`${styles.hero} landing-section`} data-header-color='white'>
      <Wrapper className={styles['hero-container']}>
        <div className={styles['hero-left']}>
          <div>
            <Title as='h1' size='extra-large' align='left' style={titleStyle}>
              Diseñamos y desarrollamos tu futuro digital
            </Title>
            <p>
              Llevamos tus ideas al siguiente nivel con soluciones únicas y escalables. Desde
              páginas web personalizadas hasta sistemas completos, hacemos que la tecnología trabaje
              para ti.
            </p>
            <Link href='#contact'>
              <button>
                <span>Iniciemos tu proyecto</span>
              </button>
            </Link>
          </div>
        </div>
        <div className={styles['hero-right']}>
          <div>
            <img
              src='https://d1ssfwckvhk5up.cloudfront.net/public/office-girl-2.webp'
              alt='Mujer con una mirada fija y sonriente hacia la cámara'
            />
            <Tiles top='20%' right='-35%' width='50%' height='30rem' variant='partial' />
            <Tiles top='-7rem' right='-20%' width='80%' height='60%' variant='full' />
            <Tiles top='-3rem' right='50%' width='30%' height='50rem' variant='top-to-bottom' />
            <Tiles top='85%' right='80%' width='30%' height='25rem' variant='top-to-bottom' />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
