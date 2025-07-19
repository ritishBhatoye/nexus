import React from "react";
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { usePosts } from "../../hooks/usePosts";
import { useAppStore } from "../../store/appStore";
import PostCard from "../elements/Cards/PostCard";

const PostFeed = () => {
  // TanStack Query hook - handles server state
  const { data: posts, isLoading, error, refetch, isRefetching } = usePosts();

  // Zustand hook - handles UI state
  const { activeTab, setSelectedPostId } = useAppStore();

  // Handle post selection
  const handlePostPress = (postId: number) => {
    setSelectedPostId(postId);
    // Navigate to post detail or open modal
  };

  // Loading state
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0066FF" />
        <Text style={{ marginTop: 10 }}>Loading posts...</Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>Error loading posts</Text>
        <Text style={{ marginTop: 5 }}>{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard post={item} onPress={() => handlePostPress(item.id)} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            colors={["#0066FF"]}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PostFeed;
