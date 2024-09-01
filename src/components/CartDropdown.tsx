import React, {  useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useCart } from "../context/CartContext";
import {
  DropdownContainer,
  DropdownContent,
  DropdownItem,
  QuantityControl,
} from "@/styled-components";

interface CartDropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
}

export const CartDropdown: React.FC<CartDropdownProps> = ({
  isOpen,
  toggleDropdown,
}) => {
  const { getCartProducts, addToCart, removeFromCart, cart } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const cartProducts = getCartProducts();

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownContent className={isOpen ? "show" : ""}>
        {cartProducts.length > 0 ? (
          cartProducts.map((product, index) => (
            <DropdownItem key={index}>
              <div
                onClick={() => {
                  router.push(`/product/${product.id}`);
                  toggleDropdown();
                }}
                style={{ flex: 1 }}
              >
                {`${product.title}`} ({cart[product.id]}x)
              </div>
              <QuantityControl>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product, 1);
                  }}
                >
                  +
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(product.id, 1);
                  }}
                >
                  -
                </button>
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
