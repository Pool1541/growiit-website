/* eslint-disable @next/next/no-img-element */
import styles from './images-tiles.module.css'

export default function ImageTiles() {
  return (
    <div className={styles['image-tiles']}>
      <div className={styles.column}>
        <div className={styles['image-wrapper']}>
          <img
              src='https://d1ssfwckvhk5up.cloudfront.net/public/tiles-image-2.webp'
              alt='Desarrolladores web planeando un proyecto'
              loading='lazy'
            />
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles['image-wrapper']}>
          <img
              src='https://d1ssfwckvhk5up.cloudfront.net/public/tiles-image-1.webp'
              alt='Desarrolladores web planeando un proyecto'
              loading='lazy'
            />
        </div>
        <div className={styles['image-wrapper']}>
          <img
              src='https://d1ssfwckvhk5up.cloudfront.net/public/tiles-image-3.webp'
              alt='Desarrolladores web planeando un proyecto'
              loading='lazy'
            />
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles['image-wrapper']}>
          <img
              src='https://d1ssfwckvhk5up.cloudfront.net/public/tiles-image-4.webp'
              alt='Desarrolladores web planeando un proyecto'
              loading='lazy'
            />
        </div>
        <div className={styles['image-wrapper']}>
          <img
              src='https://d1ssfwckvhk5up.cloudfront.net/public/tiles-image-5.webp'
              alt='Desarrolladores web planeando un proyecto'
              loading='lazy'
            />
        </div>
      </div>
    </div>
  )
}