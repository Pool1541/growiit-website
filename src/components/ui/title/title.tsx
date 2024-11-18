import clsx from 'clsx';
import styles from './title.module.css';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
}

export default function Title({ children, className, as = 'h1', size = 'medium', ...props }: TitleProps) {
  const Tag = as;

  return (
    <Tag className={clsx(styles.title, className, {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
      [styles.xlarge]: size === 'extra-large',
    })} {...props}>
      {children}
    </Tag>
  );
}
