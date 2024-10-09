import styles from './blurry.module.css';

export default function Blurry({ bottom }: { bottom?: boolean } = {bottom: false}) {
  const getClass = (bottom: boolean) => {
    return bottom ? styles.bottom : '';
  }

  return (
    <div className={`${styles.blurry} ${getClass(bottom!)}`}>
      <div className={`${getClass(bottom!)}`}></div>
    </div>
  );
}
