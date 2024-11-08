import styles from './article.module.css'

export default function Article({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.article}>
      <div className={styles.content}>
        {
          children
        }
      </div>
    </section>
  )
}