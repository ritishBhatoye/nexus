import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../services/api";

// Import types from your backend
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

interface CreatePostData {
  user_id: string;
  category_id: number;
  title: string;
  content: string;
  summary?: string;
  pseudonym?: string;
  image_url?: string;
  video_url?: string;
  media_type?: "image" | "video" | "none";
}

// API functions
const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await apiRequest<{ data: Post[] }>("/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createPost = async (postData: CreatePostData): Promise<Post> => {
  const response = await apiRequest<{ data: Post }>("/posts", {
    method: "POST",
    body: JSON.stringify(postData),
  });
  return response.data;
};

const likePost = async (postId: number): Promise<void> => {
  await apiRequest(`/posts/${postId}/vote`, {
    method: "POST",
    body: JSON.stringify({ vote_type: "up" }),
  });
};

// Custom hooks
export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"], // Unique key for this query
    queryFn: fetchPosts, // Function to fetch data
    staleTime: 30 * 1000, // Data is fresh for 30 seconds
    refetchOnWindowFocus: true, // Refetch when app comes back to focus
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      // When post is created successfully, update the cache
      queryClient.setQueryData(["posts"], (oldPosts: Post[] = []) => {
        return [newPost, ...oldPosts]; // Add new post to the beginning
      });

      // Or you can refetch all posts
      // queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
    onError: (error) => {
      console.error("Failed to create post:", error);
    },
  });
};

// Like post hook with optimistic updates
export const useLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likePost,
    onMutate: async (postId: number) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // Snapshot the previous value
      const previousPosts = queryClient.getQueryData<Post[]>(["posts"]);

      // Optimistically update to the new value
      queryClient.setQueryData<Post[]>(["posts"], (old = []) =>
        old.map((post) =>
          post.id === postId
            ? {
                ...post,
                vote_count: (post.vote_count || 0) + 1,
                user_vote: "up" as const,
              }
            : post
        )
      );

      // Return a context object with the snapshotted value
      return { previousPosts };
    },
    onError: (err, postId, context) => {
      // If the mutation fails, use the context returned from onMutate to roll back
      queryClient.setQueryData(["posts"], context?.previousPosts);
    },
    onSettled: () => {
      // Always refetch after error or success to ensure we have the latest data
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
