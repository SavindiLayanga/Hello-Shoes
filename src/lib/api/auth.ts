import { User, UserRole } from '../../types';
import { mockLogin, mockSignUp } from './mockAuth';

interface AuthResponse {
  user: User;
  token: string;
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  // For development, use mock authentication
  return mockLogin(email, password);
};

export const signUp = async (email: string, password: string): Promise<void> => {
  // For development, use mock authentication
  return mockSignUp(email, password);
};