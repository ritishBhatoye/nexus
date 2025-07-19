import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { View, Text } from "react-native";

interface props {
  fieldText?: string;
  icon?: any;
  isLeadingIcon?: boolean;
}

const SearchInputField = ({
  fieldText = `Search for Events, Teams`,
  icon = "mic",
  isLeadingIcon = true,
}: props) => {
  return (
    <View className="flex flex-row border-0 w-full bg-gray-200 rounded-xl gap-4 p-3  items-center justify-between">
      <View className="gap-2 px-2 flex flex-row items-center border-r w-11/12 border-gray-400 ">
        {isLeadingIcon && (
          <Ionicons name="search" size={20} color={"#9ca3af"} className="" />
        )}
        <Text className="text-md text-gray-400 font-montserrat">
          {fieldText}
        </Text>
      </View>
      <Ionicons name={icon} size={20} color={"#EF4F27"} />
    </View>
  );
};

export default SearchInputField;
