import { Wrapper } from '@/components/layout/wrapper';
import { ArrowToBottom } from '@/components/icons';
import { HorizontalCard } from '../horizontal-card';
import { RecentCard } from '../recent-card';
import { getRecentPosts, getTopViewedPosts } from '@/lib/get-posts';
import styles from './explore.module.css';

export default async function Explore() {
  const articles = await getTopViewedPosts();
  const recentArticles = await getRecentPosts();

  return (
    <section id='blog' className={`${styles.explore} landing-section`} data-header-color='black'>
      <Wrapper>
        <div className={styles['explore-header']}>
          <h2>Explora más</h2>
          <ArrowToBottom />
        </div>
        <div className={styles['grid-container']}>
          <section className={styles.popular}>
            {articles.map((article) => (
              <HorizontalCard {...article} key={article.slug} />
            ))}
          </section>
          <section className={styles.recent}>
            <h2 className={styles['recent-header']}>Nuestros últimos artículos</h2>
            <div className={styles['recent-cards']}>
              {recentArticles.map((article) => (
                <RecentCard {...article} key={article.slug} />
              ))}
            </div>
          </section>
        </div>
      </Wrapper>
    </section>
  );
}
