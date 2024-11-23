/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { MetadataLabel, Tag } from '@/components/ui';
import { CalendarIcon } from '@/components/icons';
import { GenerateCssColorVariable } from '@/lib';
import styles from './recent-card.module.css';

export default function RecentCard({
  title,
  description,
  images,
  date,
  tags = [],
  slug,
  color
}: BlogArticleInterface) {
  const articleLink = `/blog/${slug}`;
  const style = GenerateCssColorVariable('--custom-dark-color', color);
  const smallImage = images.find(image => image.type === 'small') || images[0];

  return (
    <article className={styles['recent-card']} style={style}>
      <div className={styles['image-container']}>
        <Link href={articleLink}>
          <img src={smallImage.src} alt={smallImage.alt} loading='lazy'/>
        </Link>
      </div>
      <div className={styles.metadata}>
        <MetadataLabel icon={<CalendarIcon />} size='medium'>
          {date}
        </MetadataLabel>
      </div>
      <Link href={articleLink}>
        <h3>{title}</h3>
      </Link>
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
