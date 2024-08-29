import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { LoadingSpinner } from './Spinner';
import { LoaderContainer } from '@/styled-components/product';

const LoginForm = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const auth = useAuth();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    if (auth && auth.login) {
      try {
        await auth.login(input.username, input.password);
        // alert('Login successful!'); // Uklonjen alert, redirekcija će se dogoditi automatski
      } catch (error) {
        alert(auth.error); // Prikazivanje greške ako se dogodi
      }
    } else {
      alert('Authentication context is not available');
    }
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Ako je auth.loading true, prikaži spinner umesto forme
  if (auth?.loading) {
    return (
        <LoaderContainer >
        <LoadingSpinner loading={auth.loading}/>
      </LoaderContainer>
    );
  }

  return (
    <FormWrapper onSubmit={handleLogin}>
      <FormControl>
        <Label htmlFor="user-email">Username:</Label>
        <Input
          type="text"
          id="user-email"
          name="username"
          placeholder="username"
          onChange={handleInput}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
        />
      </FormControl>
      <Button type="submit">Login</Button>
    </FormWrapper>
  );
};

export default LoginForm;

const FormWrapper = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
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

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;