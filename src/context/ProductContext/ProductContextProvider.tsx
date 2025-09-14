import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { ProductContextType } from '.';
import { fetchProducts } from '../../api/productApi';
import type { Product } from '../../types/products';
import ProductContext from '.';

type Props = { children: ReactNode };

export default function ProductContextProvider({ children }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const context: ProductContextType = { products, setProducts, error };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}
