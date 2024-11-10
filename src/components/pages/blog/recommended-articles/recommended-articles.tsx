import { Wrapper } from '@/components/layout';
import { ArrowToBottom } from '@/components/icons';
import styles from './recommended-articles.module.css';
import { BlogCard } from '@/components/ui';
import getPosts from '@/lib/get-posts';

export default async function RecommendedArticles() {
  const articles = await getPosts();

  return (
    <section className={styles['recommended-articles']}>
      <div className={styles['backdrop']} />
      <Wrapper className={styles.container}>
        <div className={styles.subtitle}>
          <h2>Tal vez te pueda interesar</h2>
          <ArrowToBottom />
        </div>
        <div className={`${styles['cards-container']}`}>
          {articles.map((article) => (
            <BlogCard {...article} key={article.title} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
