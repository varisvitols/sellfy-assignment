import { useContext } from 'react';
import ProductContext from './context/ProductContext';
import { ProductTable } from './components/ProductTable';
import styles from './App.module.css';

function App() {
  const { products, setProducts, error } = useContext(ProductContext);

  return (
    <div className={styles.container}>
      <ProductTable products={products} />
    </div>
  );
}

export default App;
