import { NavigationBar } from './NavigationBar';
import {
  HeaderContainer,
  Logo,
  Container,
} from '@/styled-components/HeaderStyles';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>ProductWatch</Logo>
      <Container>
        <NavigationBar />
      </Container>
    </HeaderContainer>
  );
};
