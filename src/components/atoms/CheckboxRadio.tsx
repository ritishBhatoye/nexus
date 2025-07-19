import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, ColorSchemeName } from "react-native";
import { useColorScheme } from "react-native";

type CheckboxRadioType = "square" | "radio";
type CheckboxRadioSize = "sm" | "md" | "lg";

interface CheckboxRadioProps {
  type: CheckboxRadioType;
  checked: boolean;
  onPress: () => void;
  label?: string;
  size?: CheckboxRadioSize;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  error?: string;
}

const CheckboxRadio: React.FC<CheckboxRadioProps> = ({
  type,
  checked,
  onPress,
  label,
  size = "md",
  disabled = false,
  className = "",
  labelClassName = "",
  error,
}) => {
  const colorScheme: ColorSchemeName = useColorScheme();
  const isDarkMode: boolean = colorScheme === "dark";

  const sizeStyles = {
    sm: {
      container: "w-4 h-4",
      icon: 12,
      label: "text-sm",
    },
    md: {
      container: "w-5 h-5",
      icon: 16,
      label: "text-base",
    },
    lg: {
      container: "w-6 h-6",
      icon: 20,
      label: "text-lg",
    },
  };

  const getIconName = (): keyof typeof Ionicons.glyphMap => {
    if (type === "square") {
      return checked ? "checkbox" : "square-outline";
    } else {
      return checked ? "radio-button-on" : "radio-button-off";
    }
  };

  const getContainerStyle = (): string => {
    const baseStyle = `items-center justify-center rounded-md border-2 ${sizeStyles[size].container}`;

    if (disabled) {
      return `${baseStyle} border-gray-300 bg-gray-100`;
    }

    if (error) {
      return `${baseStyle} border-red-500 bg-white`;
    }

    if (checked) {
      if (type === "square") {
        return `${baseStyle} border-primary-500 bg-primary-500`;
      } else {
        return `${baseStyle} border-primary-500`;
      }
    } else {
      return `${baseStyle} border-gray-400 bg-white`;
    }
  };

  const getIconColor = (): string => {
    if (disabled) {
      return "#9CA3AF";
    }
    return checked ? "#FFFFFF" : "#6B7280";
  };

  const getLabelStyle = (): string => {
    const baseStyle = `font-montserrat ${sizeStyles[size].label}`;

    if (disabled) {
      return `${baseStyle} text-gray-400 ${labelClassName}`;
    }

    return `${baseStyle} ${
      isDarkMode ? "text-white" : "text-gray-800"
    } ${labelClassName}`;
  };

  const errorClassName = `text-red-500 font-montserrat text-sm mt-1`;

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        className={`flex-row items-center ${className}`}
        activeOpacity={disabled ? 1 : 0.7}
      >
        <View className={getContainerStyle()}>
          {checked && (
            <Ionicons
              name={getIconName()}
              size={sizeStyles[size].icon}
              color={getIconColor()}
            />
          )}
          {!checked && type === "square" && (
            <Ionicons
              name={getIconName()}
              size={sizeStyles[size].icon}
              color={getIconColor()}
            />
          )}
          {!checked && type === "radio" && (
            <Ionicons
              name={getIconName()}
              size={sizeStyles[size].icon}
              color={getIconColor()}
            />
          )}
        </View>

        {label && <Text className={`ml-3 ${getLabelStyle()}`}>{label}</Text>}
      </TouchableOpacity>

      {/* Error Message */}
      {error && <Text className={errorClassName}>{error}</Text>}
    </View>
  );
};

export default CheckboxRadio;
