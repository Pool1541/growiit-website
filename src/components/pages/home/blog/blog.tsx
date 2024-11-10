import { Wrapper } from '@/components/layout/wrapper';
import { BlogCard } from '@/components/ui';
import getPosts from '@/lib/get-posts';
import styles from './blog.module.css';

export default async function Blog() {
  const articles = await getPosts();
  
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
