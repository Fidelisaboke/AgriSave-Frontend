import { useState, useEffect, type ReactNode } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import authApi from '@/api/auth';
import {
    type UserProfile,
    type AuthTokens,
    type AuthContextType
} from '@/types';
import { toast } from 'sonner';
import { AuthContext } from '@/contexts/AuthContext';
import { type LoginCredentials } from '@/schemas/login';
import { type RegisterData } from '@/schemas/register';


export function AuthProvider({ children }: { children: ReactNode }) {
    // State
    const [tokens, setTokens] = useState<AuthTokens | null>(() => {
        const access = localStorage.getItem('access_token');
        const refresh = localStorage.getItem('refresh_token');
        return access && refresh ? { access, refresh } : null;
    });

    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    // Handle logout callback
    const handleLogout = useCallback(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setTokens(null);
        setUserProfile(null);
        toast.info('Logged out', {
            description: 'You have been logged out successfully.',
        });
    }, [setTokens, setUserProfile]);

    // Refresh access token callback
    const refreshAccessToken = useCallback(async () => {
        if (!tokens?.refresh) {
            handleLogout();
            return;
        }
        try {
            const { access } = await authApi.refresh(tokens.refresh);
            localStorage.setItem('access_token', access);
            setTokens((prev) => (prev ? { ...prev, access } : null));
        } catch (error) {
            console.error('Token refresh failed:', error);
            handleLogout();
        }
    }, [tokens?.refresh, handleLogout, setTokens]);

    // Login mutation
    const loginMutation = useMutation<AuthTokens, Error, LoginCredentials>({
        mutationFn: authApi.login,
        onSuccess: (data) => {
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            setTokens(data);
            toast.success('Welcome back to AgriSave!', {
                description: 'Logged in successfully.',
            });
        },
        onError: (error: unknown) => {
            const err = error as { response?: { data?: { detail?: string } } };
            const message = err.response?.data?.detail || 'An error occurred. Please try again.';
            toast.error('Login Failed', {
                description: message,
            });
            throw error;
        },
    });

    // Register mutation
    const registerMutation = useMutation<AuthTokens, Error, RegisterData>({
        mutationFn: authApi.register,
        onSuccess: (data) => {
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            setTokens(data);
            toast.success('Welcome to AgriSave!', {
                description: 'Your account has been created successfully!',
            });
        },
        onError: (error: unknown) => {
            const err = error as { response?: { data?: { detail?: string; email?: string[]; username?: string[] } } };
            const message = err.response?.data?.detail ||
                err.response?.data?.email?.[0] ||
                err.response?.data?.username?.[0] ||
                'An error occurred. Please try again.';
            toast.error('Registration Failed', {
                description: message,
            });
            throw error;
        },
    });

    // Query for user profile
    const {
        refetch: fetchProfile,
        isLoading: isProfileLoading,
        data: profileData,
        error: profileError
    } = useQuery<UserProfile, Error>({
        queryKey: ['user-profile'],
        queryFn: authApi.getProfile,
        enabled: !!tokens?.access,
        retry: 1,
    });

    // Set user on profile fetch
    useEffect(() => {
        if (profileData) {
            setUserProfile(profileData);
        }
        if (profileError) {
            handleLogout();
        }
    }, [profileData, profileError, handleLogout, setUserProfile]);

    // Auto-refresh token before expiry
    useEffect(() => {
        if (!tokens?.refresh) return;

        const interval = setInterval(() => {
            refreshAccessToken();
        }, 14 * 60 * 1000); // 14 minutes

        return () => clearInterval(interval);
    }, [tokens?.refresh, refreshAccessToken]);

    // Fetch profile when tokens change
    useEffect(() => {
        if (tokens?.access) {
            fetchProfile();
        }
    }, [tokens?.access, fetchProfile]);

    const value: AuthContextType = {
        userProfile,
        tokens,
        isAuthenticated: !!tokens && !!userProfile,
        isLoading: isProfileLoading || loginMutation.isPending || registerMutation.isPending,
        login: async (credentials) => {
            await loginMutation.mutateAsync(credentials);
        },
        register: async (data) => {
            await registerMutation.mutateAsync(data);
        },
        logout: handleLogout,
        refreshToken: refreshAccessToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}