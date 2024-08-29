import React, { useEffect, useState, useRef } from 'react';
import { useProductActions } from '../../redux/reducers/products/productStateManagement';
import { LoadingSpinner, ProductCard, ErrorModal } from '@/components';
import { useProductData } from '@/lib';
import { LoaderContainer, ProductGrid, ProductListContainer } from '@/styled-components/product';
import { Product } from '@/types/products'; 
import { ProductModal } from '@/components/ProductModal';

const Home = () => {
  const { initializeProductsState } = useProductActions();
  const { products, error, loading, hasMore } = useProductData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initializeProductsState({ page: 1, limit: 20 }); 
  }, [initializeProductsState]);

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
    const selected = products.find(product => product.id === productId);
    if (selected) {
      setSelectedProduct(selected);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {error && <ErrorModal message={error} />}
      <ProductListContainer>
        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onProductClick={() => handleProductClick(product.id)}
            />
          ))}
        </ProductGrid>
        {!hasMore && (
          <div style={{ padding: "20px", textAlign: "center" }}>
            {"A total of " + products.length + " products have been loaded."}
          </div>
        )}
        {hasMore && (
          <LoaderContainer ref={loaderRef}>
            <LoadingSpinner loading={loading}/>
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