import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Product } from "@/types/products";

interface CartProps {
  product: Product;
}

export const Cart = ({ product }: CartProps) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = !!cart[product.id];

  const toggleCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (isInCart) {
      removeFromCart(product.id, 1);
    } else {
      addToCart(product, 1);
    }
  };

  return (
    <StyledButtonCart
      onClick={toggleCart}
      aria-label="Toggle cart"
      className={`cart-icon ${isInCart ? "gold" : ""}`}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
    </StyledButtonCart>
  );
};

export const StyledButtonCart = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: grey; 
  transition: color 0.3s;

  &.gold {
    color: gold; 
  }
`;
