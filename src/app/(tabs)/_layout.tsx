import { Router, Tabs, useRouter } from "expo-router";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { HapticTab } from "@/src/components/HapticTab";

// import { useColorScheme } from "@/hooks/useColorScheme";
// import TopMenuBar from "@/src/components/home/TopMenuBar";
import { SafeAreaView } from "react-native";

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const router: Router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#000000",
          borderTopWidth: 0,
          paddingTop: 20,
          elevation: 0,
          marginHorizontal: 20,
          bottom: 20,
          borderRadius: 40,
        },
      }}
    >
      {/* Home Feed */}
      <Tabs.Screen
        name="index"
        options={{
          header: () => (
            <SafeAreaView className="bg-white">
              {/* <TopMenuBar /> */}
            </SafeAreaView>
          ),
          headerShown: true,
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "flame" : "flame-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* Discover/Explore */}
      <Tabs.Screen
        name="discover"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "compass" : "compass-outline"}
              color={color}
            />
          ),
        }}
      />
      {/* Create Post (center, standout) */}
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={38}
              name={focused ? "add-circle" : "add-circle-outline"}
              color="#FFD600" // Gold/yellow for standout
              style={{
                shadowColor: "#FFD600",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 6,
                elevation: 8,
              }}
            />
          ),
          tabBarLabel: "",
        }}
      />
      {/* Categories */}
      <Tabs.Screen
        name="categories"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "grid" : "grid-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* AI Assistant */}
      <Tabs.Screen
        name="ai"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "sparkles" : "sparkles-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* Profile/Settings */}
      <Tabs.Screen
        name="settings"
        options={{
          href: null,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back-outline"
              color={"white"}
              size={27}
            />
          ),
          title: "",
          headerStyle: { backgroundColor: "#000" },
          headerShown: true,
          headerTitle: "Profile",
          headerTitleStyle: { color: "#fff", fontWeight: 600, fontSize: 20 },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
