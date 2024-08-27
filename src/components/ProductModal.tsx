import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Product } from '@/types/products';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productDetails: Product | null;
}

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
`;

const ReviewWrapper = styled.div`
  margin-top: 1rem;

  div {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eaeaea;
  }

  p {
    margin: 0.5rem 0;
  }

  strong {
    display: block;
    margin-bottom: 0.3rem;
  }
`;

export const ProductModal = ({ isOpen, onClose, productDetails }: ProductModalProps) => {
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!productDetails) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        zIndex={1500}
        backgroundColor="white"
        boxShadow="lg"
        borderRadius="md"
        maxWidth="400px"
        padding="4"
      >
        <ModalHeader>{productDetails.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ImageWrapper>
            <img
              src={productDetails.thumbnail}
              alt={productDetails.title}
            />
          </ImageWrapper>
          <p>{productDetails.description}</p>
          <p>
            <strong>Price:</strong> ${productDetails.price}
          </p>
          <p>
            <strong>Category:</strong> {productDetails.category}
          </p>
          <p>
            <strong>Rating:</strong> {productDetails.rating}
          </p>
          <p>
            <strong>Available:</strong> {productDetails.stock} units
          </p>
          <ReviewWrapper>
            <h3>Reviews:</h3>
            {productDetails.reviews.map((review, index) => (
              <div key={index}>
                <p><strong>{review.reviewerName}</strong></p>
                <p>Rating: {review.rating}</p>
                <p>{review.comment}</p>
                <p>{formatDate(review.date)}</p>
              </div>
            ))}
          </ReviewWrapper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};