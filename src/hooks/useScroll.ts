import { useEffect, useState, useRef } from "react";
import styles from '@/components/layout/header/header.module.css';

export default function useScroll(ref: React.RefObject<HTMLElement>) {
  const [scroll, setScroll] = useState(0);
  const scrollRef = useRef(scroll); // Ref para mantener el valor del scroll sin renderizar el componente

  // Actualiza el valor de la referencia sin causar renders
  const updateScroll = (currentScroll: number) => {
    scrollRef.current = currentScroll;
    setScroll(currentScroll);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      const header = ref.current;

      if (currentScroll > scrollRef.current && header) {
        updateScroll(currentScroll);
        if (!header.classList.contains(styles.hidden)) header.classList.add(styles.hidden);
      } else {
        updateScroll(currentScroll);
        if (header && header.classList.contains(styles.hidden)) header.classList.remove(styles.hidden);
      }

      if (header) {
        const burguerLines = document.querySelectorAll<HTMLElement>('.burguer-line');
        const landingSections = document.querySelectorAll('.landing-section');

        landingSections.forEach((section) => {
          const height = section.getBoundingClientRect().top;

          if (height <= 0) {
            const color = section.getAttribute('data-header-color')!;
            header.style.color = color;
            header.style.fill = color;
            burguerLines.forEach((line) => (line.style.background = color));
          }
        });
      }
    };
    
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll); // Limpia el listener cuando el componente se desmonta
  }, [ref]); // Solo se ejecuta una vez o cuando cambia el ref

  return { scroll };
}