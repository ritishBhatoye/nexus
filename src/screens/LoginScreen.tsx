import LoginForm from "@/src/components/forms/login";
import AuthLayout from "@/src/components/global/AuthLayout";
import React from "react";

const LoginScreen = () => {
  return (
    <AuthLayout
      title="Welcome Back!"
      subTitle="Your voice matters. Join the conversation and share your perspective with the community."
      isBackCTA
    >
      <LoginForm handleSubmit={() => {}} />
    </AuthLayout>
  );
};

export default LoginScreen;
