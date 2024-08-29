import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const auth = useAuth();

  const handleGuestClick = () => {
    auth?.setUser({ username: 'Guest' });
    router.push('/product/home');
  };

  return (
    <PageContainer>
      <Main>
        <Title>Welcome to Market App</Title>
        <LoginFormWrapper>
          <LoginForm />
          <GuestButton onClick={handleGuestClick}>Continue as Guest</GuestButton>
        </LoginFormWrapper>
      </Main>
    </PageContainer>
  );
};

export default Home;

// Styled-components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Promenjen minimalna visina na 100vh kako bi stranica uvek pokrivala ceo ekran */
  background-color: #f0f2f5;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2rem; /* Smanjena veličina fonta */
  color: #333;
  margin-bottom: 15px; /* Smanjena donja margina */
`;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; /* Smanjena razmak između elemenata */
  width: 100%;
`;

const GuestButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;