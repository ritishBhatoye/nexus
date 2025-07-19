import AuthLayout from "@/src/components/global/AuthLayout";
import React from "react";
import RegisterForm from "../components/forms/register";

const RegisterScreen = () => {
  return (
    <AuthLayout
      isBackCTAText
      title="Join the Community"
      subTitle="Every voice counts. Start sharing your thoughts and connect with like-minded people."
      isBackCTA
    >
      <RegisterForm handleSubmit={() => {}} />
    </AuthLayout>
  );
};

export default RegisterScreen;
