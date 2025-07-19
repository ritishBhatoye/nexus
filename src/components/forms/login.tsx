import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import InputWithLabel from "../atoms/InputWithLabel";
import Button from "../atoms/Button";
import OAuthButton from "../atoms/OAuthButton";
import { Router, useRouter } from "expo-router";
import { LoginSchema } from "@/src/utils/validationSchemas";
import { FormWrapper } from "../elements/FormWrapper";
import { AuthService } from "@/utils/supabase";
import { useToast } from "@/src/hooks/useToast";

const initialValues = {
  email: "",
  password: "",
};

type LoginFormProps = {
  handleSubmit: (
    values: typeof initialValues,
    handleSubmit: () => void
  ) => void;
};

const LoginForm = ({ handleSubmit: onSubmitProp }: LoginFormProps) => {
  const router: Router = useRouter();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<string | null>(null);

  const handleEmailSignIn = async (values: typeof initialValues) => {
    setLoading(true);
    try {
      const { data, error } = await AuthService.signIn(
        values.email,
        values.password
      );

      if (error) {
        showToast.error("Login Error", error || "Invalid email or password");
        return;
      }

      if (data?.user) {
        showToast.success(
          "Welcome back!",
          "Successfully signed in to your account."
        );
        // Navigate to main app
        setTimeout(() => {
          router.push("/(tabs)");
        }, 1500);
      }
    } catch (error: any) {
      showToast.error("Error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthSignIn = async (
    provider: "google" | "github" | "discord" | "twitter"
  ) => {
    setOauthLoading(provider);
    try {
      const { data, error } = await AuthService.signInWithOAuth(provider);

      if (error) {
        showToast.error(
          "OAuth Error",
          error || `Failed to sign in with ${provider}`
        );
        return;
      }

      // OAuth will redirect to the callback URL
      console.log("OAuth initiated:", data);
    } catch (error: any) {
      showToast.error("Error", error.message || "Something went wrong");
    } finally {
      setOauthLoading(null);
    }
  };

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleEmailSignIn}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <View className="gap-4">
          {/* OAuth Buttons - Horizontal Layout */}
          <View className="items-center">
            <Text className="text-center text-gray-600 font-medium mb-4">
              Sign in with
            </Text>
            <View className="flex-row justify-center gap-4">
              <OAuthButton
                provider="google"
                onPress={() => handleOAuthSignIn("google")}
                loading={oauthLoading === "google"}
              />
              <OAuthButton
                provider="github"
                onPress={() => handleOAuthSignIn("github")}
                loading={oauthLoading === "github"}
              />
              <OAuthButton
                provider="discord"
                onPress={() => handleOAuthSignIn("discord")}
                loading={oauthLoading === "discord"}
              />
            </View>
          </View>

          {/* Divider */}
          <View className="flex-row items-center my-4">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-500 font-medium">or</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Email/Password Form */}
          <View className="gap-4">
            <InputWithLabel
              size="md"
              variant="rounded"
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              error={touched.email && errors.email ? errors.email : undefined}
            />
            <InputWithLabel
              size="md"
              variant="rounded"
              label="Password"
              isPassword
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="Enter your password"
              error={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
            />

            <Button
              title={loading ? "Signing In..." : "Sign In with Email"}
              onPress={handleSubmit}
              variant="primary"
              fullWidth
              disabled={loading}
            />
          </View>

          {/* Sign Up Link */}
          <View className="flex-row justify-center items-center mt-4">
            <Text className="text-gray-600 font-montserrat">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
              <Text className="text-primary-500 font-avalar-bold ml-1">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </FormWrapper>
  );
};

export default LoginForm;
