import { createContext } from 'react';
import type { Product } from '../../types/products';
import type { Dispatch, SetStateAction } from 'react';

export type ProductContextType = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  error: Error | null;
};

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

export default ProductContext;
