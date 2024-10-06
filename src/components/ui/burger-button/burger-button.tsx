import styles from './burguer-button.module.css';

interface Props {
  isActive: boolean;
  handleShowMenu: () => void;
}

export default function BurgerButton({ isActive, handleShowMenu }: Props) {
  const activeClass = isActive ? styles.active : '';
  
  return (
    <button className={`${styles['burguer-button']} ${activeClass}`} onClick={handleShowMenu}>
      <div className='burguer-line'></div>
      <div className='burguer-line'></div>
      <div className='burguer-line'></div>
    </button>
  );
}
