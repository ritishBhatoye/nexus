import TabsSlider from "@/src/components/elements/TabsSlider";
import { homeTabsData } from "@/src/constants/home";
import { Link } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="">
      <TabsSlider tabLabel={homeTabsData} TabScreen={[]}></TabsSlider>
      <Link href="/(auth)/register">
        <Text>Home</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Home;
