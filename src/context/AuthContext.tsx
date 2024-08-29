import router from 'next/router';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types/users';

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  token: string;
  error: string | unknown;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAnonymous: boolean;
  setAnonymous: (isAnonymous: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string | unknown>();
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);  
  const [loading, setLoading] = useState<boolean>(false);
  const [tokenExpiration, setTokenExpiration] = useState<number | null>(null);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      const response = await fetch('api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, expiresInMins: 1 }),
      });

      const data = await response.json();
      if (response.ok) {
        const expiresInMins = data.expiresInMins !== undefined ? data.expiresInMins : 1;

        setToken(data.token);
        setTokenExpiration(Date.now() + expiresInMins * 60 * 1000); // Save expiration time
        setUser({
          id: data.id,
          username: data.username,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
          image: data.image,
          token: data.token,
          refreshToken: data.refreshToken,
        });
        setError(null); 
        setIsAnonymous(false); 
        router.push(`/product/home`);
      } else {
        setError(data.message); 
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); 
    }
  };

  const refreshToken = async () => {
    console.log('Attempting to refresh token...');
    try {
      const response = await fetch('/api/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken: user?.refreshToken }), // Sending the refresh token
      });
  
      const data = await response.json();
      console.log('Refresh token response data:', data);
  
      if (response.ok) {
        setToken(data.
          refreshToken
          );
        console.log("od refresha", data.refreshToken);
        const expiresInMins = data.expiresInMins !== undefined ? data.expiresInMins : 1;
        console.log('Expires In Mins:', expiresInMins);
  
        setTokenExpiration(Date.now() + expiresInMins * 60 * 1000); // Update expiration time
        console.log('Token refreshed. New expiration:', Date.now() + expiresInMins * 60 * 1000);
      } else {
        console.log('Token refresh failed with status:', response.status);
        logout(); // If refreshing fails, log out the user
      }
    } catch (error) {
      console.error('Failed to refresh token:', error);
      logout(); // If an error occurs, log out the user
    }
  };

  const fetchUser = async () => {
    if (token) {
      try {
        const response = await fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    }
  };

  const logout = () => {
    setUser(null);
    setToken('');
    setTokenExpiration(null);
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('userCart_') || key === 'storedProducts' || key === 'favorites') {
        localStorage.removeItem(key);
      }
    });
    setIsAnonymous(false); 
    router.push('/');
  };

  const setAnonymous = (anonymous: boolean) => {
    setIsAnonymous(anonymous);
    if (anonymous) {
      setUser(null);
      setToken('');
      localStorage.removeItem('cart');
      router.push(`/product/home`);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  useEffect(() => {
    console.log('Token:', token);
    console.log('Token Expiration:', tokenExpiration);
    if (token && tokenExpiration) {
      const timeUntilExpiration = tokenExpiration - Date.now();
      console.log('Time until expiration:', timeUntilExpiration);
      if (timeUntilExpiration > 0) {
        const timeout = setTimeout(() => {
          console.log('Refreshing token...');
          refreshToken();
        }, timeUntilExpiration);
        return () => clearTimeout(timeout);
      } else {
        console.log('Token already expired, refreshing...');
        refreshToken();
      }
    }
  }, [token, tokenExpiration]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        login,
        logout,
        isAnonymous,
        setAnonymous,
        error,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
