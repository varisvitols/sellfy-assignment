import type { Product } from '../types/products';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(
    'https://raw.githubusercontent.com/Sellfy/test-assignment-frontend/refs/heads/master/products.json'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}
