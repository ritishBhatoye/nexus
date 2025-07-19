import { useToast as useGluestackToast } from "@gluestack-ui/themed";

export const useToast = () => {
  const toast = useGluestackToast();

  const showToast = {
    success: (title: string, description?: string) => {
      toast.show({
        title,
        description,
        action: "success",
        variant: "solid",
        placement: "top",
      });
    },
    error: (title: string, description?: string) => {
      toast.show({
        title,
        description,
        action: "error",
        variant: "solid",
        placement: "top",
      });
    },
    warning: (title: string, description?: string) => {
      toast.show({
        title,
        description,
        action: "warning",
        variant: "solid",
        placement: "top",
      });
    },
    info: (title: string, description?: string) => {
      toast.show({
        title,
        description,
        action: "info",
        variant: "solid",
        placement: "top",
      });
    },
  };

  return { showToast };
};
