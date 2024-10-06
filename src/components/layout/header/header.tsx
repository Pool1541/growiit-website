'use client';
import { useRef, useState } from 'react';
import { useLockedBody, useScroll } from '@/hooks';
import { BurgerButton } from '@/components/ui/burger-button';
import { Wrapper } from '../wrapper';
import styles from './header.module.css'

export default function Header() {
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
            <span>LOGO</span>
          </div>
          <nav className={`${styles.headerNav} ${isActive}`}>
          <ul>
              <li>
                <a href='#' title='Ir a la sección de Inicio' onClick={hiddenMenu}>
                  Inicio
                </a>
              </li>
              <li>
                <a href='#about' title='Ir a la sección Sobre nosotros' onClick={hiddenMenu}>
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  title='Ir a la sección de Planes y servicios'
                  onClick={hiddenMenu}>
                  Planes y servicios
                </a>
              </li>
              <li>
                <a href='#contact' title='Ir a la sección de Contacto' onClick={hiddenMenu}>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <BurgerButton isActive={toggleMenu} handleShowMenu={showMenu} />
        </div>
      </Wrapper>
    </header>
  )
}