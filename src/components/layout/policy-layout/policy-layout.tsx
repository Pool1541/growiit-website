import { Wrapper } from '../wrapper';
import styles from './policy-layout.module.css';

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles['policy-page']}>
      <Wrapper>
        <section className={`${styles.container} landing-section`} data-header-color='white'>{children}</section>
      </Wrapper>
    </main>
  );
}
