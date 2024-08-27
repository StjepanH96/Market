import React from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface CartProps {
  productId: number;
}

export const StyledButtonCart = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: grey;  // Default color
  z-index: 3;
  transition: color 0.3s;

  &.gold {
    color: gold;  // Color when the item is in the cart
  }
`;

export const Cart = ({ productId }: CartProps) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = !!cart[productId];  // Check if the product is in the cart

  const toggleCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    // Adjust quantity directly here if needed
    if (isInCart) {
      removeFromCart(productId, 1);  // Assume removing one item at a time
    } else {
      addToCart(productId, 1);  // Assume adding one item at a time
    }
  };

  return (
    <StyledButtonCart
      onClick={toggleCart}
      aria-label="Toggle cart"
      className={`cart-icon ${isInCart ? 'gold' : ''}`}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
    </StyledButtonCart>
  );
};
