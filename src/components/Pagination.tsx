import React from 'react';
import styled from 'styled-components';

// Define styled components
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  background-color: ${props => props.isActive ? '#007bff' : '#fff'};
  color: ${props => props.isActive ? '#fff' : '#007bff'};
  border: 1px solid #007bff;
  border-radius: 5px; // Rounded corners for better visual
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 123, 255, 0.3);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }
  export const Pagination = ({ totalPages, currentPage, onPageChange }:PaginationProps) => {  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PageButton
          key={page}
          isActive={currentPage === page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};
