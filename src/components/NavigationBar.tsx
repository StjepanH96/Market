import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  MenuIcon,
  MobileSearchLink,
  NavigationLinks,
  StyledLink,
  StyledNavigation,
} from '@/styled-components';
import { CategoryDropdown, CartDropdown } from './index';

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function updateMobileStatus() {
      setIsMobile(window.innerWidth < 968);
    }

    if (typeof window !== 'undefined') {
      updateMobileStatus();
      window.addEventListener('resize', updateMobileStatus);

      return () => window.removeEventListener('resize', updateMobileStatus);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <StyledNavigation>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavigationLinks $show={isOpen}>
        <Link href="/" passHref>
          <StyledLink onClick={toggleMenu}>Home</StyledLink>
        </Link>
        <Link href="/product/search-product" passHref>
          <MobileSearchLink onClick={toggleMenu}>Search</MobileSearchLink>
        </Link>
        <Link href="/product/category/" passHref>
        <MobileSearchLink onClick={toggleMenu}>Category</MobileSearchLink>
        </Link>
        <Link href="/product/favorite-Products" passHref>
          <MobileSearchLink onClick={toggleMenu}>Cart</MobileSearchLink>
        </Link>
        {!isMobile && <CategoryDropdown />}
        {!isMobile && <CartDropdown />}
        {!isMobile && <SearchBar />}
      </NavigationLinks>
    </StyledNavigation>
  );
};
