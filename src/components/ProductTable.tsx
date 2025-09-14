import ProductItem from './ProductItem';
import type { Product } from '../types/products';

interface Props {
  products: Product[];
}

export function ProductTable({ products }: Props) {
  const productItems = products.map((product) => {
    return <ProductItem product={product} key={product._id} />;
  });

  return (
    <table>
      <thead>
        <tr>
          <td>Product</td>
          <td className="mobile-hidden">Category</td>
          <td>Price</td>
          <td></td>
        </tr>
      </thead>
      <tbody>{productItems}</tbody>
    </table>
  );
}
