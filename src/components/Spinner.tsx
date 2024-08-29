import React from 'react';
import styled from 'styled-components';

// Definišemo interfejs koji prihvata loading prop
interface LoadingSpinnerProps {
  loading: boolean;
}

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

// LoadingSpinner sada prima loading prop
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loading }) => {
  return loading ? <StyledLoadingSpinner /> : null;
};