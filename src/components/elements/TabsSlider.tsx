import React, { useState } from "react";
import { View, Text, useWindowDimensions, Alert } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Ionicons from "@expo/vector-icons/Ionicons";

interface TabsSliderProps {
  tabLabel: TabLabelType[];
  TabScreen: React.ReactNode[];
}

const TabsSlider: React.FC<TabsSliderProps> = ({ tabLabel, TabScreen }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  // Create routes from tabLabel - this will update when tabLabel changes
  const routes = tabLabel.map((tab, idx) => ({
    key: idx.toString(),
    title: tab.label,
    icon: tab.icon,
  }));

  // Map each tab to a scene
  const renderScene = SceneMap(
    tabLabel.reduce((scenes, _label, idx) => {
      scenes[idx.toString()] = () => (
        <View style={{ flex: 1 }}>{TabScreen[idx]}</View>
      );
      return scenes;
    }, {} as { [key: string]: React.ComponentType })
  );

  // Custom TabBar for styling
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled={false}
      indicatorContainerStyle={{
        borderRadius: 20,
        overflow: "hidden",
        height: 40,
        marginVertical: 4,
        marginHorizontal: 4,
        backgroundColor: "transparent",
      }}
      indicatorStyle={{
        backgroundColor: "#fff",
        borderRadius: 20,
        height: 40,
        marginVertical: 0,
      }}
      style={{
        backgroundColor: "#222C",
        elevation: 0,
        borderRadius: 23,
        shadowOpacity: 0,
        marginBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      activeColor="#000"
      tabStyle={{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "transparent",
      }}
      renderLabel={({
        route,
        focused,
      }: {
        route: { title: string; icon?: { name: string; color: string } };
        focused: boolean;
      }) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              paddingHorizontal: 8,
              paddingVertical: 8,
            }}
          >
            {/* Conditional icon rendering */}
            {route.icon && route.icon.name ? (
              <Ionicons
                name={route.icon.name as any}
                size={18}
                color={focused ? route.icon.color : "#888"}
              />
            ) : null}

            <Text
              style={{
                color: focused ? "#000" : "#888",
                fontWeight: focused ? "bold" : "normal",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              {route.title || "No Title"}
            </Text>
          </View>
        );
      }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      swipeEnabled
    />
  );
};

export default TabsSlider;
