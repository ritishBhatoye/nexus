import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import * as Linking from "expo-linking";
import Constants from 'expo-constants';

const supabaseUrl = Constants?.expoConfig?.extra?.SUPABASE_URL ?? process.env.SUPABASE_URL;
const supabaseAnonKey = Constants?.expoConfig?.extra?.SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;
console.log('URL',supabaseUrl)
console.log('KEY',supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// OAuth providers configuration
export const oauthProviders = {
  google: {
    name: "Google",
    icon: "logo-google",
    color: "#4285F4",
  },
  github: {
    name: "GitHub", 
    icon: "logo-github",
    color: "#333333",
  },
  discord: {
    name: "Discord",
    icon: "logo-discord", 
    color: "#5865F2",
  },
  twitter: {
    name: "Twitter",
    icon: "logo-twitter",
    color: "#1DA1F2",
  },
};

// Get redirect URL for mobile
const getRedirectUrl = () => {
  if (Platform.OS === 'web') {
    return `${window.location.origin}/auth/callback`;
  }
  // For mobile, use the app scheme
  return Linking.createURL('/auth/callback');
};

// Authentication service
export class AuthService {
  // Email/Password Sign Up
  static async signUp(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: getRedirectUrl(),
        },
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Email/Password Sign In
  static async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  // OAuth Sign In
  static async signInWithOAuth(provider: 'google' | 'github' | 'discord' | 'twitter') {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: getRedirectUrl(),
        },
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Sign Out
  static async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  }

  // Get Current User
  static async getCurrentUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw error;
      return { user, error: null };
    } catch (error) {
      return { user: null, error };
    }
  }

  // Get Session
  static async getSession() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return { session, error: null };
    } catch (error) {
      return { session: null, error };
    }
  }

  // Listen to Auth Changes
  static onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  }
}
