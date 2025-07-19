import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Social = () => {
  const friends = [
    {
      id: 1,
      name: "Rahul Sharma",
      avatar: "https://via.placeholder.com/50",
      status: "Online",
      winRate: "72%",
      totalWins: 156,
      isOnline: true,
    },
    {
      id: 2,
      name: "Priya Patel",
      avatar: "https://via.placeholder.com/50",
      status: "Last seen 2h ago",
      winRate: "68%",
      totalWins: 142,
      isOnline: false,
    },
    {
      id: 3,
      name: "Amit Kumar",
      avatar: "https://via.placeholder.com/50",
      status: "Online",
      winRate: "75%",
      totalWins: 203,
      isOnline: true,
    },
  ];

  const leaderboard = [
    {
      rank: 1,
      name: "BetMaster Pro",
      wins: 245,
      winRate: "78%",
      avatar: "https://via.placeholder.com/40",
    },
    {
      rank: 2,
      name: "Lucky Striker",
      wins: 198,
      winRate: "72%",
      avatar: "https://via.placeholder.com/40",
    },
    {
      rank: 3,
      name: "Goal Hunter",
      wins: 176,
      winRate: "69%",
      avatar: "https://via.placeholder.com/40",
    },
    {
      rank: 4,
      name: "You",
      wins: 156,
      winRate: "68%",
      avatar: "https://via.placeholder.com/40",
    },
    {
      rank: 5,
      name: "Sports Guru",
      wins: 134,
      winRate: "65%",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  const achievements = [
    {
      id: 1,
      name: "First Win",
      description: "Win your first bet",
      icon: "trophy",
      color: "#FFD700",
      unlocked: true,
    },
    {
      id: 2,
      name: "Streak Master",
      description: "Win 5 bets in a row",
      icon: "flame",
      color: "#FF6B35",
      unlocked: true,
    },
    {
      id: 3,
      name: "High Roller",
      description: "Place a bet of ₹10,000+",
      icon: "diamond",
      color: "#9C27B0",
      unlocked: false,
    },
    {
      id: 4,
      name: "Social Butterfly",
      description: "Add 10 friends",
      icon: "people",
      color: "#4CAF50",
      unlocked: true,
    },
  ];

  const socialBets = [
    {
      id: 1,
      creator: "Rahul Sharma",
      match: "Manchester United vs Liverpool",
      pick: "Over 2.5 Goals",
      participants: 24,
      totalPool: "₹12,000",
      timeLeft: "2h 30m",
      isFollowing: true,
    },
    {
      id: 2,
      creator: "Priya Patel",
      match: "Arsenal vs Chelsea",
      pick: "Arsenal Win",
      participants: 18,
      totalPool: "₹8,500",
      timeLeft: "1h 45m",
      isFollowing: false,
    },
  ];

  return (
    <ScrollView
      className="flex-1 bg-transparent"
      showsVerticalScrollIndicator={false}
    >
      <View className="p-4">
        {/* Social Stats */}
        <View className="bg-gray-800 rounded-2xl p-5 mb-5">
          <Text className="text-white text-xl font-bold mb-4">
            Social Stats
          </Text>
          <View className="flex-row justify-between flex-wrap">
            <View className="items-center mb-4 w-[48%]">
              <Text className="text-gray-400 text-sm">Friends</Text>
              <Text className="text-white text-2xl font-bold">24</Text>
            </View>
            <View className="items-center mb-4 w-[48%]">
              <Text className="text-gray-400 text-sm">Followers</Text>
              <Text className="text-white text-2xl font-bold">156</Text>
            </View>
            <View className="items-center mb-4 w-[48%]">
              <Text className="text-gray-400 text-sm">Following</Text>
              <Text className="text-white text-2xl font-bold">89</Text>
            </View>
            <View className="items-center mb-4 w-[48%]">
              <Text className="text-gray-400 text-sm">Achievements</Text>
              <Text className="text-yellow-500 text-2xl font-bold">12</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="flex-row justify-between mb-5">
          <TouchableOpacity className="bg-green-500 p-3 rounded-xl flex-1 mr-2 items-center">
            <Ionicons name="add-circle-outline" size={20} color="#fff" />
            <Text className="text-white text-xs mt-1">Add Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-500 p-3 rounded-xl flex-1 ml-2 items-center">
            <Ionicons name="people-outline" size={20} color="#fff" />
            <Text className="text-white text-xs mt-1">Create Bet</Text>
          </TouchableOpacity>
        </View>

        {/* Friends Online */}
        <View className="mb-5">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-lg font-bold">Friends Online</Text>
            <TouchableOpacity>
              <Text className="text-blue-500 text-sm">View All</Text>
            </TouchableOpacity>
          </View>

          {friends.map((friend) => (
            <View
              key={friend.id}
              className="bg-gray-800 rounded-xl p-4 mb-3 flex-row items-center"
            >
              <View className="relative mr-3">
                <Image
                  source={{ uri: friend.avatar }}
                  className="w-12 h-12 rounded-full"
                />
                <View
                  className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-gray-800 ${friend.isOnline ? "bg-green-500" : "bg-gray-400"}`}
                />
              </View>

              <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="text-white text-base font-bold">
                    {friend.name}
                  </Text>
                  <Text className="text-green-500 text-sm font-bold">
                    {friend.winRate}
                  </Text>
                </View>

                <Text className="text-gray-400 text-xs mb-1">
                  {friend.status}
                </Text>

                <Text className="text-gray-400 text-xs">
                  {friend.totalWins} total wins
                </Text>
              </View>

              <TouchableOpacity className="bg-blue-500 px-3 py-1.5 rounded-lg">
                <Text className="text-white text-xs font-bold">Challenge</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Leaderboard */}
        <View className="mb-5">
          <Text className="text-white text-lg font-bold mb-4">
            Weekly Leaderboard
          </Text>
          <View className="bg-gray-800 rounded-2xl p-4">
            {leaderboard.map((player, index) => (
              <View
                key={player.rank}
                className={`flex-row items-center py-3 ${index < leaderboard.length - 1 ? "border-b border-gray-700" : ""}`}
              >
                <View
                  className={`w-8 h-8 rounded-full justify-center items-center mr-3 ${player.rank <= 3 ? "bg-yellow-500" : "bg-gray-700"}`}
                >
                  <Text
                    className={`text-sm font-bold ${player.rank <= 3 ? "text-black" : "text-white"}`}
                  >
                    {player.rank}
                  </Text>
                </View>

                <Image
                  source={{ uri: player.avatar }}
                  className="w-10 h-10 rounded-full mr-3"
                />

                <View className="flex-1">
                  <Text
                    className={`text-base ${player.name === "You" ? "text-green-500 font-bold" : "text-white"}`}
                  >
                    {player.name}
                  </Text>
                  <Text className="text-gray-400 text-xs">
                    {player.wins} wins • {player.winRate} win rate
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Achievements */}
        <View className="mb-5">
          <Text className="text-white text-lg font-bold mb-4">
            Achievements
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {achievements.map((achievement) => (
              <View
                key={achievement.id}
                className={`bg-gray-800 rounded-xl p-4 w-[48%] mb-3 items-center ${achievement.unlocked ? "opacity-100" : "opacity-50"}`}
              >
                <Ionicons
                  name={achievement.icon as any}
                  size={32}
                  color={achievement.unlocked ? achievement.color : "#888"}
                />
                <Text
                  className={`text-sm font-bold mt-2 text-center ${achievement.unlocked ? "text-white" : "text-gray-400"}`}
                >
                  {achievement.name}
                </Text>
                <Text className="text-gray-400 text-xs text-center mt-1">
                  {achievement.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Social Bets */}
        <View className="mb-5">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-lg font-bold">Social Bets</Text>
            <TouchableOpacity>
              <Text className="text-blue-500 text-sm">View All</Text>
            </TouchableOpacity>
          </View>

          {socialBets.map((bet) => (
            <View key={bet.id} className="bg-gray-800 rounded-xl p-4 mb-3">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-white text-base font-bold">
                  {bet.creator}
                </Text>
                <TouchableOpacity
                  className={`px-3 py-1.5 rounded-lg ${bet.isFollowing ? "bg-green-500" : "bg-gray-700"}`}
                >
                  <Text className="text-white text-xs font-bold">
                    {bet.isFollowing ? "Following" : "Follow"}
                  </Text>
                </TouchableOpacity>
              </View>

              <Text className="text-gray-400 text-sm mb-2">{bet.match}</Text>

              <Text className="text-orange-500 text-sm font-bold mb-2">
                Pick: {bet.pick}
              </Text>

              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <Ionicons name="people" size={16} color="#888" />
                  <Text className="text-gray-400 text-xs ml-1">
                    {bet.participants} participants
                  </Text>
                </View>
                <Text className="text-green-500 text-sm font-bold">
                  {bet.totalPool}
                </Text>
                <Text className="text-orange-500 text-xs">{bet.timeLeft}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Community Features */}
        <View className="bg-gray-800 rounded-2xl p-5 mb-5">
          <Text className="text-white text-lg font-bold mb-4">
            Community Features
          </Text>
          <View className="flex-row justify-between flex-wrap">
            <TouchableOpacity className="bg-gray-700 rounded-xl p-4 w-[48%] mb-3 items-center">
              <Ionicons name="chatbubbles" size={24} color="#2196F3" />
              <Text className="text-white text-sm font-bold mt-2">Forums</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-700 rounded-xl p-4 w-[48%] mb-3 items-center">
              <Ionicons name="calendar" size={24} color="#4CAF50" />
              <Text className="text-white text-sm font-bold mt-2">Events</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-700 rounded-xl p-4 w-[48%] mb-3 items-center">
              <Ionicons name="trophy" size={24} color="#FFD700" />
              <Text className="text-white text-sm font-bold mt-2">
                Tournaments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-700 rounded-xl p-4 w-[48%] mb-3 items-center">
              <Ionicons name="school" size={24} color="#9C27B0" />
              <Text className="text-white text-sm font-bold mt-2">Tips</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Social;
