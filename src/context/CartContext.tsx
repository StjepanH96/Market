import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Product } from "@/types/products";
import { useProductData } from "@/lib";
import { useAuth } from "./AuthContext";

interface CartContextType {
  cart: { [productId: number]: number };
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number, quantity: number) => void;
  getCartProducts: () => Product[];
  isLoading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const { products } = useProductData();
  const auth = useAuth();
  const [cart, setCart] = useState<{ [productId: number]: number }>({});
  const [storedProducts, setStoredProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const storageKey = auth?.isAnonymous
    ? "guestCart"
    : `userCart_${auth?.token}`;

  useEffect(() => {
    const storedCart = localStorage.getItem(storageKey);
    const storedProductList = localStorage.getItem("storedProducts");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    if (storedProductList) {
      setStoredProducts(JSON.parse(storedProductList));
    }
  }, [storageKey]);

  useEffect(() => {
    if (
      localStorage.getItem("authToken") !== auth?.token ||
      auth?.isAnonymous
    ) {
      localStorage.removeItem("guestCart");
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("userCart_")) {
          localStorage.removeItem(key);
        }
      });
      localStorage.removeItem("storedProducts");

      setCart({});
      setStoredProducts([]);
    }
  }, [auth?.token, auth?.isAnonymous]);

  const addToCart = useCallback(
    (product: Product, quantity: number) => {
      setLoading(true);
      try {
        setCart((prevCart) => {
          const updatedCart = {
            ...prevCart,
            [product.id]: (prevCart[product.id] || 0) + quantity,
          };
          localStorage.setItem(storageKey, JSON.stringify(updatedCart));
          setStoredProducts((prevStoredProducts) => {
            const isProductStored = prevStoredProducts.some(
              (p) => p.id === product.id
            );
            if (!isProductStored) {
              const updatedStoredProducts = [...prevStoredProducts, product];
              localStorage.setItem(
                "storedProducts",
                JSON.stringify(updatedStoredProducts)
              );
              return updatedStoredProducts;
            }
            return prevStoredProducts;
          });
          return updatedCart;
        });
      } catch (e) {
        setError("Failed to update cart");
      } finally {
        setLoading(false);
      }
    },
    [storageKey]
  );

  const removeFromCart = useCallback(
    (productId: number, quantity: number) => {
      setLoading(true);
      try {
        setCart((prevCart) => {
          const currentQuantity = prevCart[productId] || 0;
          const updatedQuantity = currentQuantity - quantity;
          let updatedCart;
          if (updatedQuantity > 0) {
            updatedCart = { ...prevCart, [productId]: updatedQuantity };
          } else {
            updatedCart = { ...prevCart };
            delete updatedCart[productId];
          }
          localStorage.setItem(storageKey, JSON.stringify(updatedCart));
          return updatedCart;
        });
      } catch (e) {
        setError("Failed to update cart");
      } finally {
        setLoading(false);
      }
    },
    [storageKey]
  );

  const getCartProducts = useCallback(() => {
    const cartProductIds = Object.keys(cart).map(Number);
    const availableProducts = products.filter((product) =>
      cartProductIds.includes(product.id)
    );
    const unavailableProducts = storedProducts.filter(
      (product) =>
        cartProductIds.includes(product.id) &&
        !availableProducts.some((p) => p.id === product.id)
    );
    return [...availableProducts, ...unavailableProducts];
  }, [products, cart, storedProducts]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCartProducts,
        isLoading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
