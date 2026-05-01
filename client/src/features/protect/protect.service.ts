import { axiosClient } from "@/api/axios-client";

export const ProtectService = {
  getStatsApi: () =>
    axiosClient.get("/dashboard/stats").then((res) => res.data),
  getProposalsApi: () => axiosClient.get("/proposals").then((res) => res.data),
};
