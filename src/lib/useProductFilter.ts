import { Product } from "@/types/products";
import { useState } from "react";




const [priceFilter, setPriceFilter] = useState('ALL');
const [sortMethod, setSortMethod] = useState('');

export const filterProducts = (products: Product[]) => {
    let filtered = products.filter((product: Product) => {
      if (priceFilter === '10-50') return product.price >= 10 && product.price <= 50;
      if (priceFilter === '50-100') return product.price > 50 && product.price <= 100;
      if (priceFilter === '100+') return product.price > 100;
      return priceFilter === 'ALL';
    });
    return sortProducts(filtered);
  };

  export const sortProducts = (products: Product[]) => {
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

