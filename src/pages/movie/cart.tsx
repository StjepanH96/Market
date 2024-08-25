import React, { useMemo } from 'react';
import router from 'next/router';
import { useFavorites } from '@/context/FavoritesContext';
import { ErrorModal, LoadingSpinner, ProductCard } from '@/components';
import {
  ProductListContainer,
  ProductGrid,
  NoFavoritesMessage,
} from '@/styled-components/product';

const ProductCart = () => {
  const { getFavoriteProducts, isLoading, error } = useFavorites();
  const favoriteProducts = useMemo(getFavoriteProducts, [getFavoriteProducts]);

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <>
      {error && <ErrorModal message={error} />}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductListContainer>
          {favoriteProducts.length > 0 ? (
            <ProductGrid>
              {favoriteProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onProductClick={() => handleProductClick(product.id)}
                />
              ))}
            </ProductGrid>
          ) : (
            <NoFavoritesMessage>No favorites added</NoFavoritesMessage>
          )}
        </ProductListContainer>
      )}
    </>
  );
};

export default ProductCart;
