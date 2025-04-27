// src/hooks/useLast10Games.ts

import { useQuery } from "@tanstack/react-query";
import { getLast10Games } from "../api/service";

export const useLast10Games = (teamId: number) => {
  return useQuery({
    queryKey: ["last10Games", teamId],
    queryFn: () => getLast10Games(teamId),
    enabled: !!teamId, // only fetch if teamId exists
  });
};
