import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaShoppingCart,
  FaHome,
  FaSearch,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { CartDropdown } from "./CartDropdown";
import { SearchBar } from "./SearchBar";
import {
  NavigationLogo,
  MenuIcon,
  NavigationLinks,
  StyledButton,
  StyledLink,
  StyledLogoutButton,
  StyledNavigation,
  UserGreeting,
} from "@/styled-components";
import { useDataState } from "@/lib";

export const NavigationBar = () => {
  const {
    setIsMobile,
    setIsCartOpen,
    isOpen,
    isMobile,
    isCartOpen,
    setIsOpen,
  } = useDataState();
  const auth = useAuth();

  useEffect(() => {
    function updateMobileStatus() {
      setIsMobile(window.innerWidth < 968);
    }

    if (typeof window !== "undefined") {
      updateMobileStatus();
      window.addEventListener("resize", updateMobileStatus);

      return () => window.removeEventListener("resize", updateMobileStatus);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <StyledNavigation>
      <NavigationLogo>Market</NavigationLogo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavigationLinks $show={isOpen}>
        <Link href="/product/home" passHref>
          <StyledLink>
            <FaHome /> Home
          </StyledLink>
        </Link>
        <Link href="/product/categories" passHref>
          <StyledLink>
            <FaShoppingCart /> Categories
          </StyledLink>
        </Link>

        <div>
          <StyledButton onClick={toggleCartDropdown}>
            <FaShoppingCart /> Your Cart
          </StyledButton>
          <CartDropdown
            isOpen={isCartOpen}
            toggleDropdown={toggleCartDropdown}
          />
        </div>
           <SearchBar />
  
        {auth?.user && (
          <>
            <UserGreeting>
              <FaUserCircle /> Welcome, {auth.user.username}!
            </UserGreeting>
            <StyledLogoutButton onClick={auth.logout}>
              Logout
            </StyledLogoutButton>
          </>
        )}
      </NavigationLinks>
    </StyledNavigation>
  );
};
