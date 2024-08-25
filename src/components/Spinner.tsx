import React from 'react';
import { styled } from 'styled-components';
import { useProductData } from '@/lib';

export const StyledLoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingSpinner = () => {
  const { loading } = useProductData();

  return loading ? <StyledLoadingSpinner /> : null;
};
