import styles from './tag.module.css';

interface TagsComponentProps {
  as?: 'a' | 'div';
  link: string;
  children: React.ReactNode;
}

export default function Tag({ link, as = 'div', children }: TagsComponentProps) {
  function stopPropagation(event: React.MouseEvent) {
    event.stopPropagation();
  }

  if (as === 'div') return (
    <div className={styles.tag}>
      <span>{children}</span>
    </div>
  )

  return (
    <a href={link} className={styles.tag} onClick={stopPropagation}>
      <span>{children}</span>
    </a>
  );
}
