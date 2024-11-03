import clsx from 'clsx';
import styles from './tag.module.css';

interface TagsComponentProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'a' | 'div';
  link: string;
  children: React.ReactNode;
  size?: 'small' | 'medium';
}

export default function Tag({ children, link, as = 'div', className, size = 'small', ...props }: TagsComponentProps) {
  function stopPropagation(event: React.MouseEvent) {
    event.stopPropagation();
  }

  if (as === 'div') return (
    <div className={clsx(styles.tag, className, {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
    })} {...props}>
      <span>{children}</span>
    </div>
  )

  return (
    <a href={link} className={clsx(styles.tag, className)} onClick={stopPropagation}>
      <span>{children}</span>
    </a>
  );
}
