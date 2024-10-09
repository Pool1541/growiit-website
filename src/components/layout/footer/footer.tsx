import { FacebookIcon, InstagramIcon, WhatsappIcon } from '@/components/icons';
import { Wrapper } from '../wrapper';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <nav className={styles.links}>
          <ul>
            <li>
              <a href='#' title='Ir a la sección de inicio'>
                Inicio
              </a>
            </li>
            <li>
              <a href='#about' title='Ir a la sección Sobre nosotros'>
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href='#services' title='Ir a la sección de Planes y servicios'>
                Planes y servicios
              </a>
            </li>
            <li>
              <a href='#contact' title='Ir a la sección de Contacto'>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <nav className={`${styles.links} ${styles.icons}`}>
          <ul>
            <li>
              <a
                href='https://api.whatsapp.com/send?phone=573115040128'
                title='Escríbenos en Whatsapp'
                rel='noopener noreferrer'
                target='_blank'>
                <WhatsappIcon />
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/profile.php?id=61565041050719'
                title='Síguenos en Facebook'
                rel='noopener noreferrer'
                target='_blank'>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/growiit_'
                title='Síguenos en Instagram'
                rel='noopener noreferrer'
                target='_blank'>
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.copyright}>
          <p>Growiit © 2024. Todos los derechos reservados.</p>
        </div>
      </Wrapper>
    </footer>
  );
}
