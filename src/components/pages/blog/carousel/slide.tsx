/* eslint-disable @next/next/no-img-element */
import { MetadataLabel, Tag } from '@/components/ui';
import styles from './slide.module.css';
import { AvatarIcon, CalendarIcon } from '@/components/icons';

function renderTitle(title: string) {
  const [firstWord, ...restWords] = title.split(' ');
  return (
    <>
      <strong>{firstWord}</strong> {restWords.join(' ')}
    </>
  );
}

export default function Slide({ title, description, author, date, image, tags }: BlogArticleInterface) {
  return (
    <article className={`${styles.slide} ${styles['out-of-view']}`}>
      <a className={styles['slide-image-wrapper']} href="#" >
        <img className={styles['slide-image']} src={image} alt='' />
      </a>
      <div className={styles.content}>
        <div className={styles.metadata}>
          <MetadataLabel icon={<AvatarIcon />} size='medium'>
            { author }
          </MetadataLabel>
          <MetadataLabel icon={<CalendarIcon />} size='medium'>
            { date }
          </MetadataLabel>
        </div>
        <a href="#" className={styles.title}>
          <h1>{renderTitle(title)}</h1>
        </a>
        <p>
          { description }
        </p>
        <div className={styles.tags}>
          {
            tags.map(tag => (
              <Tag key={tag.slug} link='#' size='medium'>{ tag.tag }</Tag>
            ))
          }
        </div>
      </div>
    </article>
  );
}