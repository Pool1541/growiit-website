import { Wrapper } from "@/components/layout/wrapper";
import { ArrowToBottom } from "@/components/icons";
import styles from './explore.module.css'
import { HorizontalCard } from "../horizontal-card";
import { RecentCard } from "../recent-card";

const articles: BlogArticleInterface[] = [
  {
    title: 'La inteligencia artificial y el futuro de la humanidad',
    description: 'Openai y el futuro de la humanidad. En este artículo te contamos cómo la inteligencia artificial está cambiando el mundo.Openai y el futuro de la humanidad. En este artículo te contamos cómo la inteligencia artificial está cambiando el mundo.',
    image: {
      alt: 'Openai y el futuro de la humanidad',
      src: 'https://www.lanacion.com.ar/resizer/v2/microsoft-publico-que-la-tecnologia-de-la-HIJSKSYHGZCE5DOWS3NEWVJ7AE.jpg?auth=4de64c41c842b40e40e6d4d41422cb1ba00b6317ea3514aa86b658af51f6a117&width=420&height=280&quality=70&smart=true'
    },
    slug: 'la-inteligencia-artificial-y-el-futuro-de-la-humanidad',
    author: 'Jhon Doe',
    date: '2023-02-01',
    tags: [{ tag: 'IA', slug: 'ia' }, { tag: 'Openai', slug: 'openai' }],
    color: '#D8ECF7'
  },
  {
    title: 'Cómo usar Figma para mejorar tu flujo de trabajo',
    description: 'En este artículo te enseñamos cómo usar Figma para mejorar tu flujo de trabajo y ser más eficiente en tus proyectos de diseño.En este artículo te enseñamos cómo usar Figma para mejorar tu flujo de trabajo y ser más eficiente en tus proyectos de diseño.',
    image: {
      alt: 'Cómo usar Figma para mejorar tu flujo de trabajo',
      src: 'https://miro.medium.com/v2/resize:fit:7680/1*ZsSn_PYaNKsC3NfCy8S_fA.png'
    },
    slug: 'como-usar-figma-para-mejorar-tu-flujo-de-trabajo',
    author: 'Pool Llerena',
    date: '2023-01-01',
    tags: [{ tag: 'Diseño web', slug: 'diseno-web' }, { tag: 'UX/UI', slug: 'uxui' }, { tag: 'Javascript', slug: 'javascript' }],
    color: '#DFFFE9'
  },
  {
    title: 'Google search console y SEO',
    description: 'Google ha cambiado su algoritmo de búsqueda. En este artículo te contamos cómo usar Google Search Console para mejorar tu SEO.',
    image: {
      alt: 'Google search console y SEO',
      src: 'https://tyroneromero.com/wp-content/webp-express/webp-images/uploads/2022/11/Google-Search-Console-gsc.jpg.webp'
    },
    slug: 'google-search-console-y-seo',
    author: 'Jenna Doe',
    date: '2023-03-01',
    tags: [{ tag: 'Google', slug: 'google' }, { tag: 'SEO', slug: 'seo' }, { tag: 'Marketing', slug: 'marketing' }],
    color: '#f7e6d8'
  },
  {
    title: 'Docker y Nodejs para DevOps',
    description: 'Docker y Nodejs para DevOps. En este artículo te enseñamos cómo usar Docker y Nodejs para mejorar tu flujo de trabajo en DevOps.',
    image: {
      alt: 'Docker y Nodejs para DevOps',
      src: 'https://emergingindiagroup.com/wp-content/uploads/2024/05/Picture1.webp'
    },
    slug: 'docker-y-nodejs-para-devops',
    author: 'Pool Llerena',
    date: '2023-04-01',
    tags: [{ tag: 'Docker', slug: 'docker' }, { tag: 'Nodejs', slug: 'nodejs' }, { tag: 'DevOps', slug: 'devops' }],
    color: '#F2DFFF'
  },
];

export default function Explore() {
  return (
    <section id='blog' className={`${styles.explore} landing-section`} data-header-color='black'>
      <Wrapper>
        <div className={styles['explore-header']}>
          <h2>Expora más</h2>
          <ArrowToBottom />
        </div>
        <div className={styles['grid-container']}>
            <section className={styles.popular}>
              {
                articles.map((article) => (
                  <HorizontalCard {...article} key={article.slug} />
                ))
              }
            </section>
            <section className={styles.recent}>
              <h2 className={styles['recent-header']}>
                Nuestros últimos artículos
              </h2>
              <div className={styles['recent-cards']}>
                {
                  articles.slice(2, 4).map((article) => (
                    <RecentCard {...article} key={article.slug} />
                  ))
                }
              </div>
            </section>
        </div>
      </Wrapper>
    </section>
  )
}