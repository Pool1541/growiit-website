import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './title.module.css';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  align?: 'normal' | 'left' | 'center' | 'right';
}

export default function Title({ children, className, as = 'h1', size = 'medium', align = "normal", ...props }: TitleProps) {
  const Tag = as;

  return (
    <Tag className={clsx(styles.title, className, {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
      [styles.xlarge]: size === 'extra-large',
      [styles.left]: align === 'left',
      [styles.center]: align === 'center',
      [styles.right]: align === 'right',
      [styles.normal]: align === 'normal',
    })} {...props}>
      {children}
    </Tag>
  );
}
