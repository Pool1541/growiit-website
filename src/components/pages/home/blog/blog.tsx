import { Wrapper } from '@/components/layout/wrapper';
import styles from './blog.module.css';
import { BlogCard } from '@/components/ui';

const articles: BlogArticleInterface[] = [
  {
    title: 'Cómo usar Figma para mejorar tu flujo de trabajo',
    description: 'En este artículo te enseñamos cómo usar Figma para mejorar tu flujo de trabajo y ser más eficiente en tus proyectos de diseño.',
    image: 'https://miro.medium.com/v2/resize:fit:7680/1*ZsSn_PYaNKsC3NfCy8S_fA.png',
    slug: 'como-usar-figma-para-mejorar-tu-flujo-de-trabajo',
    author: 'Pool Llerena',
    date: '2023-01-01',
    tags: [{ tag: 'Diseño web', slug: 'diseno-web' }, { tag: 'UX/UI', slug: 'uxui' }, { tag: 'Javascript', slug: 'javascript' }],
  },
  {
    title: 'La inteligencia artificial y el futuro de la humanidad',
    description: 'Openai y el futuro de la humanidad. En este artículo te contamos cómo la inteligencia artificial está cambiando el mundo.Openai y el futuro de la humanidad. En este artículo te contamos cómo la inteligencia artificial está cambiando el mundo.',
    image: 'https://www.lanacion.com.ar/resizer/v2/microsoft-publico-que-la-tecnologia-de-la-HIJSKSYHGZCE5DOWS3NEWVJ7AE.jpg?auth=4de64c41c842b40e40e6d4d41422cb1ba00b6317ea3514aa86b658af51f6a117&width=420&height=280&quality=70&smart=true',
    slug: 'la-inteligencia-artificial-y-el-futuro-de-la-humanidad',
    author: 'Jhon Doe',
    date: '2023-02-01',
    tags: [{ tag: 'IA', slug: 'ia' }, { tag: 'Openai', slug: 'openai' }],
  },
  {
    title: 'Google search console y SEO',
    description: 'Google ha cambiado su algoritmo de búsqueda. En este artículo te contamos cómo usar Google Search Console para mejorar tu SEO.',
    image: 'https://tyroneromero.com/wp-content/webp-express/webp-images/uploads/2022/11/Google-Search-Console-gsc.jpg.webp',
    slug: 'google-search-console-y-seo',
    author: 'Jenna Doe',
    date: '2023-03-01',
    tags: [{ tag: 'Google', slug: 'google' }, { tag: 'SEO', slug: 'seo' }, { tag: 'Marketing', slug: 'marketing' }],
  },
  {
    title: 'Docker y Nodejs para DevOps',
    description: 'Docker y Nodejs para DevOps. En este artículo te enseñamos cómo usar Docker y Nodejs para mejorar tu flujo de trabajo en DevOps.',
    image: 'https://emergingindiagroup.com/wp-content/uploads/2024/05/Picture1.webp',
    slug: 'docker-y-nodejs-para-devops',
    author: 'Pool Llerena',
    date: '2023-04-01',
    tags: [{ tag: 'Docker', slug: 'docker' }, { tag: 'Nodejs', slug: 'nodejs' }, { tag: 'DevOps', slug: 'devops' }],
  },
];

export default function Blog() {
  return (
    <section id='blog' className={`${styles.blog} landing-section`} data-header-color='black'>
      <Wrapper>
        <div className={`${styles['blog-header']}`}>
          <h2>Explora nuestro blog</h2>
          <p>
            Descubre nuestras últimas publicaciones y aprende más sobre lo que está ocurriendo en la
            industria.
          </p>
        </div>
        <div className={`${styles['cards-container']}`}>
          {
            articles.map((article) => (
              <BlogCard {...article} key={article.title}/>
            ))
          }
        </div>
      </Wrapper>
    </section>
  );
}
