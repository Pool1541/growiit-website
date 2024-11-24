import Script from 'next/script';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getTopViewedPosts } from '@/lib/get-posts';
import type { WithContext, Organization, ItemList } from 'schema-dts';
import type { HeaderVariables } from '@/types';

const headerVariables: HeaderVariables = {
  '--text-color': '#ffffff',
  '--custom-color': '#ed696c',
  '--header-height': '15rem',
  '--navbar-custom-bg': '#9b5bf8'
};

const posts = await getTopViewedPosts();

const organizationJsonLd: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Growiit',
  url: 'https://growiit.com',
  logo: 'https://growiit.com/icon.svg',
  description:
    'Agencia de Diseño Web especializada en crear páginas web a medida, optimizadas para SEO, UX/UI y conversión, enfocadas en potenciar tu negocio online.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contacto@growiit.com',
    contactType: 'Customer Service',
    availableLanguage: 'Spanish',
    areaServed: 'Americas',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Diseño y desarrollo Web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diseño de páginas web',
          description:
            'Creamos tu sitio web desde cero, utilizando código personalizado para ofrecerte una solución única y adaptada a tus necesidades.',
        }
      }, 
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO',
          description:
            'Mejoramos la visibilidad de tu sitio web en los motores de búsqueda, aumentando la posibilidad de atraer más visitantes y convertirlos en clientes.',
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diseño UX/UI',
          description:
            'Creamos interfaces intuitivas y atractivas, diseñadas para ofrecer la mejor experiencia de usuario, facilitando la navegación y aumentando la satisfacción de tus visitantes.',
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Analítica Web',
          description:
            'Monitorea el comportamiento de los usuarios y el rendimiento de tu sitio web con la integración de herramientas de analítica web, como Google Analytics.',
        }
      }
    ]
  }
};

const postsJsonLd: WithContext<ItemList> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Últimos artículos del blog",
  "itemListElement": posts.map((post, index) => ({
   "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "url": `https://growiit.com/blog/${post.slug}`,
        "datePublished": new Date(post.date).toISOString().split('T')[0],
      }
  }))
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id='organization-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <Script
        id='posts-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postsJsonLd),
        }}
      />
      <Header variables={headerVariables} />
      {children}
      <Footer />
    </>
  );
}
