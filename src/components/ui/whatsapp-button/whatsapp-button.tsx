import { WhatsappIcon } from '@/components/icons'
import { WHATSAPP_NUMBER } from '@/constants'
import styles from './whatsapp-button.module.css'

export default function WhatsappButton() {
  return (
    <a className={styles['whatsapp-button']} href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Hola,%20deseo%20más%20información.`}
    target='_blank'
    rel='noopener noreferrer'>
      <WhatsappIcon />
      <div className={styles.message}>
      <p>¿Necesitas ayuda?</p>
      </div>
    </a>
  )
}