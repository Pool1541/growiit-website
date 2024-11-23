'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Tag, MetadataLabel } from '@/components/ui';
import { AvatarIcon, CalendarIcon, ChevronRightIcon } from '@/components/icons';
import styles from './blog-card.module.css';
import { useEffect } from 'react';

export default function BlogCard({
  title,
  description,
  images,
  slug,
  author,
  date,
  tags = [],
}: BlogArticleInterface) {
  const router = useRouter();
  const articleLink = `/blog/${slug}`;
  const thumbnail = images.find(image => image.type === "thumbnail") || images[0];
  const largeImage = images.find(image => image.type === "large") || images[0];

  useEffect(() => {
    const img = new Image();
    img.src = largeImage.src;
  }, [largeImage.src]);

  return (
    <div className={styles.card}>
      <div
        className={styles['card-image']}
        style={{
          backgroundImage: `url(${thumbnail?.src})`,
        }}
        onClick={() => router.push(articleLink)}>
        {tags.map(({ tag, slug }) => (
          <Tag key={tag} link={`/blog/tag/${slug}`}>
            {tag}
          </Tag>
        ))}
      </div>
      <div className={styles['card-metadata']}>
        <MetadataLabel icon={<AvatarIcon />}>{author}</MetadataLabel>
        <MetadataLabel icon={<CalendarIcon />}>{date}</MetadataLabel>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles['cta-card-button']}>
        <Link href={articleLink}>
          <span>Leer más</span>
          <ChevronRightIcon />
        </Link>
      </div>
    </div>
  );
}
