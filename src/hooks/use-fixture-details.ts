import { useQuery } from "@tanstack/react-query";
import { getFixtureDetails } from "../api/service";

export const useFixtureDetails = (fixtureId: number) => {
  return useQuery({
    queryKey: ["fixtureDetails", fixtureId],
    queryFn: () => getFixtureDetails(fixtureId),
    enabled: !!fixtureId,
  });
};
