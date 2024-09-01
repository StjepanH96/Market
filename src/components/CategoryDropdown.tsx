import React, {  useEffect, useRef } from "react";
import {
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from "@/styled-components/";
import { useProductData } from "@/lib";
import { Category } from "@/types/categories";
import { useProductActions } from "@/redux/reducers/products/productStateManagement";
import styled from "@emotion/styled";

type CategoryDropdownProps = {
  isOpen: boolean;
  toggleDropdown: () => void;
  setSelectedCategory: (category: string) => void;
  selectedCategory: string | null;
};

export const CategoryDropdown = ({
  isOpen,
  toggleDropdown,
  setSelectedCategory,
  selectedCategory,
}: CategoryDropdownProps) => {
  const { productsCategoryList } = useProductData();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { initializeProductsByCategoryListState } = useProductActions();

  useEffect(() => {
    initializeProductsByCategoryListState();
  }, [initializeProductsByCategoryListState]);

  const handleProductClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    toggleDropdown();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      toggleDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const StyledDropdownItem = styled(DropdownItem)<{ isSelected: boolean }>`
    background-color: ${(props) => (props.isSelected ? "#ddd" : "transparent")};
    color: ${(props) => (props.isSelected ? "#000" : "#333")};
    &:hover {
      background-color: #ccc;
    }
  `;

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownContent className={isOpen ? "show" : ""}>
        {productsCategoryList.length > 0 ? (
          productsCategoryList.map((category: Category, index: number) => (
            <StyledDropdownItem
              key={index}
              isSelected={category.name === selectedCategory}
              onClick={() => handleProductClick(category.name)}
            >
              {category.name}
            </StyledDropdownItem>
          ))
        ) : (
          <DropdownItem>No Categories</DropdownItem>
        )}
      </DropdownContent>
    </DropdownContainer>
  );
};
