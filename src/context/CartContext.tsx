import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Product } from '@/types/products';
import { useProductData } from '@/lib';

interface CartContextType {
  cart: { [productId: number]: number };
  addToCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number, quantity: number) => void;
  getCartProducts: () => Product[];
  isLoading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const { products } = useProductData();
  const [cart, setCart] = useState<{ [productId: number]: number }>({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = useCallback((productId: number, quantity: number) => {
    setLoading(true);
    try {
      setCart(prevCart => {
        const updatedCart = { ...prevCart, [productId]: (prevCart[productId] || 0) + quantity };
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      });
    } catch (e) {
      setError('Failed to update cart');
    } finally {
      setLoading(false);
    }
  }, []);

  const removeFromCart = useCallback((productId: number, quantity: number) => {
    setLoading(true);
    try {
      setCart(prevCart => {
        const currentQuantity = prevCart[productId] || 0;
        const updatedQuantity = currentQuantity - quantity;
        if (updatedQuantity > 0) {
          return { ...prevCart, [productId]: updatedQuantity };
        } else {
          const updatedCart = { ...prevCart };
          delete updatedCart[productId];
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return updatedCart;
        }
      });
    } catch (e) {
      setError('Failed to update cart');
    } finally {
      setLoading(false);
    }
  }, []);

  const getCartProducts = useCallback(() => {
    return products.filter(product => cart.hasOwnProperty(product.id));
  }, [products, cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartProducts, isLoading, error }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
};
