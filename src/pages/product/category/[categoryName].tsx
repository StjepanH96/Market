import React, { useEffect, useState } from 'react';
import { useProductActions } from '../../../redux/reducers/products/productStateManagement';
import { LoadingSpinner, ProductCard, ErrorModal } from '@/components';
import { useProductData } from '@/lib';
import { LoaderContainer, ProductGrid, ProductListContainer } from '@/styled-components/product';
import { Product } from '@/types/products';
import { ProductModal } from '@/components/ProductModal';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

const NoProductsMessage = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
  background-color: #333;
  padding: 1rem;
  border-radius: 8px;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SortButton = styled(FilterButton)``; 

const CategoryPage = () => {
  const { initializeProductsByCategoryState } = useProductActions();
  const { productsByCategory, products, error, loading } = useProductData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [priceFilter, setPriceFilter] = useState('ALL');
  const [sortMethod, setSortMethod] = useState('');

  const router = useRouter();
  const { categoryName } = router.query;

  useEffect(() => {
    initializeProductsByCategoryState(categoryName);
  }, [initializeProductsByCategoryState, categoryName]);

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

  const filterProducts = (products:any, filter:any) => {
    switch (filter) {
      case '10-50':
        return products.filter((product:any) => product.price >= 10 && product.price <= 50);
      case '50-100':
        return products.filter((product:any) => product.price > 50 && product.price <= 100);
      case '100+':
        return products.filter((product:any) => product.price > 100);
      default:
        return products;
    }
  };

  const sortProducts = (products:any) => {
    switch (sortMethod) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return products;
    }
  };

  const filteredProducts = sortProducts(filterProducts(productsByCategory.products, priceFilter));

  return (
    <>
      {error && <ErrorModal message={error} />}
      {loading ? (
        <LoaderContainer>
          <LoadingSpinner />
        </LoaderContainer>
      ) : (
        <ProductListContainer>
          <div>
            <FilterButton onClick={() => setPriceFilter('10-50')}>$10 - $50</FilterButton>
            <FilterButton onClick={() => setPriceFilter('50-100')}>$50 - $100</FilterButton>
            <FilterButton onClick={() => setPriceFilter('100+')}>$100+</FilterButton>
            <FilterButton onClick={() => setPriceFilter('ALL')}>All Prices</FilterButton>
            <SortButton onClick={() => setSortMethod('price-asc')}>Price Low-High</SortButton>
            <SortButton onClick={() => setSortMethod('price-desc')}>Price High-Low</SortButton>
            <SortButton onClick={() => setSortMethod('name-asc')}>Name A-Z</SortButton>
          </div>
          {filteredProducts.length === 0 ? (
            <NoProductsMessage>No products available for this category or price range.</NoProductsMessage>
          ) : (
            <ProductGrid>
              {filteredProducts.map((product: Product, index: number) => (
                <ProductCard
                  key={index}
                  product={product}
                  onProductClick={() => handleProductClick(product.id)}
                />
              ))}
            </ProductGrid>
          )}
        </ProductListContainer>
      )}

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

export default CategoryPage;
