import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import {  AppStore, productsStore } from './store';
import { initializeProducts } from './reducers/products/productSlice';
import {  ProductResponse } from '@/types/products';

interface StoreProviderProps {
  initialProducts: ProductResponse;
  children: React.ReactNode;
}

export default function StoreProvider({
  initialProducts,
  children,
}: StoreProviderProps) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = productsStore;
  }

  useEffect(() => {
    if (storeRef.current) {
      storeRef.current.dispatch(initializeProducts(initialProducts));
    }
  }, [initialProducts]);

  useEffect(() => {
    initializeProducts(initialProducts);
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
