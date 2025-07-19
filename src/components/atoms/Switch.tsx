import React from "react";
import { TouchableOpacity, Animated } from "react-native";

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
  thumbColor?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  width?: number;
  height?: number;
}

const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  activeColor = "#FF4B00",
  inactiveColor = "#E5E5EA",
  thumbColor = "#FFFFFF",
  disabled = false,
  size = "medium",
  width,
  height,
}) => {
  // Size configurations
  const sizeConfig = {
    small: { width: 40, height: 24, thumbSize: 18 },
    medium: { width: 51, height: 31, thumbSize: 27 },
    large: { width: 60, height: 36, thumbSize: 32 },
  };

  const config = sizeConfig[size];
  const switchWidth = width || config.width;
  const switchHeight = height || config.height;
  const thumbSize = config.thumbSize;
  const thumbOffset = (switchHeight - thumbSize) / 2;
  const trackPadding = 2;

  const translateX = value
    ? switchWidth - thumbSize - trackPadding * 2
    : trackPadding;

  const backgroundColor = disabled
    ? "#C7C7CC"
    : value
      ? activeColor
      : inactiveColor;

  return (
    <TouchableOpacity
      onPress={() => !disabled && onValueChange(!value)}
      activeOpacity={disabled ? 1 : 0.8}
      style={{
        width: switchWidth,
        height: switchHeight,
        backgroundColor,
        borderRadius: switchHeight / 2,
        padding: trackPadding,
        justifyContent: "center",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Animated.View
        style={{
          width: thumbSize,
          height: thumbSize,
          backgroundColor: thumbColor,
          borderRadius: thumbSize / 2,
          transform: [{ translateX }],
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      />
    </TouchableOpacity>
  );
};

export default Switch;
