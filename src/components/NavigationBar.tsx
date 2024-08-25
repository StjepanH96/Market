import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FavoriteDropdown } from './FavoriteDropdown';
import { SearchBar } from './SearchBar';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  MenuIcon,
  MobileSearchLink,
  NavigationLinks,
  StyledLink,
  StyledNavigation,
} from '@/styled-components';

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
        <Link href="/product/new-Products" passHref>
          <StyledLink onClick={toggleMenu}>List of Products</StyledLink>
        </Link>
        <Link href="/product/search-product" passHref>
          <MobileSearchLink onClick={toggleMenu}>Search</MobileSearchLink>
        </Link>
        <Link href="/product/favorite-Products" passHref>
          <MobileSearchLink onClick={toggleMenu}>Favorites</MobileSearchLink>
        </Link>
        {!isMobile && <FavoriteDropdown />}
        {!isMobile && <SearchBar />}
      </NavigationLinks>
    </StyledNavigation>
  );
};
