import styles from './article.module.css'

export default function Article({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.article}>
      <article className={styles.content}>
        {
          children
        }
      </article>
    </section>
  )
}