import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Wallet = () => {
  const walletData = {
    balance: "₹25,450",
    bonus: "₹1,200",
    totalDeposited: "₹50,000",
    totalWithdrawn: "₹15,000",
    pendingWithdrawals: "₹2,500",
  };

  const transactions = [
    {
      id: 1,
      type: "Deposit",
      amount: "+₹5,000",
      method: "UPI",
      status: "Completed",
      date: "Today, 2:30 PM",
      icon: "arrow-down",
      color: "#4CAF50",
    },
    {
      id: 2,
      type: "Bet Placed",
      amount: "-₹500",
      method: "Betting",
      status: "Active",
      date: "Today, 1:45 PM",
      icon: "football",
      color: "#FF9800",
    },
    {
      id: 3,
      type: "Withdrawal",
      amount: "-₹2,000",
      method: "Bank Transfer",
      status: "Processing",
      date: "Yesterday, 4:20 PM",
      icon: "arrow-up",
      color: "#2196F3",
    },
    {
      id: 4,
      type: "Bonus",
      amount: "+₹200",
      method: "Welcome Bonus",
      status: "Completed",
      date: "2 days ago",
      icon: "gift",
      color: "#9C27B0",
    },
  ];

  const paymentMethods = [
    { id: 1, name: "UPI", icon: "phone-portrait-outline", color: "#4CAF50" },
    { id: 2, name: "Net Banking", icon: "business", color: "#2196F3" },
    { id: 3, name: "Credit Card", icon: "card", color: "#FF9800" },
    { id: 4, name: "Paytm", icon: "wallet", color: "#00BCD4" },
  ];

  return (
    <ScrollView
      className="flex-1 bg-transparent"
      showsVerticalScrollIndicator={false}
    >
      <View className="p-4">
        {/* Balance Overview */}
        <View className="bg-gray-800 rounded-2xl p-5 mb-5">
          <Text className="text-white text-xl font-avalar mb-4">
            Wallet Balance
          </Text>
          <Text className="text-green-500 text-3xl font-space-mono mb-2">
            {walletData.balance}
          </Text>
          <Text className="text-gray-400 text-sm font-montserrat mb-4">
            Available for betting
          </Text>

          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-400 text-sm font-montserrat">
              Bonus Balance
            </Text>
            <Text className="text-orange-500 text-sm font-space-mono">
              {walletData.bonus}
            </Text>
          </View>

          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-400 text-sm font-montserrat">
              Total Deposited
            </Text>
            <Text className="text-white text-sm font-space-mono">
              {walletData.totalDeposited}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400 text-sm font-montserrat">
              Total Withdrawn
            </Text>
            <Text className="text-white text-sm font-space-mono">
              {walletData.totalWithdrawn}
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="flex-row justify-between mb-5">
          <TouchableOpacity className="bg-green-500 p-4 rounded-xl flex-1 mr-2 items-center">
            <Ionicons name="add-circle-outline" size={24} color="#fff" />
            <Text className="text-white text-sm font-montserrat-bold mt-2">
              Deposit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-500 p-4 rounded-xl flex-1 ml-2 items-center">
            <Ionicons name="arrow-up-circle-outline" size={24} color="#fff" />
            <Text className="text-white text-sm font-montserrat-bold mt-2">
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>

        {/* Payment Methods */}
        <View className="mb-5">
          <Text className="text-white text-lg font-avalar mb-4">
            Payment Methods
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {paymentMethods.map((method) => (
              <TouchableOpacity
                key={method.id}
                className="bg-gray-800 rounded-xl p-4 w-[48%] mb-3 items-center"
              >
                <Ionicons
                  name={method.icon as any}
                  size={24}
                  color={method.color}
                />
                <Text className="text-white text-sm font-montserrat-bold mt-2">
                  {method.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Betting Limits */}
        <View className="bg-gray-800 rounded-2xl p-5 mb-5">
          <Text className="text-white text-lg font-avalar mb-4">
            Betting Limits
          </Text>
          <View className="mb-3">
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-400 text-sm font-montserrat">
                Min Bet
              </Text>
              <Text className="text-white text-sm font-space-mono">₹10</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-400 text-sm font-montserrat">
                Max Bet
              </Text>
              <Text className="text-white text-sm font-space-mono">
                ₹50,000
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400 text-sm font-montserrat">
                Daily Limit
              </Text>
              <Text className="text-white text-sm font-space-mono">
                ₹1,00,000
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
        <View className="mb-5">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-lg font-avalar">
              Recent Transactions
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 text-sm font-montserrat">
                View All
              </Text>
            </TouchableOpacity>
          </View>

          {transactions.map((transaction) => (
            <View
              key={transaction.id}
              className="bg-gray-800 rounded-xl p-4 mb-3 flex-row items-center"
            >
              <View
                className="bg-opacity-20 rounded-lg p-2 mr-3"
                style={{ backgroundColor: transaction.color + "20" }}
              >
                <Ionicons
                  name={transaction.icon as any}
                  size={20}
                  color={transaction.color}
                />
              </View>

              <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="text-white text-base font-avalar">
                    {transaction.type}
                  </Text>
                  <Text
                    className={`text-base font-space-mono ${transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                  >
                    {transaction.amount}
                  </Text>
                </View>

                <View className="flex-row justify-between items-center">
                  <Text className="text-gray-400 text-xs font-montserrat">
                    {transaction.method}
                  </Text>
                  <View
                    className={`px-1.5 py-0.5 rounded ${transaction.status === "Completed" ? "bg-green-500" : transaction.status === "Processing" ? "bg-orange-500" : "bg-blue-500"}`}
                  >
                    <Text className="text-white text-xs font-montserrat-bold">
                      {transaction.status}
                    </Text>
                  </View>
                </View>

                <Text className="text-gray-400 text-xs mt-1 font-montserrat">
                  {transaction.date}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Security & Verification */}
        <View className="bg-gray-800 rounded-2xl p-5 mb-5">
          <Text className="text-white text-lg font-avalar mb-4">
            Security & Verification
          </Text>
          <View className="flex-row justify-between mb-3">
            <View className="flex-row items-center">
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text className="text-white text-sm font-montserrat ml-2">
                Email Verified
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#888" />
          </View>
          <View className="flex-row justify-between mb-3">
            <View className="flex-row items-center">
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text className="text-white text-sm font-montserrat ml-2">
                Phone Verified
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#888" />
          </View>
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <Ionicons name="close-circle" size={20} color="#f44336" />
              <Text className="text-gray-400 text-sm font-montserrat ml-2">
                KYC Pending
              </Text>
            </View>
            <TouchableOpacity>
              <Text className="text-blue-500 text-sm font-montserrat">
                Complete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Wallet;
