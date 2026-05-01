import { useQuery } from "@tanstack/react-query";
import { ProtectService } from "./protect.service";
import { transform } from "@/utils/transform";

export function useGetStatsQuery() {
  return useQuery({
    queryKey: ["dashboard", "stats"],
    queryFn: ProtectService.getStatsApi,
    retry: 0,
    select: transform,
  });
}

export function useGetProposalsQuery() {
  return useQuery({
    queryKey: ["proposals"],
    queryFn: ProtectService.getProposalsApi,
    retry: 0,
  });
}
