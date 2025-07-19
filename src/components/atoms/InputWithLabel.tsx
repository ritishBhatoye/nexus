import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  ColorSchemeName,
  TouchableOpacity,
} from "react-native";
import { useColorScheme } from "react-native";

type InputSize = "sm" | "md" | "lg";
type InputWidth = "full" | "half";
type InputVariant = "box" | "outline" | "rounded";

interface InputWithLabelProps extends TextInputProps {
  label?: string;
  size?: InputSize;
  width?: InputWidth;
  variant?: InputVariant;
  isPassword?: boolean;
  onForgotPassword?: () => void;
  error?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  size = "md",
  width = "full",
  variant = "box",
  isPassword,
  onForgotPassword,
  error,
  ...rest
}) => {
  const colorScheme: ColorSchemeName = useColorScheme();
  const isDarkMode: boolean = colorScheme === "dark";
  const [showPassword, setShowPassword] = useState(false);

  const sizeStyles = {
    sm: "text-sm p-2",
    md: "text-base p-3",
    lg: "text-lg p-4",
  };

  const widthStyles = {
    full: "w-full",
    half: "w-1/2",
  };

  const variantStyles = {
    box: "bg-white border border-border-light rounded-lg",
    outline: "bg-transparent border-b border-border-medium",
    rounded: "bg-transparent border-[0.5px] rounded-full border-border-medium",
  };

  const labelClassName = `font-avalar-bold mb-2 ${
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base"
  } ${isDarkMode ? "text-white" : "text-gray-800"}`;

  const containerClassName = `mb-4 ${widthStyles[width]}`;
  const inputContainerClassName = `flex-row items-center ${
    variantStyles[variant]
  } ${sizeStyles[size]} ${error ? "border-red-500" : ""}`;
  const inputClassName = `flex-1 font-montserrat ${
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base"
  } ${isDarkMode ? "text-white" : "text-gray-900"}`;

  const errorClassName = `text-red-500 font-montserrat text-xs`;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className={containerClassName}>
      {/* Label */}
      {label && <Text className={labelClassName}>{label}</Text>}

      {/* Input Container */}
      <View className={inputContainerClassName}>
        <TextInput
          className={inputClassName}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isPassword ? !showPassword : secureTextEntry}
          placeholderTextColor={isDarkMode ? "#9CA3AF" : "#6B7280"}
          {...rest}
        />

        {/* Password Toggle Icon */}
        {isPassword && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            className="ml-2 "
            activeOpacity={0.7}
          >
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              color={isDarkMode ? "#9CA3AF" : "#6B7280"}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {error && (
        <View className="flex flex-row items-center gap-0.5 ml-4 mt-1.5">
          <Ionicons name="information-circle-outline" size={12} color={"red"} />
          <Text className={errorClassName}>{error}</Text>
        </View>
      )}

      {/* Forgot Password Link */}
      {isPassword && onForgotPassword && (
        <TouchableOpacity
          onPress={onForgotPassword}
          className="self-end mt-2"
          activeOpacity={0.7}
        >
          <Text className="text-primary-500 font-montserrat-medium text-sm">
            Forgot your password?
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputWithLabel;
