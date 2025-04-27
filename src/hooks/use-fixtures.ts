import { useQuery } from "@tanstack/react-query";
import { getFixtures } from "../api/service";

export const useFixtures = (leagueId: number) => {
  return useQuery({
    queryKey: ["fixtures", leagueId],
    queryFn: () => getFixtures(leagueId),
    enabled: !!leagueId,
  });
};
