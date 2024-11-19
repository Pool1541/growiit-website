import { Wrapper } from '@/components/layout/wrapper';
import { BlogCard, Title } from '@/components/ui';
import getPosts from '@/lib/get-posts';
import styles from './blog.module.css';

export default async function Blog() {
  const articles = await getPosts();
  
  return (
    <section id='blog' className={`${styles.blog} landing-section`} data-header-color='black'>
      <Wrapper>
        <div className={`${styles['blog-header']}`}>
          <Title as='h2'>Inspírate con nuestro blog</Title>
          <p>
            Explora artículos, consejos y tendencias sobre diseño, desarrollo y tecnología. Mantente actualizado y encuentra ideas para impulsar tu presencia digital.
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
