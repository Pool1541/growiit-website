import ServiceCard from './service-card'
import { Wrapper } from '@/components/layout/wrapper'
import { Blurry, Title } from '@/components/ui';
import styles from './services.module.css'

const services = [
  {
    title: 'Plan Básico',
    description: 'Lanzamiento digital',
    price: 150,
    features: [
      'Desarrollo de un sitio web con hasta 3 páginas.',
      'Diseño responsivo.',
      'Formulario de contacto.',
      'Optimización SEO básica.',
      'Enlaces a redes sociales y botón de WhatsApp.',
      'Dominio, hosting y SSL.',
      '3 revisiones gratis.',
    ],
    important: false,
  },
  {
    title: 'Plan Estándar',
    description: 'Profesional digital',
    price: 300,
    features: [
      'Incluye todo lo del Plan Básico',
      'Desarrollo de un sitio web con hasta 6 páginas.',
      'Diseño personalizado y profesional adaptado a la identidad de tu marca.',
      'Optimización SEO avanzada.',
      'Carruseles de imágenes y galería de fotos.',
      '6 revisiones gratis',
    ],
    important: true,
  },
  {
    title: 'Plan Premium',
    description: 'Solución a medida',
    price: 500,
    features: [
      'Incluye todo lo del Plan Estándar',
      'Desarrollo de un sitio web hasta 12 páginas.',
      'Integración de Google Analytics',
      'Integración de un blog para la publicación de contenido relevante y noticias',
      '10 revisiones gratis',
    ],
    important: false,
  },
];

export default function Services() {
  return (
    <section id='services' className={`${styles.services} landing-section`} data-header-color='black'>
      <Wrapper small>
        <div className={styles.header}>
          <Title as='h2'>Planes diseñados para crecer contigo</Title>
          <p>
            Nuestros planes flexibles están pensados para adaptarse a empresas de todos los tamaños. Desde sitios web básicos hasta desarrollos personalizados, ofrecemos opciones que garantizan escalabilidad, eficacia y resultados sobresalientes.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
              <ServiceCard key={service.title} important={service.important} service={service} />
            ))}
        </div>
      </Wrapper>
      <Blurry  />
    </section>
  )
}