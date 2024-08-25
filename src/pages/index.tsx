import React, { useEffect } from 'react';
import router from 'next/router';
import { useProductActions } from '../redux/reducers/products/productStateManagement';
import { LoadingSpinner, ProductCard, ErrorModal } from '@/components';

import { useProductData } from '@/lib';
import { LoaderContainer, ProductGrid, ProductListContainer } from '@/styled-components/product';

const Home = () => {
  const { initializeProductsState, initializeProductsByPriceState } = useProductActions();

  const { products, error, loading } = useProductData();

  useEffect(() => {
    initializeProductsState();
  }, [initializeProductsState, initializeProductsByPriceState]);

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <>
      {error && <ErrorModal message={error} />}
      {loading ? (
        <LoaderContainer>
          {' '}
          <LoadingSpinner />
        </LoaderContainer>
      ) : (
        <ProductListContainer>
          <ProductGrid>
            {products.map((product:any, index:number) => (
              <ProductCard
                key={index}
                product={product}
                onProductClick={handleProductClick}
              />
            ))}
          </ProductGrid>
        </ProductListContainer>
      )}
    </>
  );
};

export default Home;
