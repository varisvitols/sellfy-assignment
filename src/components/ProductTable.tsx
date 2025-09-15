import ProductItem from './ProductItem';
import type { Product } from '../types/products';
import { useRef, useState } from 'react';
import OptionsMenu from './OptionsMenu';
import useClickAway from '../hooks/useClickAway';

interface Props {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export function ProductTable({ products, setProducts }: Props) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [optionsMenuPosition, setOptionsMenuPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  const productItems = products.map((product) => {
    return (
      <ProductItem
        product={product}
        key={product._id}
        onOptionsClick={openOptionsMenu}
      />
    );
  });

  function openOptionsMenu(
    productId: string,
    clientX: number,
    clientY: number
  ) {
    setSelectedProductId(productId);
    setOptionsMenuPosition({ x: clientX, y: clientY });
  }

  function handleShare() {
    console.log('Share product:', selectedProductId);
  }

  function handleDelete() {
    const updatedProducts = products.filter(
      (product: Product) => product._id !== selectedProductId
    );
    setProducts(updatedProducts);
    setSelectedProductId(null);
  }

  function closeOptionsMenu() {
    setOptionsMenuPosition(null);
  }

  useClickAway(tableRef, closeOptionsMenu);

  return (
    <div ref={tableRef}>
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
      {selectedProductId && optionsMenuPosition && (
        <OptionsMenu
          onShareClick={handleShare}
          onDeleteClick={handleDelete}
          position={optionsMenuPosition}
        />
      )}
    </div>
  );
}
