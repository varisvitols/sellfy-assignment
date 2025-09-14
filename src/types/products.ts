export interface Product {
  _id: string;
  price: number;
  name: string;
  description: string;
  currency: string;
  category: string;
  url: string;
  image_url: string;
}

export interface ProductsResponse {
  data: Product[];
  pagination: {
    page: number;
    total_items: number;
    total_pages: number;
  };
}
