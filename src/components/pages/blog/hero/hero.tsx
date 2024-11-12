/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import Link from 'next/link';
import { MetadataLabel, Tag } from '@/components/ui';
import { AvatarIcon, CalendarIcon } from '@/components/icons';
import styles from './hero.module.css';

interface HeroProps extends BlogArticleInterface {
  initialOpacity?: boolean;
  className?: string;
  noAnchors?: boolean;
}

function renderTitle(title: string) {
  const [firstWord, ...restWords] = title.split(' ');
  return (
    <>
      <strong>{firstWord}</strong> {restWords.join(' ')}
    </>
  );
}

export default function Hero({ title, description, author, date, image, tags, slug,  initialOpacity, className, noAnchors = false  }: HeroProps) {
  const articleLink = `/blog/${slug}`;
  const CustomTag = noAnchors ? 'div' : Link;

  return (
    <article className={clsx(styles.hero, className, { [styles['out-of-view']]: initialOpacity, [styles['no-anchors']]: noAnchors })}>
      <CustomTag className={styles['hero-image-wrapper']} href={articleLink} >
        <img className={styles['hero-image']} src={image.src} alt={image.alt} />
      </CustomTag>
      <div className={styles.content}>
        <div className={styles.metadata}>
          <MetadataLabel icon={<AvatarIcon />} size='medium'>
            { author }
          </MetadataLabel>
          <MetadataLabel icon={<CalendarIcon />} size='medium'>
            { date }
          </MetadataLabel>
        </div>
        <CustomTag href={articleLink} className={styles.title}>
          <h1 className={clsx({[styles["no-anchors"]]: noAnchors})}>{renderTitle(title)}</h1>
        </CustomTag>
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