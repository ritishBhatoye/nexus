import { QueryClient } from "@tanstack/react-query";

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // How long data stays fresh (30 seconds)
      staleTime: 30 * 1000,
      // How long data stays in cache (5 minutes)
      gcTime: 5 * 60 * 1000,
      // Retry failed requests 3 times
      retry: 3,
      // Refetch when window gets focus
      refetchOnWindowFocus: true,
    },
  },
});
