import { useQuery } from "@tanstack/react-query";
import { UsersService } from "./users.service";

export function useGetMeQuery() {
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: UsersService.getMeApi,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}
