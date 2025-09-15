import type { CurrencyRatesResponse } from '../types/currencyRates';
import type { Product } from '../types/products';
import { decodeHtml } from '../utils/decodeHtml';
import styles from './ProductItem.module.css';
import { FiMoreVertical as OptionsIcon } from 'react-icons/fi';

interface Props {
  product: Product;
  currencyRatesResponse: CurrencyRatesResponse | null;
  onOptionsClick?: (
    productId: string,
    clientX: number,
    clientY: number
  ) => void;
}

export default function ProductItem({
  product,
  currencyRatesResponse,
  onOptionsClick,
}: Props) {
  const { _id, price, name, description, currency, category, url, image_url } =
    product;

  let currencyRate = currencyRatesResponse
    ? currencyRatesResponse.rates[currency]
    : null;
  if (currencyRatesResponse?.base === currency) {
    currencyRate = 1;
  }
  const convertedPrice = currencyRate ? price / currencyRate : null;

  const priceString = convertedPrice
    ? `$${convertedPrice.toFixed(2)}`
    : `${currency} ${price.toFixed(2)}`;

  function handleOptionsButtonClick(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    onOptionsClick?.(_id, event.clientX, event.clientY);
  }

  return (
    <tr className={styles.product}>
      <td data-label="Product">
        <div className={styles.card}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${image_url})` }}
          ></div>
          <div className={styles.text}>
            <div className={styles.name}>{decodeHtml(name)}</div>
            <div className={styles.description}>{decodeHtml(description)}</div>
          </div>
        </div>
      </td>
      <td className="mobile-hidden">
        <strong>{decodeHtml(category)}</strong>
      </td>
      <td>
        <strong>{priceString}</strong>
      </td>
      <td>
        <button
          className={styles['options-button']}
          aria-label="Options"
          onClick={handleOptionsButtonClick}
        >
          <OptionsIcon className={styles['options-icon']} />
        </button>
      </td>
    </tr>
  );
}
