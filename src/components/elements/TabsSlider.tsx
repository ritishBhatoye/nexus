import React, { useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

interface TabsSliderProps {
  tabLabel: string[];
  TabScreen: React.ReactNode[];
}

const TabsSlider: React.FC<TabsSliderProps> = ({ tabLabel, TabScreen }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState(
    tabLabel.map((label, idx) => ({ key: idx.toString(), title: label }))
  );

  // Map each tab to a scene
  const renderScene = SceneMap(
    tabLabel.reduce(
      (scenes, label, idx) => {
        scenes[idx.toString()] = () => (
          <View style={{ flex: 1 }}>{TabScreen[idx]}</View>
        );
        return scenes;
      },
      {} as { [key: string]: React.ComponentType }
    )
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
        route: { title: string };
        focused: boolean;
      }) => (
        <Text
          style={{
            color: focused ? "#000" : "#888",
            fontWeight: focused ? "bold" : "normal",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {route.title}
        </Text>
      )}
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
