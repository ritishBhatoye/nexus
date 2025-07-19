import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { supabase } from "@/utils/supabase";
import { useToast } from "@/src/hooks/useToast";

const AuthCallback = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const params = useLocalSearchParams();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Handle the OAuth callback
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Auth callback error:", error);
          showToast.error(
            "Authentication Error",
            "Failed to complete authentication"
          );
          setTimeout(() => {
            router.replace("/(auth)/login");
          }, 2000);
          return;
        }

        if (data.session) {
          // User is authenticated, redirect to main app
          console.log("User authenticated:", data.session.user);
          showToast.success("Welcome!", "Successfully authenticated");
          setTimeout(() => {
            router.replace("/(tabs)");
          }, 1500);
        } else {
          // No session found, redirect to login
          showToast.error("Authentication Failed", "No valid session found");
          setTimeout(() => {
            router.replace("/(auth)/login");
          }, 2000);
        }
      } catch (error) {
        console.error("Auth callback error:", error);
        showToast.error("Error", "Something went wrong during authentication");
        setTimeout(() => {
          router.replace("/(auth)/login");
        }, 2000);
      }
    };

    handleAuthCallback();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#2563eb" />
      <Text className="mt-4 text-gray-600 font-medium">
        Completing authentication...
      </Text>
    </View>
  );
};

export default AuthCallback;
