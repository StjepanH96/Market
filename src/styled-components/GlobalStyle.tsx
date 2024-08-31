import styled, { createGlobalStyle } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #F0F0F0 ;
    color: #ffffff;
    line-height: 1.6;
  
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 10%;
  border:1px solid black;

  @media (max-width: 768px) {
    margin-top: 30%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 20px 0;
  align-items: center;
    border:1px solid black;

`;

const ProductItem = styled.div`
  position: relative;
  margin-right: 20px;
  width: 200px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    z-index: 2;
    position: relative;
  }

    border:1px solid black;

`;



export {
  ProductItem,
  ProductList,
  Container,
  SectionTitle,
  GlobalStyle,
};
