import { Product } from '@/types/products';
import { useState } from 'react';

export const useFilterData = () => {
  const [priceFilter, setPriceFilter] = useState<string>('ALL');
  const [sortMethod, setSortMethod] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const filterProductsByPrice = (products: Product[]) => {
    let filtered = products.filter((product) => {
      if (priceFilter === '10-50')
        return product.price >= 10 && product.price <= 50;
      if (priceFilter === '50-100')
        return product.price > 50 && product.price <= 100;
      if (priceFilter === '100+') return product.price > 100;
      return priceFilter === 'ALL';
    });
    return sortProductsByName(filtered);
  };

  const sortProductsByName = (products: Product[]) => {
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

  const updatePriceFilter = (filter: string) => setPriceFilter(filter);
  const updateSortMethod = (method: string) => setSortMethod(method);

  return {
    priceFilter,
    sortMethod,
    filterProductsByPrice,
    updatePriceFilter,
    updateSortMethod,
    selectedCategory,
    selectedProduct,
    setSelectedCategory,
    setSelectedProduct,
    isCategoryDropdownOpen,
    setIsCategoryDropdownOpen,
  };
};
