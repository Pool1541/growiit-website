import styles from './input-group.module.css';

interface Props {
  column?: boolean;
  error?: boolean;
  children: React.ReactNode;
}


export default function InputGroup({ column = false, error = false, children }: Props ) {
  const getClassNames = (column: boolean, error: boolean) => {
    let className = styles['input-group'];
    if (column) className += ` ${styles.column}`;
    if (error) className += ` ${styles.error}`;
    return className;
  };

  return <div className={getClassNames(column, error)}>{children}</div>;
}
