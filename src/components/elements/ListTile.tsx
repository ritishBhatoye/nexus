import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

interface ListTileProps {
  title: string;
  subtitle?: string;
  leading: any; // Icon name for leading
  trailing?: any; // Icon name for trailing
  onPress?: () => void;
  dense?: boolean;
  imageSrc?: any;
  titleClassName?: string;
  className?: string;
  color?: string;
}

export const ListTile = ({
  title,
  subtitle,
  leading,
  trailing = "chevron-forward",
  onPress,
  dense = false,
  imageSrc,
  titleClassName = "text-base font-avalar text-gray-900",
  className = "",
  color,
}: ListTileProps) => {
  const containerClass = `flex-row items-center rounded-2xl px-4 ${
    dense ? "py-2" : "py-4"
  } bg-white active:bg-[#BF8A66] ${className}`;

  return (
    <Pressable onPress={onPress} className={containerClass}>
      {/* Leading element (icon name) */}
      {leading && (
        <View className="mr-4">
          <Ionicons name={leading} size={20} color={color} />
        </View>
      )}

      {/* Image (if provided) */}
      {imageSrc && (
        <Image source={imageSrc} className="w-12 h-12 rounded-full mr-4" />
      )}

      {/* Title and Subtitle */}
      <View className="flex-1">
        <Text className={titleClassName}>{title}</Text>
        {subtitle && (
          <Text className="text-sm font-montserrat text-gray-500">
            {subtitle}
          </Text>
        )}
      </View>

      {/* Trailing element (icon name) */}
      {trailing && (
        <View>
          <Ionicons name={trailing} size={20} color={color} />
        </View>
      )}
    </Pressable>
  );
};
