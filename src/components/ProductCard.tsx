import React, { useState } from 'react';
import {
  FavoriteStarContainer,
  ProductImage,
  ProductItem,
  ProductOverlay,
  ProductTitle,
} from '../styled-components/product';
import {
  ProductInfo,
  ProductPrice,
  ProductDiscount,
  ProductRating,
  ProductStock
} from "../styled-components/product/ProductStyled";
import { Product } from '@/types/products';
import { Cart } from './Cart';
import { LoadingSpinner } from './Spinner';  // Make sure this import path is correct

interface ProductCardProps {
  product: Product;
  onProductClick: (productId: number) => void;
}

export const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  const [imageLoading, setImageLoading] = useState(true);  // State to manage image loading

  return (
    <ProductItem onClick={() => onProductClick(product.id)}>
      {imageLoading && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LoadingSpinner />  // Display spinner while image is loading
        </div>
      )}
      <ProductImage
        src={product.thumbnail}
        alt={product.brand}
        onLoad={() => setImageLoading(false)}
        onError={() => setImageLoading(false)}
        style={{ display: imageLoading ? 'none' : 'block' }}
      />
      <FavoriteStarContainer>
        <Cart productId={product.id} />
      </FavoriteStarContainer>
      <ProductOverlay>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductInfo>
          <ProductPrice>{`$${product.price.toFixed(2)}`}</ProductPrice>
          {product.discountPercentage > 0 && (
            <ProductDiscount>{`-${product.discountPercentage}%`}</ProductDiscount>
          )}
          <ProductRating>{`Rating: ${product.rating}/5`}</ProductRating>
          <ProductStock>{`In Stock: ${product.stock}`}</ProductStock>
        </ProductInfo>
      </ProductOverlay>
    </ProductItem>
  );
};
