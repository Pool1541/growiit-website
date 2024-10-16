import { FacebookIcon, InstagramIcon, WhatsappIcon } from '@/components/icons';
import { Wrapper } from '../wrapper';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <nav className={styles.links}>
          <ul>
            <li>
              <Link href='/terminos-y-condiciones' title='Ir a la sección de Términos y condiciones'>
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href='/terminos-del-servicio' title='Ir a la sección de Términos de servicio'>
                Términos de servicio
              </Link>
            </li>
            <li>
              <Link href='/politica-de-privacidad' title='Ir a la sección de Política de privacidad'>
                Política de privacidad
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={`${styles.links} ${styles.icons}`}>
          <ul>
            <li>
              <Link
                href='https://api.whatsapp.com/send?phone=573115040128'
                title='Escríbenos en Whatsapp'
                rel='noopener noreferrer'
                target='_blank'>
                <WhatsappIcon />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.facebook.com/profile.php?id=61565041050719'
                title='Síguenos en Facebook'
                rel='noopener noreferrer'
                target='_blank'>
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.instagram.com/growiit_'
                title='Síguenos en Instagram'
                rel='noopener noreferrer'
                target='_blank'>
                <InstagramIcon />
              </Link>
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
