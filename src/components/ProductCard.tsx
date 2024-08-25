import {
  FavoriteStarContainer,
  ProductImage,
  ProductItem,
  ProductOverlay,
  ProductTitle,
} from '../styled-components/product';
import { ProductInfo,
  ProductPrice,
  ProductDiscount,
  ProductRating,
  ProductStock} from "../styled-components/product/ProductStyled";
import { Product } from '@/types/products';
import { FavoriteStar } from '../components/FavoriteStart';

interface ProductCardProps {
  product: Product;
  onProductClick: (ProductId: number) => void;
}

export const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  return (
    <ProductItem onClick={() => onProductClick(product.id)}>
      <ProductImage
        src={product.images[0] || product.thumbnail}
        alt={product.brand}
      />
      <FavoriteStarContainer>
        <FavoriteStar productId={product.id} />
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