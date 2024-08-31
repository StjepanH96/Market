import React, { useEffect, useState } from 'react';
import { useProductActions } from '../../redux/reducers/products/productStateManagement';
import { ProductCard, ErrorModal } from '@/components';
import { useProductData } from '@/lib';
import { ProductGrid, ProductListContainer } from '@/styled-components/product';
import { Product } from '@/types/products';
import { ProductModal } from '@/components/ProductModal';
import { CategoryDropdown } from '@/components/CategoryDropdown';
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

const Dropdown = styled.select`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: white;
  color: #0070f3;
  border: 2px solid #0070f3;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

const StyledButton =  styled.button`
padding: 0.5rem 1rem;
margin: 0.5rem;
background-color: white;
color: #0070f3;
border: 2px solid #0070f3;
border-radius: 4px;
cursor: pointer;
&:hover {
  background-color: #0056b3;
  color: white;
}
`;

const CategoryPage = () => {
  const { initializeProductsByCategoryState } = useProductActions();
  const {productsByCategory, error, loading } = useProductData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [priceFilter, setPriceFilter] = useState('ALL');
  const [sortMethod, setSortMethod] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      initializeProductsByCategoryState(selectedCategory);
    }
  }, [initializeProductsByCategoryState, selectedCategory]);

  const handleProductClick = (productId: number) => {
    const selected = productsByCategory.find(product => product.id === productId);
    if (selected) {
      setSelectedProduct(selected);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filterProducts = (products: Product[]) => {
    let filtered = products.filter((product: Product) => {
      if (priceFilter === '10-50') return product.price >= 10 && product.price <= 50;
      if (priceFilter === '50-100') return product.price > 50 && product.price <= 100;
      if (priceFilter === '100+') return product.price > 100;
      return priceFilter === 'ALL';
    });
    return sortProducts(filtered);
  };

  const sortProducts = (products: Product[]) => {
    switch (sortMethod) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };
  return (
    <>
      {error && <ErrorModal message={error} />}

      <ProductListContainer>
        <div>
          <Dropdown value={priceFilter} onChange={e => setPriceFilter(e.target.value)}>
            <option value="ALL">All Prices</option>
            <option value="10-50">$10 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100+">$100+</option>
          </Dropdown>

          <Dropdown value={sortMethod} onChange={e => setSortMethod(e.target.value)}>
            <option value="">Sort By</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
          </Dropdown>

          <StyledButton onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}>
            Toggle Categories
          </StyledButton>

          <CategoryDropdown 
            isOpen={isCategoryDropdownOpen} 
            toggleDropdown={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            setSelectedCategory={setSelectedCategory} 
            selectedCategory={selectedCategory} 
          />
        </div>

        {/* Display filtered products */}
        {filterProducts(productsByCategory).length === 0 ? (
          <NoProductsMessage>
            No products available for this category or price range.
          </NoProductsMessage>
        ) : (
          <ProductGrid>
            {filterProducts(productsByCategory).map((product: Product, index: number) => (
              <ProductCard
                key={index}
                product={product}
                onProductClick={() => handleProductClick(product.id)}
              />
            ))}
          </ProductGrid>
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

export default CategoryPage;
