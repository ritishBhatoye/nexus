import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import SearchInputField from "../atoms/SearchInputField";
import { Router, useRouter } from "expo-router";

const TopMenuBar = () => {
  const router: Router = useRouter();
  return (
    <View className="px-8 gap-3 bg-white">
      <View className="flex flex-row items-end justify-between ">
        <View className="flex flex-col">
          <Text className="text-lg font-montserrat text-gray-600">Hello,</Text>
          <Text className="text-lg font-avalar text-black">RAHUL BHATOYE</Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text className="bg-black p-2 px-5 rounded-lg text-white font-bold text-lg">
              Login
            </Text>
          </TouchableOpacity>
          <Ionicons
            name="add-outline"
            color={"white"}
            size={24}
            className="p-2 rounded-lg bg-orange-500"
          />
        </View>
      </View>
      <SearchInputField />
    </View>
  );
};

export default TopMenuBar;
