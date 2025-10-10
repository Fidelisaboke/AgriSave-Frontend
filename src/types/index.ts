import type { LoginCredentials } from "@/schemas/login";
import type { RegisterData } from "@/schemas/register";

export interface UserProfile {
    id: number;
    user: number;
    first_name: string;
    last_name: string;
    phone_number?: string;
    location: string;
    farm_size: number;
    created_at: string;
    updated_at: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface AuthContextType {
  userProfile: UserProfile | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}