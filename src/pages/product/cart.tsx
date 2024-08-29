import React, { useMemo } from 'react';
import router from 'next/router';
import { useCart } from '@/context/CartContext';
import { ErrorModal, LoadingSpinner, ProductCard } from '@/components';
import {
  ProductListContainer,
  ProductGrid,
  NoFavoritesMessage,
} from '@/styled-components/product';

const ProductCart = () => {
  const { getCartProducts, isLoading, error } = useCart();
  const favoriteProducts = useMemo(getCartProducts, [getCartProducts]);

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <>
      {error && <ErrorModal message={error} />}
      {isLoading ? (
        <LoadingSpinner loading={isLoading} />
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
