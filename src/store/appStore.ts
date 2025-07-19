import { create } from "zustand";

// Define the state interface
interface AppState {
  // UI State
  activeTab: string;
  isLoading: boolean;
  selectedPostId: number | null;

  // Modal states
  isCreatePostModalOpen: boolean;

  // User preferences
  theme: "light" | "dark";

  // Actions (functions to update state)
  setActiveTab: (tab: string) => void;
  setLoading: (loading: boolean) => void;
  setSelectedPostId: (id: number | null) => void;
  openCreatePostModal: () => void;
  closeCreatePostModal: () => void;
  toggleTheme: () => void;
}

// Create the store
export const useAppStore = create<AppState>((set) => ({
  // Initial state
  activeTab: "for-you",
  isLoading: false,
  selectedPostId: null,
  isCreatePostModalOpen: false,
  theme: "light",

  // Actions
  setActiveTab: (tab) => set({ activeTab: tab }),
  setLoading: (loading) => set({ isLoading: loading }),
  setSelectedPostId: (id) => set({ selectedPostId: id }),
  openCreatePostModal: () => set({ isCreatePostModalOpen: true }),
  closeCreatePostModal: () => set({ isCreatePostModalOpen: false }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

// You can also create smaller, focused stores
export const usePostStore = create<{
  likedPosts: number[];
  addLikedPost: (postId: number) => void;
  removeLikedPost: (postId: number) => void;
}>((set) => ({
  likedPosts: [],
  addLikedPost: (postId) =>
    set((state) => ({
      likedPosts: [...state.likedPosts, postId],
    })),
  removeLikedPost: (postId) =>
    set((state) => ({
      likedPosts: state.likedPosts.filter((id) => id !== postId),
    })),
}));
