import { useEffect } from 'react';
import { fetchProducts } from './api/productApi';

function App() {
  useEffect(() => {
    fetchProducts().then((products) => console.log('products', products));
  }, []);

  return (
    <>
      <p>Hello, World!</p>
    </>
  );
}

export default App;
