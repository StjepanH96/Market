export interface AuthResponse {
    token: string;
    expiresIn: string;
    user: {
      id: number;
      username: string;
      email: string;
    };
  }