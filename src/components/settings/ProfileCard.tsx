import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { BlurView } from "expo-blur";

const AnimatedAvatar = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );

    const rotateAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      })
    );

    pulseAnimation.start();
    rotateAnimation.start();

    return () => {
      pulseAnimation.stop();
      rotateAnimation.stop();
    };
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleAnim }, { rotate: spin }],
      }}
    >
      <View className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 justify-center items-center border-2 border-white border-opacity-30">
        <Text className="text-white text-base font-avalar">RB</Text>
      </View>
    </Animated.View>
  );
};

const ProfileCard = () => {
  return (
    <BlurView
      intensity={40}
      tint="dark"
      className="rounded-3xl overflow-hidden"
    >
      <View className="flex flex-row justify-between items-center p-5 py-10 gap-4">
        <View className="">
          <AnimatedAvatar />
        </View>
        <View className="flex flex-col items-start">
          <Text className="text-xl font-avalar text-white">Ritish Bhatoye</Text>
          <Text className="text-sm font-montserrat text-white">
            +91 7042421344 . ritish@gmail.com
          </Text>
        </View>
        <TouchableOpacity className="flex-row items-center gap-2">
          {/* <Text className="text-md font-medium text-white">Edit Profile</Text> */}
          <Ionicons name="pencil-outline" color={"white"} size={28} />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

export default ProfileCard;
