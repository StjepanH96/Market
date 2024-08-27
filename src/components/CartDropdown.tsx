import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';
import { DropdownButton, DropdownContainer, DropdownContent, DropdownItem, QuantityControl } from '@/styled-components/DropdownStyles';

export const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartProducts, addToCart, removeFromCart, cart } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const cartProducts = getCartProducts();

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>Cart</DropdownButton>
      <DropdownContent className={isOpen ? 'show' : ''}>
        {cartProducts.length > 0 ? (
          cartProducts.map((product, index) => (
            <DropdownItem key={index}>
              <div onClick={() => router.push(`/product/${product.id}`)} style={{ flex: 1 }}>
                {`${product.id} - ${product.title}`} ({cart[product.id]}x)
              </div>
              <QuantityControl>
                <button onClick={() => addToCart(product.id, 1)}>+</button>
                <button onClick={() => removeFromCart(product.id, 1)}>-</button>
              </QuantityControl>
            </DropdownItem>
          ))
        ) : (
          <DropdownItem>No products in cart</DropdownItem>
        )}
      </DropdownContent>
    </DropdownContainer>
  );
};