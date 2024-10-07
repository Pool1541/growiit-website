import { Wrapper } from '@/components/layout/wrapper';
import styles from './about.module.css';
import { ImageTiles } from '@/components/ui/image-tiles';

export default function About() {
  return (
    <section id='about' className={`${styles.about} landing-section`} data-header-color='black'>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.content}>
            <article>
              <h2>Sobre nosotros</h2>
              <p>
                Somos expertos en brindar soluciones innovadoras para el{' '}
                <strong>desarrollo web</strong>. Con un equipo interno de programadores altamente
                calificados y comprometidos, Growiit se presenta como una opción flexible y
                dinámica, lista para enfrentar retos de cualquier magnitud, aprovechando al máximo
                las tendencias actuales en desarrollo web.
              </p>
            </article>
            <article>
              <h3>Desata el Poder de tu Presencia Digital</h3>
              <p>
                En Growiit, convertimos tus ideas en experiencias digitales extraordinarias.
                Especializados en el desarrollo de páginas web, mantenimiento de plataformas
                digitales y soluciones de software personalizadas , nuestro equipo está comprometido
                a llevar tu visión al mundo en línea. Desde la creación de sitios web intuitivos
                hasta la implementación de soluciones de software a medida, trabajamos contigo para
                alcanzar tus objetivos empresariales y satisfacer las necesidades únicas de tu
                empresa. Únete a nosotros mientras creamos juntos el futuro digital de tu negocio.
              </p>
            </article>
          </div>
          <ImageTiles />
        </div>
      </Wrapper>
    </section>
  );
}
