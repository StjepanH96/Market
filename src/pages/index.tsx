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
        <Title>Welcome to Market</Title>
        <LoginFormWrapper>
          <LoginForm />
          <GuestButton onClick={handleGuestClick}>Continue as Guest</GuestButton>
        </LoginFormWrapper>
      </Main>
    </PageContainer>
  );
};

Home.getLayout = function getLayout(page:any) {
  return (
    <>
      {page}
    </>
  );
};

export default Home;


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('/images/market.jpg');
  background-size: cover;
  background-position: center;
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
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
`;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
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