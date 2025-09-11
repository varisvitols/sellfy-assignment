import { useContext } from 'react';
import ProductContext from './context/ProductContext';

function App() {
  const { products, setProducts, error } = useContext(ProductContext);

  console.log('products', products);

  return (
    <>
      <p>Hello, World!</p>
    </>
  );
}

export default App;
