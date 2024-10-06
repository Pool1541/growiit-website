import styles from './wrapper.module.css'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  small?: boolean;
}

export default function Wrapper({ children, as, small, ...props }: Props) {
  const Component = as || 'div';
  const smallClass = small ? styles.small : '' ;

  return (
    <Component {...props} className={`${styles.wrapper} ${smallClass}`} >
      { children }
    </Component>
  )
}