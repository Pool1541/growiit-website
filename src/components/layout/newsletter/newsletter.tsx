import { Wrapper } from '../wrapper';
import styles from './newsletter.module.css';

export default function Newsletter() {
  return (
    <section>
      <Wrapper>
        <div className={styles.newsletter}>
          <div className={styles.caption}>
            <h2>No te pierdas nuestras novedades</h2>
            <p>
              Get all the latest news, blog posts and product updates from Sketch, delivered
              directly to your inbox. We’ll rarely send more than one em.
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles['input-button']}>
              <input type='text' placeholder='Email addresss' />
              <button type='submit'><span>Sign up</span></button>
            </div>
            <div className={styles.checkbox}>
              <input type='checkbox' id='terms' />
              <label htmlFor='terms'>I agree to receive marketing emails from Growiit.</label>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}
