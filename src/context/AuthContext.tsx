import { authenticateUser } from '@/pages/api/authApi';
import { User } from '@/types/users';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = (children:any ) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Check for existing token and its expiry time at initial load
    const token = sessionStorage.getItem('token');
    const expiry = sessionStorage.getItem('token-expiry');
    if (token && expiry && new Date().getTime() < parseInt(expiry)) {
      setIsAuthenticated(true);
      // Optionally decode the token or fetch user details if needed
    } else {
      logout(); // Clears any expired or invalid tokens
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const data = await authenticateUser(username, password);
      setIsAuthenticated(true);
      setUser(data.user);

      // Set token and expiration in sessionStorage
      const tokenExpiryTime = 15 * 60 * 1000; // 15 minutes in milliseconds
      const expiryDate = new Date().getTime() + tokenExpiryTime;
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('token-expiry', expiryDate.toString());

      // Automatically log out when token expires
      setTimeout(() => {
        logout();
      }, tokenExpiryTime);

    } catch (error) {
      console.error('Login failed:', error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('token-expiry');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
