import { Wrapper } from '@/components/layout/wrapper';
import { ImageTiles, Title } from '@/components/ui';
import styles from './about.module.css';

export default function About() {
  return (
    <section id='about' className={`${styles.about} landing-section`} data-header-color='black'>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.content}>
            <article>
              <Title as='h2' size='medium' align='left'>Conoce a Growiit</Title>
              <p>
              Somos tu socio estratégico en <strong>diseño y desarrollo web</strong>. En Growiit, un equipo apasionado y altamente calificado transforma tus ideas en soluciones digitales innovadoras, diseñadas para crecer contigo y destacar en el competitivo mundo online.
              </p>
            </article>
            <article>
              <Title as='h3' size='small' align='left'> Impulsa tu negocio con tecnología personalizada</Title>
              <p>
              En Growiit, fusionamos creatividad y tecnología para ofrecer páginas web intuitivas, mantenimiento de plataformas digitales y soluciones a medida. Nos dedicamos a entender tus necesidades únicas y trabajar juntos para convertir tu visión en realidad. Haz de tu presencia digital una herramienta clave para el éxito.
              </p>
            </article>
          </div>
          <ImageTiles />
        </div>
      </Wrapper>
    </section>
  );
}
