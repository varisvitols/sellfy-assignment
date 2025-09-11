import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App.tsx';
import ProductContextProvider from './context/ProductContext/ProductContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </StrictMode>
);
