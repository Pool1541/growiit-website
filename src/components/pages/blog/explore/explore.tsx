import { Wrapper } from "@/components/layout/wrapper";
import { ArrowToBottom } from "@/components/icons";
import styles from './explore.module.css'
import { HorizontalCard } from "../horizontal-card";
import { RecentCard } from "../recent-card";
import getPosts from "@/lib/get-posts";

export default async function Explore() {
  const articles = await getPosts();
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