'use client';

import { useRouter } from 'next/navigation';
import { AvatarIcon, CalendarIcon, ChevronRightIcon } from '@/components/icons';
import { Tag, MetadataLabel } from '@/components/ui';
import styles from './blog-card.module.css';

export default function BlogCard({
  title,
  description,
  image,
  slug,
  author,
  date,
  tags = [],
}: BlogArticleInterface) {
  const router = useRouter();
  const articleLink = `/blog/${slug}`;

  return (
    <div className={styles.card}>
      <div
        className={styles['card-image']}
        style={{
          backgroundImage: `url(${image.src})`,
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
        <a href={articleLink}>
          <span>Leer más</span>
          <ChevronRightIcon />
        </a>
      </div>
    </div>
  );
}
