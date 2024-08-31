import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CategoryDropdown } from "../CategoryDropdown";
 import { useProductData } from "../../lib/useProductData";
 import { useProductActions } from "../../redux/reducers/products/productStateManagement";

 jest.mock('styled-components', () => jest.requireActual('styled-components'));

 jest.mock("../../lib/useProductData", () => ({
   useProductData: jest.fn(),
 }));
 
 jest.mock("../../redux/reducers/products/productStateManagement", () => ({
   useProductActions: jest.fn(),
 }));
 
 describe('CategoryDropdown', () => {
   const mockToggleDropdown = jest.fn();
   const mockSetSelectedCategory = jest.fn();
 
   beforeEach(() => {
     useProductData.mockReturnValue({
       productsCategoryList: [
         { name: "Electronics" },
         { name: "Books" },
         { name: "Clothing" }
       ]
     });
     useProductActions.mockReturnValue({
       initializeProductsByCategoryListState: jest.fn(),
     });
     jest.clearAllMocks();
   });
 
   it('renders the dropdown and shows categories', () => {
     render(<CategoryDropdown isOpen={true} toggleDropdown={mockToggleDropdown} setSelectedCategory={mockSetSelectedCategory} selectedCategory={null} />);
     expect(screen.getByText("Smartphones")).toBeInTheDocument();
     expect(screen.getByText("Beauty")).toBeInTheDocument();
     expect(screen.getByText("Tablets")).toBeInTheDocument();
   });
 
   it('calls setSelectedCategory and toggleDropdown when a category is clicked', () => {
     render(<CategoryDropdown isOpen={true} toggleDropdown={mockToggleDropdown} setSelectedCategory={mockSetSelectedCategory} selectedCategory={null} />);
     const category = screen.getByText("Electronics");
     userEvent.click(category);
     expect(mockSetSelectedCategory).toHaveBeenCalledWith("Electronics");
     expect(mockToggleDropdown).toHaveBeenCalledTimes(1);
   });
 
   it('closes the dropdown when clicking outside', () => {
     const { container } = render(<CategoryDropdown isOpen={true} toggleDropdown={mockToggleDropdown} setSelectedCategory={mockSetSelectedCategory} selectedCategory={null} />);
     fireEvent.mouseDown(document);
     expect(mockToggleDropdown).toHaveBeenCalledTimes(1);
   });
 
   it('does not render categories when the dropdown is closed', () => {
     render(<CategoryDropdown isOpen={false} toggleDropdown={mockToggleDropdown} setSelectedCategory={mockSetSelectedCategory} selectedCategory={null} />);
     expect(screen.queryByText("Electronics")).not.toBeInTheDocument();
   });
 });
 