import { useContext } from "react";
import { LeagueContext, LeagueType } from "../context";

export const useLeagueContext = (): LeagueType => {
  const context = useContext(LeagueContext);
  if (!context) {
    throw new Error(
      "useLeagueContext must be used within a LeagueContextProvider"
    );
  }
  return context;
};
