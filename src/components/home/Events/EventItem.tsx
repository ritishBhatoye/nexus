import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, Animated } from "react-native";

interface Props {
  event: EventItemType;
  isActive?: boolean;
  onPress: (event: EventItemType) => void;
}

const EventFilterItem = ({ event, isActive = false, onPress }: Props) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (isActive) {
      Animated.spring(scaleAnim, {
        toValue: 1.05,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [isActive]);

  return (
    <Animated.View
      className={"pt-3"}
      style={[
        {
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => onPress(event)}
        activeOpacity={0.7}
        className={`flex flex-row items-center px-3 py-3 rounded-full border ${
          isActive ? "bg-black border-black" : "bg-gray-200 border-gray-200"
        }`}
      >
        <Ionicons
          name={event.icon}
          color={isActive ? "white" : "#6B7280"}
          size={21}
        />
        {isActive && (
          <Text
            className={`text-base font-montserrat-medium ml-2 ${
              isActive ? "text-white" : "text-gray-600"
            }`}
          >
            {event.name}
          </Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default EventFilterItem;
