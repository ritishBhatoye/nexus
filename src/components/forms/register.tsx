import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import InputWithLabel from "../atoms/InputWithLabel";
import Button from "../atoms/Button";
import OAuthButton from "../atoms/OAuthButton";
import { Router, useRouter } from "expo-router";
import CheckboxRadio from "../atoms/CheckboxRadio";
import { RegisterSchema } from "@/src/utils/validationSchemas";
import { FormWrapper } from "../elements/FormWrapper";
import { AuthService } from "@/utils/supabase";
import { useToast } from "@/src/hooks/useToast";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

type RegisterFormProps = {
  handleSubmit: (
    values: typeof initialValues,
    handleSubmit: () => void
  ) => void;
};

const RegisterForm = ({ handleSubmit: onSubmitProp }: RegisterFormProps) => {
  const router: Router = useRouter();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<string | null>(null);

  const handleEmailSignUp = async (values: typeof initialValues) => {
    if (!values.acceptTerms) {
      showToast.error(
        "Terms Required",
        "Please accept the terms and conditions to continue."
      );
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await AuthService.signUp(
        values.email,
        values.password
      );

      if (error) {
        showToast.error(
          "Sign Up Error",
          error.message || "Failed to create account"
        );
        return;
      }

      if (data?.user && !data.user.email_confirmed_at) {
        showToast.success(
          "Check Your Email",
          "We've sent you a confirmation email. Please check your inbox and click the verification link to complete your registration."
        );
        setTimeout(() => {
          router.push("/(auth)/login");
        }, 2000);
      } else {
        showToast.success("Success", "Account created successfully!");
        router.push("/(auth)/login");
      }
    } catch (error: any) {
      showToast.error("Error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthSignUp = async (
    provider: "google" | "github" | "discord" | "twitter"
  ) => {
    setOauthLoading(provider);
    try {
      const { data, error } = await AuthService.signInWithOAuth(provider);

      if (error) {
        showToast.error(
          "OAuth Error",
          error.message || `Failed to sign in with ${provider}`
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
      validationSchema={RegisterSchema}
      onSubmit={handleEmailSignUp}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <View className="gap-4">
          {/* OAuth Buttons - Horizontal Layout */}
          <View className="items-center">
            <Text className="text-center text-gray-600 font-medium mb-4">
              Sign up with
            </Text>
            <View className="flex-row justify-center gap-4">
              <OAuthButton
                provider="google"
                onPress={() => handleOAuthSignUp("google")}
                loading={oauthLoading === "google"}
              />
              <OAuthButton
                provider="github"
                onPress={() => handleOAuthSignUp("github")}
                loading={oauthLoading === "github"}
              />
              <OAuthButton
                provider="discord"
                onPress={() => handleOAuthSignUp("discord")}
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
            <InputWithLabel
              size="md"
              variant="rounded"
              label="Confirm Password"
              isPassword
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              placeholder="Confirm your password"
              error={
                touched.confirmPassword && errors.confirmPassword
                  ? errors.confirmPassword
                  : undefined
              }
            />

            <View className="flex-row items-center gap-2">
              <CheckboxRadio
                type="radio"
                checked={values.acceptTerms}
                onPress={() =>
                  setFieldValue("acceptTerms", !values.acceptTerms)
                }
                label="I accept the terms and conditions"
                size="sm"
                error={
                  touched.acceptTerms && errors.acceptTerms
                    ? errors.acceptTerms
                    : undefined
                }
              />
            </View>

            <Button
              title={loading ? "Creating Account..." : "Sign Up with Email"}
              onPress={handleSubmit}
              variant="primary"
              fullWidth
              disabled={loading}
            />
          </View>

          {/* Sign In Link */}
          <View className="flex-row justify-center items-center mt-4">
            <Text className="text-gray-600 font-montserrat">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text className="text-primary-500 font-avalar-bold ml-1">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </FormWrapper>
  );
};

export default RegisterForm;
