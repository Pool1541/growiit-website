/* eslint-disable @next/next/no-img-element */
import styles from './horizontal-card.module.css';
import { MetadataLabel, Tag } from '@/components/ui';
import { AvatarIcon, CalendarIcon } from '@/components/icons';
import { GenerateCssColorVariable } from '@/lib';

export default function HorizontalCard({ title, description, image, author, date, tags = [], slug, color }: BlogArticleInterface) {
  const articleLink = `/blog/${slug}`;
  const style = GenerateCssColorVariable('--custom-dark-color', color)

  return (
    <article className={styles['horizontal-card']} style={style}>
      <div className={styles['image-container']}>
        <a href={articleLink}>
          <img src={image.src} alt={image.alt} />
        </a>
      </div>
      <div className={styles.content}>
        <div className={styles.metadata}>
          <MetadataLabel icon={<AvatarIcon />} size='medium'>
            { author }
          </MetadataLabel>
          <MetadataLabel icon={<CalendarIcon />} size='medium'>
            { date }
          </MetadataLabel>
        </div>
        <a href={articleLink}>
          <h3>{ title }</h3>
        </a>
        <p>
          { description }
        </p>
        <div className={styles.tags}>
          {
            tags.map(({ tag, slug }) => (
              <Tag link={`/blog/tag/${slug}`} key={slug}>{ tag }</Tag>
            ))
          }
        </div>
      </div>
    </article>
  )
}