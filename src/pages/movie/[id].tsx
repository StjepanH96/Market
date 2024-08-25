import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useProductActions } from '../../redux/reducers/products/productStateManagement';
import { LoadingSpinner, ErrorModal } from '@/components';
import {
  Banner,
  ProductItem,
  ProductList,
  LoaderContainer,
  ProductContainer,
  ProductDetail,
  ProductDetailsContainer,
  ProductInfo,
  ProductOverview,
  ProductPoster,
  ProductTitleDetail,
  BuyButton,
  SliderContainer,
  VideoModal,
} from '@/styled-components/product';
import { FavoriteStar } from '@/components';
import { Category } from '@/types/products';
import { useProductData } from '@/lib';

const ProductPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { productDetails, loading, error } = useProductData();

  const router = useRouter();
  const { id } = router.query;
  const productId = id;

  const { initializeProductDetails } = useProductActions();

  useEffect(() => {
    if (productId) {
      initializeProductDetails(productId);
    }
  }, [initializeProductDetails, productId]);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
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
          productDetails && (
            <>
              <Banner src={productDetails.image} >
                <BuyButton onClick={handlePlayVideo} />
              </Banner>
              {showVideo && productDetails.video && (
                <VideoModal onClick={handleCloseVideo}>
                  <iframe
                    src={productDetails.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </VideoModal>
              )}
              <ProductDetailsContainer>
                <ProductPoster src={productDetails.image} alt={productDetails.title} />
                <ProductInfo>
                  <ProductTitleDetail>
                    {productDetails.title}
                    <FavoriteStar productId={productDetails.id} />
                  </ProductTitleDetail>
                  <ProductOverview>{productDetails.description}</ProductOverview>
                  <ProductDetail>
                    <strong>Price:</strong> ${productDetails.price}
                  </ProductDetail>
                  <ProductDetail>
                    <strong>Category:</strong> {productDetails.category}
                  </ProductDetail>
                  <ProductDetail>
                    <strong>Rating:</strong> {productDetails.rating}
                  </ProductDetail>
                  <ProductDetail>
                    <strong>Available:</strong> {productDetails.stock} units
                  </ProductDetail>
                  <ProductDetail>
                    <strong>Related Products:</strong>
                    <SliderContainer>
                      <ProductList>
                        {productDetails.relatedProducts?.map((relatedProduct) => (
                          <ProductItem key={relatedProduct.id}>
                            <p>{relatedProduct.name}</p>
                            <p>
                              <em>{relatedProduct.description}</em>
                            </p>
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