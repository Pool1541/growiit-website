import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './metadata-label.module.css';


interface MetadataLabelProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactElement;
  children: React.ReactNode;
  size?: 'small' | 'medium';
}

export default function MetadataLabel({ children, icon, className, size = "small", ...props }: MetadataLabelProps) {

  return (
    <div className={clsx(styles['metadata-label'], className, {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
    })} {...props}>
      {icon}
      <span>{children}</span>
    </div>
  );
}
