import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  role: string;
  // Add other properties if needed
}

export function decodeToken(token: string): TokenPayload | null {
  try {
    return jwtDecode<TokenPayload>(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}