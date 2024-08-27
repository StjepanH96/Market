import { styled } from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #555;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #222;
  min-width: 250px;  // Increased width
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
  flex-direction: column;
  transition: all 0.5s ease-out;
  opacity: 0;
  border-radius: 0 0 4px 4px;
  overflow: hidden;

  &.show {
    display: flex;
    opacity: 1;
  }
`;

const DropdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
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

export { DropdownButton, DropdownContainer, DropdownContent, DropdownItem, QuantityControl };