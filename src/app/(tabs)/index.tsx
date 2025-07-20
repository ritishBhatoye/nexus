import TabsSlider from "@/src/components/elements/TabsSlider";
import PostFeed from "@/src/components/home/PostFeed";
import { homeTabsData } from "@/src/constants/home";
import { Link } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <>
      <TabsSlider
        tabLabel={homeTabsData as any}
        TabScreen={[<PostFeed />, <PostFeed />, <></>, <PostFeed />]}
      />
    </>
  );
};

export default Home;
