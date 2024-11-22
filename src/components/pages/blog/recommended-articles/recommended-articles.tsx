import { Wrapper } from '@/components/layout';
import { ArrowToBottom } from '@/components/icons';
import { BlogCard } from '@/components/ui';
import { getRecommendedPosts } from '@/lib/get-posts';
import styles from './recommended-articles.module.css';

interface RecommendedArticlesProps {
  currentArticle: BlogArticleInterface;
}

export default async function RecommendedArticles({ currentArticle }: RecommendedArticlesProps ) {
  const articles = await getRecommendedPosts(currentArticle);

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
