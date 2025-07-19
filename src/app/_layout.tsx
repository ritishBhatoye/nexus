import "../global.css";

import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { GluestackUIProvider, useToast } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/queryClient";

export default function RootLayout() {
  const colorScheme = useColorScheme() || "light";
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
