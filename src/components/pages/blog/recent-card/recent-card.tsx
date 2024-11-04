/* eslint-disable @next/next/no-img-element */
import styles from './recent-card.module.css';
import { MetadataLabel, Tag } from '@/components/ui';
import { CalendarIcon } from '@/components/icons';

export default function RecentCard({
  title,
  description,
  image,
  date,
  tags = [],
  slug,
}: BlogArticleInterface) {
  const articleLink = `/blog/${slug}`;

  return (
    <article className={styles['recent-card']}>
      <div className={styles['image-container']}>
        <a href={articleLink}>
          <img src={image.src} alt={image.alt} />
        </a>
      </div>
      <div className={styles.metadata}>
        <MetadataLabel icon={<CalendarIcon />} size='medium'>
          {date}
        </MetadataLabel>
      </div>
      <a href={articleLink}>
        <h3>{title}</h3>
      </a>
      <p>{description}</p>
      <div className={styles.tags}>
        {tags.map(({ tag, slug }) => (
          <Tag link={`/blog/tag/${slug}`} key={slug}>
            {tag}
          </Tag>
        ))}
      </div>
    </article>
  );
}
