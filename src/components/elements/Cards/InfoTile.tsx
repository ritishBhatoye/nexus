import React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
interface props {
  info: InfoTileType;
}
const InfoTile = ({ info }: props) => {
  return (
    <View className="flex-col gap-2">
      <View className="flex flex-row ">
        <Image source={{ uri: info?.profileUrl }} />
        <View className="flex-col items-start">
          <Text className="text-2xl ">{info?.communityName}</Text>
          <View className="flex-row">
            <Text className="">{info?.company?.name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoTile;
