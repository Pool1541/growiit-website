/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import Link from 'next/link';
import { MetadataLabel, Tag } from '@/components/ui';
import { AvatarIcon, CalendarIcon } from '@/components/icons';
import styles from './hero.module.css';

interface HeroProps extends BlogArticleInterface {
  initialOpacity?: boolean;
  className?: string;
  asSlide?: boolean;
}

function renderTitle(title: string) {
  const [firstWord, ...restWords] = title.split(' ');
  return (
    <>
      <strong>{firstWord}</strong> {restWords.join(' ')}
    </>
  );
}

export default function Hero({ title, description, author, date, image, tags, slug,  initialOpacity, className, asSlide = false  }: HeroProps) {
  const articleLink = `/blog/${slug}`;
  const CustomTag = asSlide ? Link : 'div';
  const CustomHeading = asSlide ? 'h2' : 'h1';

  return (
    <article className={clsx(styles.hero, className, { [styles['out-of-view']]: initialOpacity, [styles['as-slide']]: !asSlide })}>
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
        <CustomTag href={articleLink} className={styles['title-wrapper']}>
          <CustomHeading className={clsx(styles.title, {[styles["as-slide"]]: !asSlide})}>{renderTitle(title)}</CustomHeading>
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