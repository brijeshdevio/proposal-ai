import { isAxiosError } from "axios";
import { toast } from "sonner";

export const notifySuccess = (message: string) => toast.success(message);

export const notifyError = (error: unknown) => {
  if (isAxiosError(error)) {
    const message =
      error?.response?.data?.message ||
      error.message ||
      "Unexpected error occurred";
    toast.error(message);
  }
};
