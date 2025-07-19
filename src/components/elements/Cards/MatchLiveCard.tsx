import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  liveItem: MatchType;
  onPress?: (match: MatchType) => void;
}

const MatchLiveCard = ({ liveItem, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.(liveItem)}
      activeOpacity={0.9}
      className=""
    >
      <LinearGradient
        colors={["#fff", "#9ca3af", "#000"]}
        locations={[0, 0.5, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 25,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 4,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        {/* Live Indicator */}
        {liveItem.isLive && (
          <View className="absolute top-3 right-3 z-10 bg-gray-400">
            <View className="flex-row items-center bg-red-500 px-2 py-1 rounded-full">
              <View className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
              <Text className="text-white text-xs font-montserrat-bold">
                LIVE
              </Text>
            </View>
          </View>
        )}

        <View className="p-6">
          {/* League Type */}
          <View className="flex-row justify-center mb-4">
            <Text className="text-xs font-montserrat-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {liveItem.leagueType}
            </Text>
          </View>

          {/* Teams and Score */}
          <View className="flex-row justify-between items-center mb-6">
            {/* Team 1 */}
            <View className="flex-1 items-center">
              <View className="w-16 h-16 mb-2">
                <Image
                  source={{ uri: liveItem.team1.logo }}
                  className="w-full h-full rounded-full"
                  contentFit="cover"
                />
              </View>
              <Text
                className="text-sm font-avalar text-gray-800 text-center"
                numberOfLines={2}
              >
                {liveItem.team1.name}
              </Text>
              <Text className="text-xs font-montserrat text-gray-500 mt-1">
                {liveItem.team1.former}
              </Text>
            </View>

            {/* Score and Duration */}
            <View className="flex-col items-center mx-4">
              <Text className="text-3xl font-space-mono text-gray-900 mb-1">
                {liveItem.score}
              </Text>
              <Text className="text-xs font-montserrat-medium text-gray-400">
                {liveItem.duration}
              </Text>
              {liveItem.isLive && (
                <View className="flex-row items-center mt-1">
                  <View className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1" />
                  <Text className="text-xs font-montserrat-medium text-red-500">
                    Live
                  </Text>
                </View>
              )}
            </View>

            {/* Team 2 */}
            <View className="flex-1 items-center">
              <View className="w-16 h-16 mb-2">
                <Image
                  source={{ uri: liveItem.team2.logo }}
                  className="w-full h-full rounded-full"
                  contentFit="cover"
                />
              </View>
              <Text
                className="text-sm font-avalar text-gray-800 text-center"
                numberOfLines={2}
              >
                {liveItem.team2.name}
              </Text>
              <Text className="text-xs font-montserrat text-gray-500 mt-1">
                {liveItem.team2.former}
              </Text>
            </View>
          </View>

          {/* Win Probability */}
          <View className="bg-gray-50 rounded-xl p-4">
            <Text className="text-xs font-montserrat-medium text-gray-600 mb-3 text-center">
              Win Probability
            </Text>
            <View className="flex-row justify-between gap-3">
              {liveItem.winProbability.map(
                (win: {
                  id: number;
                  team: string;
                  probability: string;
                  percentage: number;
                }) => (
                  <View
                    key={win.id}
                    className="flex-1 bg-white rounded-lg p-3 border border-gray-100"
                  >
                    <Text className="text-xs font-montserrat text-gray-500 text-center mb-1">
                      {win.team}
                    </Text>
                    <Text className="text-lg font-space-mono text-gray-900 text-center">
                      {win.probability}
                    </Text>
                    <View className="mt-2">
                      <View className="w-full bg-gray-200 rounded-full h-1.5">
                        <View
                          className="bg-blue-500 h-1.5 rounded-full"
                          style={{ width: `${win.percentage}%` }}
                        />
                      </View>
                      <Text className="text-xs font-montserrat text-gray-500 text-center mt-1">
                        {win.percentage}%
                      </Text>
                    </View>
                  </View>
                )
              )}
            </View>
          </View>

          {/* Action Button */}
          <TouchableOpacity
            className="mt-4 bg-blue-500 py-3 rounded-xl"
            activeOpacity={0.8}
          >
            <Text className="text-white font-montserrat-bold text-center">
              Place Bet
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MatchLiveCard;
