import { axiosClient } from "@/api/axios-client";

export const UsersService = {
  getMeApi: () => axiosClient.get("/auth/me").then((res) => res.data),
};
