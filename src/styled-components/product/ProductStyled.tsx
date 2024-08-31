import { styled } from "styled-components";

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  color: #fff;
`;

export const ProductPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #e2b007;  
`;

export const ProductDiscount = styled.span`
  font-size: 1rem;
  color: #d9534f;  
  margin-left: 10px;
`;

export const ProductRating = styled.span`
  font-size: 0.9rem;
  color: #f0ad4e; 
  margin-top: 5px;
`;

export const ProductStock = styled.span`
  font-size: 0.9rem;
  color: #5cb85c;  
  margin-top: 5px;
`;