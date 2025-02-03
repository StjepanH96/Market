

import React, { useEffect, useState, useRef } from 'react';
import { GetServerSideProps } from 'next';
import { useProductActions } from '../../redux/reducers/products/productStateManagement';
import { LoadingSpinner, ProductCard, ErrorModal } from '@/components';
import { useDataState, useProductData } from '@/lib';
import { LoaderContainer, ProductGrid, ProductListContainer } from '@/styled-components/product';
import { ProductModal } from '@/components/ProductModal';
import { fetchProducts } from '../api';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const productsData = await fetchProducts({ limit: 10, skip: 0 });

    return {
      props: {
        products: productsData
      }
    };
  } catch (error) {
    return {
      props: {
        error: 'Failed to load products'
      }
    };
  }
};


const Home = ({ products, error }: { products: any[], error: string }) => {
  const { initializeProductsState } = useProductActions();
  const { products: stateProducts, error: stateError, loading, hasMore } = useProductData();
  const { loaderRef, setCurrentPage, setSelectedProduct, setIsModalOpen, selectedProduct, isModalOpen } = useDataState();

  console.log("heloo");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore]);

  const loadMoreProducts = () => {
    setCurrentPage(current => {
      const nextPage = current + 1;
      initializeProductsState({ page: nextPage, limit: 20 });
      return nextPage;
    });
  };


  const handleProductClick = (productId: number) => {

    const selected = stateProducts.find((product) => product.id === productId);
    if (selected) {
      setSelectedProduct(selected);
      setIsModalOpen(true);
    }
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {error && <ErrorModal message={error} />}
      <ProductListContainer>
        <ProductGrid>
          {stateProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onProductClick={() => handleProductClick(product.id)}
            />
          ))}
        </ProductGrid>
        {!hasMore && (
          <div style={{ padding: "20px", textAlign: "center", color: "#000000" }}>
            {"A total of " + stateProducts.length + " products have been loaded."}
          </div>
        )}
        {hasMore && (
          <LoaderContainer ref={loaderRef}>
            <LoadingSpinner loading={loading} />
          </LoaderContainer>
        )}
      </ProductListContainer>
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          productDetails={selectedProduct}
        />
      )}
    </>
  );
};

export default Home;

