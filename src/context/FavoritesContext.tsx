import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { Product } from '@/types/Products';
import { useProductData } from '@/lib';

interface FavoritesContextType {
  favorites: number[];
  addFavoriteById: (ProductId: number) => void;
  removeFavoriteById: (ProductId: number) => void;
  getFavoriteProducts: () => Product[];
  isLoading: boolean;
  error: string | null;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoriteContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { Products } = useProductData();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavoriteById = useCallback((ProductId: number) => {
    setLoading(true);
    try {
      setFavorites((prevFavorites) => {
        const updatedFavorites = [...prevFavorites, ProductId];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    } catch (e) {
      setError('Failed to add favorite');
    } finally {
      setLoading(false);
    }
  }, []);

  const removeFavoriteById = useCallback((ProductId: number) => {
    setLoading(true);
    try {
      setFavorites((prevFavorites) => {
        const updatedFavorites = prevFavorites.filter((id) => id !== ProductId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    } catch (e) {
      setError('Failed to remove favorite');
    } finally {
      setLoading(false);
    }
  }, []);

  const getFavoriteProducts = useCallback(() => {
    return Products.filter((product) => favorites.includes(product.id));
  }, [Products, favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavoriteById,
        removeFavoriteById,
        getFavoriteProducts,
        isLoading,
        error,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
