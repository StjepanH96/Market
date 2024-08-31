import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { LoadingSpinner } from "./Spinner";
import { LoginLoaderContainer } from "@/styled-components/product";
import {
  LoginButton,
  FormControl,
  FormWrapper,
  LoginInput,
  LoginLable,
} from "@/styled-components/ComponentStyles";

const LoginForm = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    if (auth && auth.login) {
      try {
        await auth.login(input.username, input.password);
        if (auth.error) {
          alert(auth.error);
        } else {
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login.");
      }
    } else {
      alert("Authentication context is not available");
    }
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (auth?.loading) {
    return (
      <LoginLoaderContainer>
        <LoadingSpinner loading={auth.loading} />
      </LoginLoaderContainer>
    );
  }

  return (
    <FormWrapper onSubmit={handleLogin}>
      <FormControl>
        <LoginLable htmlFor="user-email">Username:</LoginLable>
        <LoginInput
          type="text"
          id="user-email"
          name="username"
          placeholder="username"
          onChange={handleInput}
        />
      </FormControl>
      <FormControl>
        <LoginLable htmlFor="password">Password:</LoginLable>
        <LoginInput
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
        />
      </FormControl>
      <LoginButton type="submit">Login</LoginButton>
    </FormWrapper>
  );
};

export default LoginForm;
