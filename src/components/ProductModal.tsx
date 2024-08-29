import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { Product, Review } from '@/types/products';

// Prilagođeni stilovi za modal
const CustomModal = styled(Modal)`
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
  width: 50%; // širina modala
  max-width: 600px; // maksimalna širina
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
`;
const ReviewWrapper = styled.div`
  display: flex; // Postavlja elemente horizontalno
  flex-wrap: nowrap; // Sprečava prelamanje elemenata u novi red
  overflow-x: auto; // Omogućuje horizontalni scroll
  margin-top: 1rem;
  gap: 1rem; // Dodaje razmak između recenzija

  div {
    flex: 0 0 auto; // Sprečava širenje elemenata
    min-width: 250px; // Minimalna širina svake recenzije
    padding: 10px;
    border-radius: 8px;
    background: #f0f0f0; // Lagana pozadina za recenzije
    border: 1px solid #eaeaea;
  }
`;
// Stilizirani elementi unutar modala
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    max-width: 60%;
    border-radius: 8px;
  }
`;

const StyledParagraph = styled.p`
  margin: 0.5rem 0;
  color: #333;
`;

const StyledHeader = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
`;

const RatingParagraph = styled(StyledParagraph)`
  display: flex;
  align-items: center;

  .star {
    color: gold;
    margin-left: 5px;
  }
`;

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productDetails: Product | null;
}

export const ProductModal = ({ isOpen, onClose, productDetails }: ProductModalProps) => {
  if (!productDetails) return null;
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  console.log(productDetails, "mooooodul");
  return (
    <CustomModal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Product Details"
  >
    <CloseButton onClick={onClose}>&times;</CloseButton>
      <h2>{productDetails.title}</h2>
      <ImageWrapper>
        <img src={productDetails.thumbnail} alt={productDetails.title} />
      </ImageWrapper>
      <StyledParagraph>{productDetails.description}</StyledParagraph>
      <StyledParagraph><strong>Price:</strong> ${productDetails.price}</StyledParagraph>
      <StyledParagraph><strong>Category:</strong> {productDetails.category}</StyledParagraph>
      <RatingParagraph>
  <strong>Rating:</strong> {productDetails.rating}
  <span className="star">★</span> {/* Unicode zvjezdica */}
</RatingParagraph>      <StyledParagraph><strong>Available:</strong> {productDetails.stock} units</StyledParagraph>
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
    </CustomModal>
  );
};