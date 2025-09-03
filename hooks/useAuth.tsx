import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface User {
  id: string;
  email: string;
  user_metadata?: {
    name?: string;
    avatar_url?: string;
  };
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  backendAvailable: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

export function AuthProvider({ children, backendAvailable }: { children: ReactNode; backendAvailable: boolean }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!backendAvailable) {
      console.log('Backend not available, auth disabled');
      setIsLoading(false);
      return;
    }

    // Check active sessions and sets the user
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ? {
          id: session.user.id,
          email: session.user.email || '',
          user_metadata: session.user.user_metadata,
        } : null);
      } catch (error) {
        console.error('Error getting session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getSession();

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event);
        setUser(session?.user ? {
          id: session.user.id,
          email: session.user.email || '',
          user_metadata: session.user.user_metadata,
        } : null);
        setIsLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [backendAvailable]);

  const signIn = async (email: string, password: string) => {
    if (!backendAvailable) {
      throw new Error('Authentication is currently unavailable. Please try again later.');
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      console.log('Sign in successful:', data);
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    if (!backendAvailable) {
      throw new Error('Account creation is currently unavailable. Please try again later.');
    }

    setIsLoading(true);
    try {
      // Call our server endpoint for signup
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-c3be4cb2/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Signup failed');
      }

      const result = await response.json();
      console.log('Signup successful:', result);

      // Now sign in the user
      await signIn(email, password);
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    if (!backendAvailable) {
      throw new Error('Sign out is currently unavailable.');
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    if (!backendAvailable) {
      throw new Error('Profile updates are currently unavailable.');
    }

    try {
      const { error } = await supabase.auth.updateUser({
        data: updates
      });
      if (error) throw error;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  };

  const value = {
    user,
    isLoading,
    signIn,
    signUp,
    signOut,
    updateProfile,
    backendAvailable,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}