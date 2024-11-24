/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './horizontal-card.module.css';
import { MetadataLabel, Tag } from '@/components/ui';
import { AvatarIcon, CalendarIcon } from '@/components/icons';
import { GenerateCssColorVariable } from '@/lib';

export default function HorizontalCard({ title, description, images, author, date, tags = [], slug, color }: BlogArticleInterface) {
  const articleLink = `/blog/${slug}`;
  const style = GenerateCssColorVariable('--custom-dark-color', color)
  const smallImage = images.find(image => image.type === 'small') || images[0];

  return (
    <article className={styles['horizontal-card']} style={style}>
      <div className={styles['image-container']}>
        <Link href={articleLink}>
          <img src={smallImage.src} alt={smallImage.alt} loading='lazy'/>
        </Link>
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
        <Link href={articleLink}>
          <h3>{ title }</h3>
        </Link>
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