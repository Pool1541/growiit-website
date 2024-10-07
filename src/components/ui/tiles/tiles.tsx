import styles from './tiles.module.css'


type VariantType = 'full' | 'partial' | 'top-to-bottom';

interface Props {
  variant: VariantType;
  right: string;
  top: string;
  width: string;
  height: string;
}

const defaultProps: Props = {
  variant: 'full',
  right: 'auto',
  top: 'auto',
  width: 'auto',
  height: 'auto'
}

export default function Tiles({ variant, right, top, width ,height }: Props = defaultProps) {

  const getVariant = (variant: VariantType) => {
    switch (variant) {
      case 'full':
        return styles.full;
      case 'partial':
        return styles.partial;
      case 'top-to-bottom':
        return styles['top-to-bottom'];
      default:
        return styles.full;
    }
  }

  const style = {
    '--right': right,
    '--top': top,
    '--width': width,
    '--height': height,
  } as React.CSSProperties;

  return (
    <div className={`${styles.tiles} ${getVariant(variant)}`} style={style}></div>
  )
}