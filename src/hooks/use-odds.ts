import { useQuery } from "@tanstack/react-query";
import { getOdds } from "../api/service";

export const useFixtureOdds = (fixtureId: number) => {
  return useQuery({
    queryKey: ["fixtureOdds", fixtureId],
    queryFn: () => getOdds(fixtureId),
    enabled: !!fixtureId,
  });
};
