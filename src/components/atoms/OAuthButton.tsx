import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { oauthProviders } from "@/utils/supabase";

interface OAuthButtonProps {
  provider: keyof typeof oauthProviders;
  onPress: () => void;
  loading?: boolean;
}

const OAuthButton: React.FC<OAuthButtonProps> = ({
  provider,
  onPress,
  loading = false,
}) => {
  const providerConfig = oauthProviders[provider];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      className={`items-center justify-center rounded-full border-2 shadow-sm ${
        loading ? "opacity-50" : "active:scale-95"
      }`}
      style={{
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderColor: providerConfig.color,
      }}
    >
      <Ionicons
        name={providerConfig.icon as any}
        size={24}
        color={providerConfig.color}
      />
    </TouchableOpacity>
  );
};

export default OAuthButton;
