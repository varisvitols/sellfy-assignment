import { useContext, useEffect } from 'react';
import ProductContext from './context/ProductContext';
import { ProductPage } from './components/ProductPage';
import styles from './App.module.css';
import AppContext from './context/AppContext';

function App() {
  const { products, setProducts, error } = useContext(ProductContext);
  const { bodyOverflowHidden } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = bodyOverflowHidden ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = '';
    };
  }, [bodyOverflowHidden]);

  return (
    <div className={styles.container}>
      {error ? (
        <div>An Error has occurred: couldn't fetch products.</div>
      ) : (
        <ProductPage products={products} setProducts={setProducts} />
      )}
    </div>
  );
}

export default App;
