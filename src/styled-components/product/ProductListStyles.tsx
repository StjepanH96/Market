import { styled } from 'styled-components';

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:70%;
  gap: 16px;
  margin-left:15%;
  padding: 16px;
  margin-top: 5%;

  @media (max-width: 968px) {
    margin-top: 20%;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 750px) {  
    grid-template-columns: repeat(2, 1fr);  
  }
`;



const NoFavoritesMessage = styled.p`
  color: #fff;
  text-align: center;
`;

export { ProductListContainer, ProductGrid, NoFavoritesMessage };
