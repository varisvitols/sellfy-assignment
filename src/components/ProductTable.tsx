import ProductItem from './ProductItem';
import type { Product } from '../types/products';
import { useContext, useRef, useState } from 'react';
import OptionsMenu from './OptionsMenu';
import useClickAway from '../hooks/useClickAway';
import Modal from './Modal';
import ShareDialog from './ShareDialog';
import AppContext from '../context/AppContext';

interface Props {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export function ProductTable({ products, setProducts }: Props) {
  const { setBodyOverflowHidden } = useContext(AppContext);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [optionsMenuPosition, setOptionsMenuPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [sharedProduct, setSharedProduct] = useState<Product | null>(null);

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

  function deleteProduct() {
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

  function handleShareClick() {
    console.log('Share product:', selectedProductId);
    const productToShare = products.find(
      (product) => product._id === selectedProductId
    );
    if (productToShare) {
      setSharedProduct(productToShare);
      setIsShareDialogOpen(true);
      setBodyOverflowHidden(true);
    }
    setSelectedProductId(null);
  }

  function handleModalClose() {
    setIsShareDialogOpen(false);
    setBodyOverflowHidden(false);
    setSharedProduct(null);
  }

  return (
    <>
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
            onShareClick={handleShareClick}
            onDeleteClick={deleteProduct}
            position={optionsMenuPosition}
          />
        )}
      </div>
      <Modal
        isOpen={isShareDialogOpen && !!sharedProduct}
        closeModal={handleModalClose}
      >
        <ShareDialog product={sharedProduct} />
      </Modal>
    </>
  );
}
