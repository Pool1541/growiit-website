import Link from "next/link";
import { Wrapper } from "@/components/layout/wrapper";
import styles from './not-found.module.css';


export default function Page() {
  return (
      <div className={styles['not-found']}>
        <Wrapper>
        <div className={styles.container}>
          <h1>404</h1>
          <h2>Página no encontrada</h2>
          <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
          <Link href="/">
          <span>Volver al inicio</span></Link>
        </div>
        </Wrapper>
      </div>

  )
}