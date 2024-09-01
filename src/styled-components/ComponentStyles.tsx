import { Modal } from "@mui/material";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: hidden;
  max-height: 0;
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
  opacity: 0;
  color: black;

  &.show {
    max-height: 300px;
    opacity: 1;
    overflow-y: auto;
  }
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #444;
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 4px;

    &:hover {
      background-color: #555;
    }

    &:first-child {
      margin-right: 10px;
    }

    &:last-child {
      margin-left: 10px;
    }
  }
`;

const DropdownButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: white;
  color: #0070f3;
  border: 2px solid #0070f3;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

export {
  DropdownContainer,
  DropdownItem,
  DropdownContent,
  QuantityControl,
  DropdownButton,
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  text-align: center;

 
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
const StyledDetailErrorTitle = styled.h2`
  color: #000000;
`;

const StyledDetailError = styled.p`
  color: #000000;
`;

export {
  ModalOverlay,
  ModalContent,
  CloseButton,
  StyledDetailErrorTitle,
  StyledDetailError,
};

const FormWrapper = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginLable = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const LoginInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

export { FormWrapper, LoginButton, LoginInput, LoginLable, FormControl };

const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  background: #fff;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  width: 50%;
  max-width: 600px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

 
`;
const ReviewWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 1rem;
  gap: 1rem;

  div {
    flex: 0 0 auto;
    min-width: 250px;
    padding: 10px;
    border-radius: 8px;
    background: #f0f0f0;
  }

 
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    max-width: 60%;
    border-radius: 8px;
  }
`;

const StyledParagraph = styled.p`
  margin: 0.5rem 0;
  color: #333;
`;

const StyledHeader = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;
const CloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
`;

const RatingParagraph = styled(StyledParagraph)`
  display: flex;
  align-items: center;

  .star {
    color: gold;
    margin-left: 5px;
  }
`;

export {
  RatingParagraph,
  CloseModal,
  StyledHeader,
  CustomModal,
  ReviewWrapper,
  ImageWrapper,
  StyledParagraph,
};

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
    z-index: 12; 

    @media (max-width: 768px) {

    
  }
`;

const NavigationLogo = styled.div`
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

  @media (max-width: 1362px) {
    display: block;
  }
`;

const NavigationLinks = styled.div<{ $show: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
   z-index: 10; 
  @media (max-width: 1362px) {
    position: fixed;
    top: 75px; 
    left: 0;
    width: 100%;
    background-color: #002366;
    padding: 20px;
    flex-direction: column;
    transform: ${({ $show }) =>
      $show ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease-in-out, visibility 0.2s ease-in-out;
    visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
    z-index: 10;
  }
`;
const StyledLink = styled.p`
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

const StyledButton = styled.button`
  background: none;
  border: none;
  color: #eeeeee;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    color: #ffac41;
  }
`;

const UserGreeting = styled.span`
  font-weight: bold;
  color: #ffd369;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
    @media (max-width: 1362px) {
      position: fixed;
    top: 0; 
    right: 0;
    margin-right:2%;
  }
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

export {
  StyledLink,
  NavigationLinks,
  MenuIcon,
  StyledNavigation,
  StyledLogoutButton,
  UserGreeting,
  StyledButton,
  NavigationLogo,
};

interface DropdownProps {
  isOpen: boolean;
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 4px 8px;
  border-radius: 4px;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    padding: 8px 16px;
    border-radius: 4px;
    position: relative;
  }
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  background: transparent;
  color: white;
  width: 200px;
  display: block;

  @media (max-width: 900px) {
    flex-grow: 1;
    padding: 8px;
    font-size: 16px;
    border: none;
    background: transparent;
    color: white;
    &::placeholder {
      color: #aaa;
    }
  }
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #e2b616;
  }
`;
const SearchBarDropdown = styled.ul<DropdownProps>`
  position: absolute;
  width: calc(100% - 32px);
  background: #444;
  color: white;
  list-style: none;
  margin: 0;
  padding: 0;
  top: 100%;
  left: 0;
  border-radius: 0 0 4px 4px;
  overflow-y: auto; 
  overflow-x: hidden; 
  max-height: 300px; 
  z-index: 1000; 
  transition: max-height 0.2s ease-out;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-20px)"};


`;

const SearchDropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover,
  &.selected {
    background-color: #555;
  }
`;

export {
  SearchDropdownItem,
  SearchContainer,
  SearchBarDropdown,
  Button,
  Input,
};




const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative; 
  background-color:#002366;
  gap: 16px;
    z-index: 15; 
       @media (max-width: 500px) {
           width:150%;
  }

`;

export { HeaderContainer };



const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh; 
`;

const ContentWrapper = styled.div`
  flex: 1;  
  margin-bottom: 0;
  padding: 0; 
`;

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: auto; 
  position: relative;
  margin-bottom: 0;
`;

export { PageWrapper, ContentWrapper, StyledFooter };
