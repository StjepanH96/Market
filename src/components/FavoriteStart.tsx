import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { styled } from 'styled-components';

interface FavoriteStarProps {
  productId: number;
}

export const StyledButtonFavorite = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: grey;
  z-index: 3;
  transition: color 0.3s;

  &.gold {
    color: gold;
  }
`;

export const FavoriteStar = ({ productId }: FavoriteStarProps) => {
  const { favorites, addFavoriteById, removeFavoriteById } = useFavorites();
  const isFavorited = favorites.includes(productId);

  const toggleFavorite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (isFavorited) {
      removeFavoriteById(productId);
    } else {
      addFavoriteById(productId);
    }
  };

  return (
    <StyledButtonFavorite
      onClick={toggleFavorite}
      aria-label="Toggle favorite"
      className={`favorite-star ${isFavorited ? 'gold' : ''}`}
    >
      {isFavorited ? '★' : '☆'}
    </StyledButtonFavorite>
  );
};
