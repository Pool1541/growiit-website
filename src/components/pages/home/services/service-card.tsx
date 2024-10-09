import { CheckIcon } from '@/components/icons';
import styles from './service-card.module.css';

type ServiceType = {
  title: string;
  description: string;
  price: number;
  features: string[];
};

interface Props {
  service: ServiceType;
  important: boolean;
}

const defaultProps: Props = {
  important: false,
  service: {
    title: '',
    description: '',
    price: 0,
    features: [],
  }
}

export default function ServiceCard({ service, important }: Props = defaultProps) {
  const { title, description, price, features } = service;
  const getClassName = (important: boolean) => {
    return important ? styles.important : '';
  }
  
  return (
    <article className={`${styles['service-card']} ${getClassName(important)}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.price}>
        <p>${price}</p> <span>USD</span>
      </div>
      <a href='#contact' title='Recibe más información sobre este plan'>
        <span>Más información</span>
      </a>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <span>
              <CheckIcon />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
