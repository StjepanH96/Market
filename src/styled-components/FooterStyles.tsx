import { styled } from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Osigurava da wrapper pokriva celu visinu ekrana */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Omogućava rastezanje sadržaja između headera i footera */
`;

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: relative; /* Pozicionira footer na dnu sadržaja */
  margin-top: auto; /* Osigurava da footer bude pri dnu čak i kod manjeg sadržaja */
`;

export { PageWrapper, StyledFooter, ContentWrapper };