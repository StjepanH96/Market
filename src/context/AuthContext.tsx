import router from "next/router";
import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types/users";

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
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState<string | unknown>();
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [tokenExpiration, setTokenExpiration] = useState<number | null>(null);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      const response = await fetch("api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, expiresInMins: 1 }),
      });

      const data = await response.json();
      if (response.ok) {
        const expiresInMins =
          data.expiresInMins !== undefined ? data.expiresInMins : 1;

        setToken(data.token);
        setTokenExpiration(Date.now() + expiresInMins * 60 * 1000);
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
    try {
      const response = await fetch("/api/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: user?.refreshToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.refreshToken);
        const expiresInMins =
          data.expiresInMins !== undefined ? data.expiresInMins : 1;

        setTokenExpiration(Date.now() + expiresInMins * 60 * 1000);
      } else {
        logout();
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      logout();
    }
  };

  const fetchUser = async () => {
    if (token) {
      try {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    }
  };

  const logout = () => {
    setUser(null);
    setToken("");
    setTokenExpiration(null);
    Object.keys(localStorage).forEach((key) => {
      if (
        key.startsWith("userCart_") ||
        key === "storedProducts" ||
        key === "favorites"
      ) {
        localStorage.removeItem(key);
      }
    });
    setIsAnonymous(false);
    router.push("/");
  };

  const setAnonymous = (anonymous: boolean) => {
    setIsAnonymous(anonymous);
    if (anonymous) {
      setUser(null);
      setToken("");
      localStorage.removeItem("cart");
      router.push(`/product/home`);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  useEffect(() => {
    if (token && tokenExpiration) {
      const timeUntilExpiration = tokenExpiration - Date.now();
      if (timeUntilExpiration > 0) {
        const timeout = setTimeout(() => {
          refreshToken();
        }, timeUntilExpiration);
        return () => clearTimeout(timeout);
      } else {
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
