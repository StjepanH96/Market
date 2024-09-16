import React from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import { Product, Review } from "@/types/products";
import {
  CloseModal,
  ImageWrapper,
  RatingParagraph,
  ReviewWrapper,
  StyledParagraph,
} from "@/styled-components";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productDetails: Product | null;
}

export const ProductModal = ({
  isOpen,
  onClose,
  productDetails,
}: ProductModalProps) => {
  if (!productDetails) return null;
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <CustomProductModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Product Details"
    >
      <CloseModal onClick={onClose}>&times;</CloseModal>
      <h2>{productDetails.title}</h2>
      <ImageWrapper>
        <img src={productDetails.thumbnail} alt={productDetails.title} />
      </ImageWrapper>
      <StyledParagraph>{productDetails.description}</StyledParagraph>
      <StyledParagraph>
        <strong>Price:</strong> ${productDetails.price}
      </StyledParagraph>
      <StyledParagraph>
        <strong>Category:</strong> {productDetails.category}
      </StyledParagraph>
      <RatingParagraph>
        <strong>Rating:</strong> {productDetails.rating}
        <span className="star">★</span>
      </RatingParagraph>{" "}
      <StyledParagraph>
        <strong>Available:</strong> {productDetails.stock} units
      </StyledParagraph>
      <ReviewWrapper>
        {productDetails.reviews && productDetails.reviews.length > 0 ? (
          productDetails.reviews.map((review: Review, index: number) => (
            <div key={index}>
              <StyledParagraph>
                <strong>{review.reviewerName}</strong>
              </StyledParagraph>
              <RatingParagraph>
                <strong>Rating:</strong> {review.rating}
                <span className="star">★</span>
              </RatingParagraph>
              <StyledParagraph>{review.comment}</StyledParagraph>
              <StyledParagraph>{formatDate(review.date)}</StyledParagraph>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </ReviewWrapper>
    </CustomProductModal>
  );
};

const CustomProductModal = styled(Modal)`
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
