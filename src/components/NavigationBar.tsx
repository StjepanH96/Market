import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaUserCircle, FaShoppingCart, FaSearch, FaHome } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { CategoryDropdown, CartDropdown, SearchBar } from './index';
import { styled } from 'styled-components';

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const auth = useAuth();

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

  const toggleCategoryDropdown = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

  return (
    <StyledNavigation>
      <Logo>Market</Logo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavigationLinks $show={isOpen}>
        <Link href="/product/home" passHref>
          <StyledLink onClick={toggleMenu}>
            <FaHome /> Home
          </StyledLink>
        </Link>
        <div>
          <StyledLink  onClick={toggleCategoryDropdown}>
            <FaShoppingCart /> Categories
          </StyledLink>
          {isCategoryOpen && <CategoryDropdown isOpen={isCategoryOpen} toggleDropdown={toggleCategoryDropdown} />}
        </div>
        <div>
          <StyledLink  onClick={toggleCartDropdown}>
            <FaShoppingCart /> Cart
          </StyledLink>
          {isCartOpen && <CartDropdown isOpen={isCartOpen} toggleDropdown={toggleCartDropdown}/>}
        </div>
        {!isMobile && <SearchBar />}
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

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222831;
  padding: 15px 30px;
  position: relative;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width:100%;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffd369;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover {
    color: #ffac41;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: #ffd369;
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffac41;
  }

  @media (max-width: 968px) {
    display: block;
  }
`;

const NavigationLinks = styled.div<{ $show: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 968px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #393e46;
    padding: 20px;
    flex-direction: column;
    transform: ${({ $show }) => ($show ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledLink = styled.a`
  color: #eeeeee;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #ffac41;
  }

  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserGreeting = styled.span`
  font-weight: bold;
  color: #ffd369;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
`;

const StyledLogoutButton = styled.button`
  background-color: #ff7043;
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  `;