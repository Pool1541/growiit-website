/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './aditional-services.module.css'

const services = [
  {
    title: 'Diseño web responsivo',
    description:
      'Creamos sitios web que se adaptan a cualquier dispositivo, garantizando una experiencia de usuario fluida en móviles, tabletas y computadoras de escritorio.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/responsive-design.png',
  },
  {
    title: 'Desarrollo web a medida:',
    description:
      'Creamos tu sitio web desde cero, utilizando código personalizado para ofrecete una solución única y adaptada a tus necesidades.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/web-development.png',
  },
  {
    title: 'Optimización para motores de búsqueda (SEO):',
    description:
      'Mejoramos la visibilidad de tu sitio web en los motores de búsqueda, aumentando la posibilidad de atraer más visitantes y convertirlos en clientes.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/search-engine-optimization.png',
  },
  {
    title: 'Diseño UX/UI:',
    description:
      'Creamos interfaces intuitivas y atractivas , diseñadas para ofrecer la mejor experiencia de usuario, facilitando la navegación y aumentando la satisfacción de tus visitantes.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/ux-ui.png',
  },
  {
    title: 'Hosting rápido y seguro:',
    description:
      'Ofrecemos servicios de hosting de alta calidad, garantizando la disponibilidad, velocidad y seguridad de tu sitio web, además de un soporte técnico especializado.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/hosting-server.png',
  },
  {
    title: 'Analítica web:',
    description:
      'Monitorea el comportamiento de los usuarios y el rendimiento de tu sitio web con la integración de herramientas de analítica web, como Google Analytics.',
    icon: 'https://d1ssfwckvhk5up.cloudfront.net/public/web-analytics.png',
  },
];

export default function AditionalServices() {
  return (
    <div className={styles['aditional-services']}>
      <h2>Nuestros servicios</h2>
      <p>
        Ofrecemos soluciones integrales que transforman tu presencia en línea y potencian la
        interacción con tus usuarios. Nuestro enfoque se basa en la personalización, la calidad y la
        innovación, asegurando que cada proyecto se adapte a las necesidades específicas de tu
        negocio.
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
  )
}