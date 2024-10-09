import { WhatsappIcon } from '@/components/icons'
import styles from './whatsapp-button.module.css'

export default function WhatsappButton() {
  return (
    <a className={styles['whatsapp-button']} href='https://api.whatsapp.com/send?phone=57311 5040128&text=Hola,%20deseo%20más%20información.'
    target='_blank'
    rel='noopener noreferrer'>
      <WhatsappIcon />
      <div className={styles.message}>
      <p>¿Necesitas ayuda?</p>
      </div>
    </a>
  )
}