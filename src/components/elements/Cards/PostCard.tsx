import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useLikePost } from "../../../hooks/usePosts";

interface Post {
  id: number;
  user_id: string;
  category_id: number;
  title: string;
  content: string;
  summary?: string;
  pseudonym?: string;
  image_url?: string;
  video_url?: string;
  media_type?: "image" | "video" | "none";
  created_at: string;
  vote_count?: number;
  user_vote?: "up" | "down" | null;
  comment_count?: number;
  view_count?: number;
}

interface props {
  post: Post;
  onPress?: () => void;
}

const PostCard = ({ post, onPress }: props) => {
  // TanStack Query hook for liking posts
  const likePostMutation = useLikePost();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleLike = () => {
    likePostMutation.mutate(post.id);
  };

  return (
    <TouchableOpacity
      className="flex-col gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-3"
      onPress={onPress}
    >
      {/* Header with user info */}
      <View className="flex-row items-center gap-3">
        <View className="w-10 h-10 bg-gray-300 rounded-full items-center justify-center">
          <Text className="text-gray-600 font-semibold">
            {post?.pseudonym ? post.pseudonym.charAt(0).toUpperCase() : "A"}
          </Text>
        </View>
        <View className="flex-1">
          <Text className="text-sm font-medium text-gray-900">
            {post?.pseudonym || "Anonymous"}
          </Text>
          <Text className="text-xs text-gray-500">
            {formatDate(post.created_at)}
          </Text>
        </View>
      </View>

      {/* Post content */}
      <View className="flex-col gap-2">
        <Text className="text-lg font-semibold text-gray-900">
          {post.title}
        </Text>

        {post.summary && (
          <Text className="text-sm text-gray-700 leading-5">
            {post.summary}
          </Text>
        )}

        {/* Media content */}
        {post.media_type === "image" && post.image_url && (
          <Image
            source={{ uri: post.image_url }}
            className="w-full h-48 rounded-lg"
            contentFit="cover"
          />
        )}

        {post.media_type === "video" && post.video_url && (
          <View className="w-full h-48 bg-gray-200 rounded-lg items-center justify-center">
            <Text className="text-gray-600">Video Content</Text>
          </View>
        )}
      </View>

      {/* Footer with interactive buttons */}
      <View className="flex-row items-center justify-between pt-2 border-t border-gray-100">
        <View className="flex-row items-center gap-4">
          {/* Like button with TanStack Query */}
          <TouchableOpacity
            className="flex-row items-center gap-1"
            onPress={handleLike}
            disabled={likePostMutation.isPending}
          >
            <Ionicons
              name={post.user_vote === "up" ? "heart" : "heart-outline"}
              size={16}
              color={post.user_vote === "up" ? "#FF6347" : "#666"}
            />
            <Text
              className={`text-xs ${
                post.user_vote === "up" ? "text-red-500" : "text-gray-500"
              }`}
            >
              {post.vote_count || 0}
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center gap-1">
            <Ionicons name="chatbubble-outline" size={16} color="#666" />
            <Text className="text-xs text-gray-500">
              {post.comment_count || 0}
            </Text>
          </View>

          <View className="flex-row items-center gap-1">
            <Ionicons name="eye-outline" size={16} color="#666" />
            <Text className="text-xs text-gray-500">
              {post.view_count || 0}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
