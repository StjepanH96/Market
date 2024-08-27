import { useRouter } from 'next/router';
import { useProductActions } from '../../redux/reducers/products/productStateManagement';
import { LoadingSpinner, ErrorModal } from '@/components';
import {
  Banner,
  LoaderContainer,
  ProductContainer,
  ProductDetail,
  ProductDetailsContainer,
  ProductInfo,
  ProductOverview,
  ProductTitleDetail,
  SliderContainer,
} from '@/styled-components/product';
import { Cart } from '@/components';
import { useProductData } from '@/lib';
import { ProductItem, ProductList } from '@/styled-components';
import { Review } from '@/types/products';
import { useEffect } from 'react';

const ProductPage = () => {
  const { productsDetails, loading, error } = useProductData();

  const router = useRouter();
  const { id } = router.query;
  const productId = id;

  const { initializeProductDetails } = useProductActions();

  useEffect(() => {
    if (productId) {
      initializeProductDetails(productId);
    }
  }, [initializeProductDetails, productId]);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {error && <ErrorModal message={error} />}
      <ProductContainer>
        {loading ? (
          <LoaderContainer>
            <LoadingSpinner />
          </LoaderContainer>
        ) : (
          productsDetails && (
            <>
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                  <img src={productsDetails.thumbnail} alt="Thumbnail" style={{ width: '300px', height: '300px' }} />
                  {productsDetails.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} style={{ width: '300px', height: '300px' }} />
                  ))}
                </div>
              </div>
         
              <ProductDetailsContainer>
                <ProductInfo>
                  <ProductTitleDetail>
                    {productsDetails.title}
                    <Cart productId={productsDetails.id} />
                  </ProductTitleDetail>
                  <ProductOverview>{productsDetails.description}</ProductOverview>
                  <ProductDetail>
                    <strong>Price:</strong> ${productsDetails.price}
                  </ProductDetail>
                  <ProductDetail>
                    <strong>Category:</strong> {productsDetails.category}
                  </ProductDetail>
                  <ProductDetail>
                    <strong>Rating:</strong> {productsDetails.rating}
                  </ProductDetail>
                  <ProductDetail>
                    <strong>Available:</strong> {productsDetails.stock} units
                  </ProductDetail>
                  <ProductDetail>
                    <strong>Related Products:</strong>
                    <SliderContainer>
                      <ProductList>
                        {productsDetails.reviews.map((review: Review, index: number) => (
                          <ProductItem key={index}>
                            <p>{review.reviewerName}</p>
                            <p><em>{review.rating}</em></p>
                            <p><em>{review.comment}</em></p>
                            <p><em>{formatDate(review.date)}</em></p>
                          </ProductItem>
                        ))}
                      </ProductList>
                    </SliderContainer>
                  </ProductDetail>
                </ProductInfo>
              </ProductDetailsContainer>
            </>
          )
        )}
      </ProductContainer>
    </>
  );
};

export default ProductPage;
