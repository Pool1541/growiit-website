import styles from './wrapper.module.css'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  small?: boolean;
}

export default function Wrapper({ children, as, small, ...props }: Props) {
  const { className = '', ...rest } = props;
  const Component = as || 'div';
  const smallClass = small ? styles.small : '' ;

  return (
    <Component {...rest} className={`${styles.wrapper} ${smallClass} ${className}`} >
      { children }
    </Component>
  )
}