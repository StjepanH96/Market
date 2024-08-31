import { styled } from 'styled-components';

const ProductItem = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #001f3f;
  color: white;
  opacity:0.4;
  text-align: center;
  padding: 8px;
  border-radius: 0 0 8px 8px;
`;

const ProductTitle = styled.p`
  margin: 0;
  font-size: 16px;
`;

const FavoriteStarContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

`;

export {
  FavoriteStarContainer,
  ProductTitle,
  ProductOverlay,
  ProductImage,
  ProductItem,
};
