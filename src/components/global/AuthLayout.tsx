import { Ionicons } from "@expo/vector-icons";
import { Router, useRouter } from "expo-router";
import React, { PropsWithChildren, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AuthLayout = ({
  isBackCTA,
  isBackCTAText,
  title,
  subTitle,
  children,
}: PropsWithChildren<{
  isBackCTA?: boolean;
  isBackCTAText?: boolean;
  title: string;
  subTitle: string;
}>) => {
  const router: Router = useRouter();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [headerHeight] = useState(new Animated.Value(0.8));

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardVisible(true);
        Animated.timing(headerHeight, {
          toValue: 0.3,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false);
        Animated.timing(headerHeight, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        {/* Community Header Section */}
        <Animated.View style={{ flex: headerHeight }}>
          <LinearGradient
            colors={["#667eea", "#1e40af", "#172554"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ height: "100%", paddingTop: 6, paddingHorizontal: 16 }}
          >
            {/* Floating Back Button */}
            {isBackCTA && (
              <View className="flex-row items-center mb-6">
                <View className="bg-white/25 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <Ionicons
                    name="chevron-back-outline"
                    color="white"
                    size={20}
                    onPress={() => router.back()}
                  />
                </View>
                {isBackCTAText && (
                  <Text className="text-white/95 text-sm font-montserrat-medium ml-3">
                    Back to Community
                  </Text>
                )}
              </View>
            )}

            {/* Simplified Community Icons - Only show when keyboard is hidden */}
            {!isKeyboardVisible && (
              <View className="flex-row justify-center mb-6">
                <View className="bg-white/20 rounded-full p-2 mx-1">
                  <Ionicons name="people" color="white" size={16} />
                </View>
                <View className="bg-white/20 rounded-full p-2 mx-1">
                  <Ionicons name="chatbubbles" color="white" size={16} />
                </View>
                <View className="bg-white/20 rounded-full p-2 mx-1">
                  <Ionicons name="trending-up" color="white" size={16} />
                </View>
              </View>
            )}

            {/* Title Section - Responsive sizing */}
            <View className="justify-center mb-4">
              <View className="mb-4">
                <Text
                  className={`font-avalar-bold text-white mb-2 ${
                    isKeyboardVisible ? "text-2xl" : "text-4xl"
                  }`}
                >
                  {title}
                </Text>
                <View className="w-16 h-1 bg-white/60 rounded-full" />
              </View>
              <Text
                className={`font-montserrat text-white/90 leading-6 ${
                  isKeyboardVisible ? "text-sm" : "text-lg"
                }`}
              >
                {subTitle}
              </Text>
            </View>

            {/* Community Stats - Only show when keyboard is hidden */}
            {!isKeyboardVisible && (
              <View className="flex-row justify-between mb-6 opacity-80">
                <View className="items-center">
                  <Text className="text-white font-avalar-bold text-xs">
                    Share
                  </Text>
                  <Text className="text-white/70 font-montserrat text-xs">
                    Thoughts
                  </Text>
                </View>
                <View className="items-center">
                  <Text className="text-white font-avalar-bold text-xs">
                    Connect
                  </Text>
                  <Text className="text-white/70 font-montserrat text-xs">
                    With Others
                  </Text>
                </View>
                <View className="items-center">
                  <Text className="text-white font-avalar-bold text-xs">
                    Discover
                  </Text>
                  <Text className="text-white/70 font-montserrat text-xs">
                    New Ideas
                  </Text>
                </View>
              </View>
            )}
          </LinearGradient>
        </Animated.View>

        {/* Content Section */}
        <View className="flex-1 bg-white rounded-t-3xl -mt-5 shadow-2xl">
          <View className="bg-white rounded-t-3xl px-5">
            <ScrollView
              className="flex pt-8 pb-6"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
              keyboardShouldPersistTaps="handled"
            >
              {children}
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthLayout;
