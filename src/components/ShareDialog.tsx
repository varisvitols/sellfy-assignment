import styles from './ShareDialog.module.css';
import type { Product } from '../types/products';
import Button from './Button';
import { copyToClipboard, fbShare, tweet } from '../utils/share';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FaCopy } from 'react-icons/fa6';

interface Props {
  product: Product | null;
}

export default function ShareDialog({ product }: Props) {
  if (!product) return null;

  return (
    <div className={styles['share-dialog']}>
      <h3 className={styles.heading}>Share your product!</h3>
      <div className={styles.product}>
        <div className={styles.image}>
          <img src={product.image_url} alt={product.name} />
        </div>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.description}>{product.description}</div>
      </div>
      <div className={styles.buttons}>
        <Button
          icon={<FaFacebook />}
          color="#1877F2"
          onClick={() => fbShare(product.url)}
        >
          Share
        </Button>
        <Button
          icon={<FaTwitter />}
          color="#1DA1F2"
          onClick={() => tweet(product.url)}
        >
          Tweet
        </Button>
        <Button icon={<FaCopy />} onClick={() => copyToClipboard(product.url)}>
          Copy link
        </Button>
      </div>
    </div>
  );
}
