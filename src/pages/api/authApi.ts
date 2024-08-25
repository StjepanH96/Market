import { AuthResponse } from "@/types/auth";

  
  export const authenticateUser = async (username: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
  
      const data: AuthResponse = await response.json();
      
      // Store the token securely (e.g., in a cookie or memory)
      // localStorage.setItem('token', data.token); // Example (be cautious with local storage)
      
      return data; // return the data so it can be used in the context or wherever necessary
    } catch (error) {
      console.error('Error during authentication:', error);
      throw error;
    }
  };

  
