import { Link } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="">
      <Link href="/(auth)/register">
        <Text>Home</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Home;
 