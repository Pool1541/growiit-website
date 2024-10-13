'use client';
import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { useLockedBody, useScroll } from '@/hooks';
import { BurgerButton } from '@/components/ui';
import { Wrapper } from '../wrapper';
import { Growiit } from '@/components/icons';
import styles from './header.module.css'


export default function Header() {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scroll } = useScroll(ref);
  useLockedBody(toggleMenu);

  const headerClass = scroll >= 200 ? styles.scrolled : styles.notScrolled;
  const isActive = toggleMenu ? styles.active : '';

  function showMenu() {
    setToggleMenu(!toggleMenu);
  }

  function hiddenMenu() {
    setToggleMenu(false);
  }
  
  return (
    <header className={`${styles.header} ${headerClass}`} ref={ref}>
      <Wrapper style={{ height: '100%'}}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href={'/'} scroll={pathname !== '/'} title='Logo de Growiit'><Growiit /></Link>
          </div>
          <nav className={`${styles.headerNav} ${isActive}`}>
          <ul>
              <li>
                <Link href='/#' title='Ir a la sección de Inicio' onClick={hiddenMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href='/#about' title='Ir a la sección Sobre nosotros' onClick={hiddenMenu}>
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href='/#services'
                  title='Ir a la sección de Planes y servicios'
                  onClick={hiddenMenu}>
                  Planes y servicios
                </Link>
              </li>
              <li>
                <Link href='/#contact' title='Ir a la sección de Contacto' onClick={hiddenMenu}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <BurgerButton isActive={toggleMenu} handleShowMenu={showMenu} />
        </div>
      </Wrapper>
    </header>
  )
}