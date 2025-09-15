import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App.tsx';
import ProductContextProvider from './context/ProductContext/ProductContextProvider.tsx';
import AppContextProvider from './context/AppContext/AppContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </AppContextProvider>
  </StrictMode>
);
