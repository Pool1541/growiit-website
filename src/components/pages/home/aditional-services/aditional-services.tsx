/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Wrapper } from '@/components/layout';
import { Blurry, Title  } from '@/components/ui';
import styles from './aditional-services.module.css';

const services = [
  {
    title: 'Diseños adaptables para todos los dispositivos:',
    description:
      'Desarrollamos sitios web que garantizan una experiencia impecable en móviles, tabletas y computadoras. Asegura la mejor navegación para tus usuarios, sin importar el dispositivo.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/responsive-design.png',
  },
  {
    title: 'Desarrollo web personalizado desde cero:',
    description:
      'Diseñamos y construimos tu sitio web con código único, sin plantillas ni CMS. Ofrecemos soluciones exclusivas que se adaptan perfectamente a las necesidades de tu negocio.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/web-development.png',
  },
  {
    title: 'Mejora tu visibilidad con SEO avanzado:',
    description:
      'Potenciamos tu presencia en línea con estrategias de SEO que posicionan tu sitio web en los primeros lugares de búsqueda. Atrae más tráfico y aumenta tus conversiones.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/search-engine-optimization.png',
  },
  {
    title: 'Interfaces intuitivas y atractivas:',
    description:
      'Creamos experiencias visuales y funcionales que cautivan a tus usuarios. Diseñamos interfaces que combinan estética y funcionalidad para una navegación fluida.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/ux-ui.png',
  },
  {
    title: 'Hosting de alta velocidad y máxima seguridad:',
    description:
      'Proporcionamos hosting confiable que garantiza disponibilidad constante, tiempos de carga óptimos y seguridad avanzada. Incluye soporte técnico especializado.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/hosting-server.png',
  },
  {
    title: 'Datos que impulsan decisiones inteligentes:',
    description:
      'Integramos herramientas como Google Analytics para analizar el comportamiento de tus usuarios y optimizar el rendimiento de tu sitio web con información detallada.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/web-analytics.png',
  },
];

export default function AditionalServices() {
  return (
    <section id='aditional-services' className='landing-section' data-header-color='black'>
      <Wrapper style={{ position: 'relative'}}>
        <div className={styles['aditional-services']}>
          <Title as='h2'>Soluciones digitales personalizadas para tu negocio</Title>
          <p>
            Descubre nuestros servicios diseñados para transformar tu presencia en línea. Desde
            páginas web a medida y SEO hasta diseño UX/UI y hosting seguro, ofrecemos soluciones
            integrales que combinan creatividad, escalabilidad y tecnología de vanguardia para que
            tu negocio alcance nuevas alturas.
          </p>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                {React.isValidElement(service.icon) ? (
                  service.icon
                ) : (
                  <img src={service.icon} alt={service.title} loading='lazy' />
                )}
                <p>
                  <span>{service.title}</span>
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Blurry bottom />
      </Wrapper>
    </section>
  );
}
