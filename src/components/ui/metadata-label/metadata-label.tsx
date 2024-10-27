import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './metadata-label.module.css';


interface MetadataLabelProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactElement;
  children: React.ReactNode;
}

export default function MetadataLabel({ children, icon, className, ...props }: MetadataLabelProps) {

  return (
    <div className={clsx(styles['metadata-label'], className)} {...props}>
      {icon}
      <span>{children}</span>
    </div>
  );
}
