import "dotenv/config";

export default {
  expo: {
    name: "nexus",
    slug: "nexus",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    scheme: "nexus",

    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },

    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.nexus.community",
    },

    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.nexus.community",
    },

    web: {
      favicon: "./assets/favicon.png",
      bundler: "metro",
    },

    plugins: [
      [
        "expo-router",
        {
          root: "./src/app",
        },
      ],
      "expo-font",
    ],

    extra: {
      SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_KEY,
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
};
