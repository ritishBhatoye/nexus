import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Pick = () => {
  const recentPicks = [
    {
      id: 1,
      team: "Manchester United",
      opponent: "Liverpool",
      pick: "Over 2.5 Goals",
      odds: "1.85",
      stake: "₹500",
      result: "Won",
      profit: "+₹425",
      date: "Today",
    },
    {
      id: 2,
      team: "Arsenal",
      opponent: "Chelsea",
      pick: "Arsenal Win",
      odds: "2.10",
      stake: "₹300",
      result: "Lost",
      profit: "-₹300",
      date: "Yesterday",
    },
    {
      id: 3,
      team: "Barcelona",
      opponent: "Real Madrid",
      pick: "Both Teams Score",
      odds: "1.65",
      stake: "₹400",
      result: "Won",
      profit: "+₹260",
      date: "2 days ago",
    },
  ];

  const stats = {
    totalPicks: 156,
    winRate: 68,
    totalProfit: "+₹12,450",
    avgOdds: "1.85",
    streak: 5,
  };

  return (
    <ScrollView
      className="flex-1 bg-transparent"
      showsVerticalScrollIndicator={false}
    >
      <View className="p-4">
        {/* Stats Overview */}
        <View className="bg-gray-800 rounded-2xl p-5 mb-5">
          <Text className="text-white text-xl font-bold mb-4">
            Pick Statistics
          </Text>
          <View className="flex-row justify-between flex-wrap">
            <View className="items-center mb-4 w-[48%]">
              <Text className="text-gray-400 text-sm">Total Picks</Text>
              <Text className="text-white text-2xl font-bold">
                {stats.totalPicks}
              </Text>
            </View>
            <View className="items-center mb-4 w-[48%]">
              <Text className="text-gray-400 text-sm">Win Rate</Text>
              <Text className="text-green-500 text-2xl font-bold">
                {stats.winRate}%
              </Text>
            </View>
            <View className="items-center mb-4 w-[48%]">
              <Text className="text-gray-400 text-sm">Total Profit</Text>
              <Text className="text-green-500 text-2xl font-bold">
                {stats.totalProfit}
              </Text>
            </View>
            <View className="items-center mb-4 w-[48%]">
              <Text className="text-gray-400 text-sm">Current Streak</Text>
              <Text className="text-orange-500 text-2xl font-bold">
                {stats.streak}
              </Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="flex-row justify-between mb-5">
          <TouchableOpacity className="bg-green-500 p-3 rounded-xl flex-1 mr-2 items-center">
            <Ionicons name="add-circle-outline" size={20} color="#fff" />
            <Text className="text-white text-xs mt-1">New Pick</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-500 p-3 rounded-xl flex-1 ml-2 items-center">
            <Ionicons name="analytics-outline" size={20} color="#fff" />
            <Text className="text-white text-xs mt-1">Analytics</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Picks */}
        <View className="mb-5">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-lg font-bold">Recent Picks</Text>
            <TouchableOpacity>
              <Text className="text-blue-500 text-sm">View All</Text>
            </TouchableOpacity>
          </View>

          {recentPicks.map((pick) => (
            <View key={pick.id} className="bg-gray-800 rounded-xl p-4 mb-3">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-white text-base font-bold">
                  {pick.team} vs {pick.opponent}
                </Text>
                <View
                  className={`px-2 py-1 rounded-lg ${pick.result === "Won" ? "bg-green-500" : "bg-red-500"}`}
                >
                  <Text className="text-white text-xs font-bold">
                    {pick.result}
                  </Text>
                </View>
              </View>

              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-gray-400 text-sm">Pick: {pick.pick}</Text>
                <Text className="text-gray-400 text-sm">Odds: {pick.odds}</Text>
              </View>

              <View className="flex-row justify-between items-center">
                <Text className="text-gray-400 text-xs">
                  Stake: {pick.stake}
                </Text>
                <Text
                  className={`text-base font-bold ${pick.result === "Won" ? "text-green-500" : "text-red-500"}`}
                >
                  {pick.profit}
                </Text>
                <Text className="text-gray-400 text-xs">{pick.date}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Performance Chart Placeholder */}
        <View className="bg-gray-800 rounded-2xl p-5 mb-5 items-center">
          <Text className="text-white text-lg font-bold mb-3">
            Performance Chart
          </Text>
          <View className="w-full h-30 bg-gray-700 rounded-xl justify-center items-center">
            <Ionicons name="trending-up" size={40} color="#4CAF50" />
            <Text className="text-gray-400 text-sm mt-2">
              Chart visualization would go here
            </Text>
          </View>
        </View>

        {/* Top Performing Categories */}
        <View className="mb-5">
          <Text className="text-white text-lg font-bold mb-4">
            Top Categories
          </Text>
          <View className="flex-row justify-between">
            <View className="bg-gray-800 rounded-xl p-4 flex-1 mr-2 items-center">
              <Ionicons name="football-outline" size={24} color="#4CAF50" />
              <Text className="text-white text-sm font-bold mt-2">
                Football
              </Text>
              <Text className="text-green-500 text-xs">72% Win Rate</Text>
            </View>
            <View className="bg-gray-800 rounded-xl p-4 flex-1 ml-2 items-center">
              <Ionicons name="basketball-outline" size={24} color="#2196F3" />
              <Text className="text-white text-sm font-bold mt-2">
                Basketball
              </Text>
              <Text className="text-blue-500 text-xs">65% Win Rate</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Pick;
