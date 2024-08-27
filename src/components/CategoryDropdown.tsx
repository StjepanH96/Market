import React, { useState, useMemo, useEffect, useRef } from 'react';
import router from 'next/router';
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from '@/styled-components/DropdownStyles';
import { useProductData } from '@/lib';
import { Category } from '@/types/categories';
import { useProductActions } from '@/redux/reducers/products/productStateManagement';

export const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {  productsCategoryList} = useProductData();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { initializeProductsByCategoryListState } = useProductActions();

  useEffect(() => {
   initializeProductsByCategoryListState();
  }, [initializeProductsByCategoryListState]);

  const handleProductClick = (categoryName: string) => {
    const newRoute = `/product/category/${categoryName}`;
    if (router.asPath !== newRoute) {
      router.push(newRoute);
    }
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
      <DropdownButton onClick={toggleDropdown}>Category</DropdownButton>
      <DropdownContent className={isOpen ? 'show' : ''}>
        {productsCategoryList.length > 0 ? (
          productsCategoryList.map((category:Category, index:number) => (
            <DropdownItem
              key={index}
              onClick={() => handleProductClick(category.name)}
            >
              {category.name}
            </DropdownItem>
          ))
        ) : (
          <DropdownItem>No Categories</DropdownItem>
        )}
      </DropdownContent>
    </DropdownContainer>
  );
};
