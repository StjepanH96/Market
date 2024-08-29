import React from 'react';
import { PageWrapper, StyledFooter, ContentWrapper } from '@/styled-components';

export const Footer = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        {/* Ostali sadržaj stranice */}
      </ContentWrapper>
      <StyledFooter>
        <div>
          <p>&copy; 2024 ProductApp. All rights reserved.</p>
          <p>
            <a href="/terms">Terms of Service</a> |{' '}
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </StyledFooter>
    </PageWrapper>
  );
};