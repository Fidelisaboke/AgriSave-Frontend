import apiClient from '@/api/apiClient';
import { 
    type UserProfile, 
    type AuthTokens, 
} from '@/types';
import { type LoginCredentials } from '@/schemas/login';
import { type RegisterData } from '@/schemas/register';

const authApi = {
    // Login
    login: async (credentials: LoginCredentials): Promise<AuthTokens> => {
        const { data } = await apiClient.post('/auth/login/', credentials);
        return data;
    },

    // Register
    register: async (registerData: RegisterData): Promise<AuthTokens> => {
        const { data } = await apiClient.post('/auth/register/', registerData);
        return data;
    },

    // Refresh token
    refresh: async (refreshToken: string): Promise<{ access: string }> => {
        const { data } = await apiClient.post('/auth/refresh/', {
            refresh: refreshToken,
        });
        return data;
    },

    // Get user profile
    getProfile: async (): Promise<UserProfile> => {
        const { data } = await apiClient.get('/auth/me/');
        return data;
    },
};

export default authApi;
