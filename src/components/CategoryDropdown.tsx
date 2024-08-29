import React, { useState, useEffect, useRef } from 'react';
import router from 'next/router';
import {
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from '@/styled-components/DropdownStyles';
import { useProductData } from '@/lib';
import { Category } from '@/types/categories';
import { useProductActions } from '@/redux/reducers/products/productStateManagement';

export const CategoryDropdown = ({ isOpen, toggleDropdown }:Any) => {
  const { productsCategoryList } = useProductData();
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
    toggleDropdown(); // zatvaranje dropdowna nakon klika
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      toggleDropdown(); // zatvaranje dropdowna klikom van njega
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
      <DropdownContent className={isOpen ? 'show' : ''}>
        {productsCategoryList.length > 0 ? (
          productsCategoryList.map((category: Category, index: number) => (
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