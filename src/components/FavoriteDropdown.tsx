import React, { useState, useMemo, useEffect, useRef } from 'react';
import router from 'next/router';
import { useFavorites } from '../context/FavoritesContext';
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from '@/styled-components/FavoriteDropdownStyles';

export const FavoriteDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getProductCart } = useFavorites();
  const favoriteProducts = useMemo(getProductCart, [getProductCart]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>Favorites</DropdownButton>
      <DropdownContent className={isOpen ? 'show' : ''}>
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <DropdownItem
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              {product.title}
            </DropdownItem>
          ))
        ) : (
          <DropdownItem>No favorites added</DropdownItem>
        )}
      </DropdownContent>
    </DropdownContainer>
  );
};
