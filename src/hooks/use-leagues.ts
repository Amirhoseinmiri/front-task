import { useQuery } from "@tanstack/react-query";
import { getLeagues } from "../api/service";
export const useLeagues = () => {
  return useQuery({
    queryKey: ["leagues"],
    queryFn: getLeagues,
  });
};
