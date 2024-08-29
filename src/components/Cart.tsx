import React from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '@/types/products'; // Pretpostavljamo da postoji ovaj import za tip proizvoda

interface CartProps {
  product: Product;  // Umesto productId, sada primamo ceo proizvod
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
  transition: color 0.3s;

  &.gold {
    color: gold;  // Color when the item is in the cart
  }
`;

export const Cart = ({ product }: CartProps) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = !!cart[product.id];  // Proveravamo da li je proizvod u korpi

  const toggleCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    if (isInCart) {
      removeFromCart(product.id, 1);  // I dalje koristimo samo product.id za uklanjanje
    } else {
      addToCart(product, 1);  // Sada dodajemo ceo proizvod umesto samo ID-a
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