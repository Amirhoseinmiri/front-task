import React, { createContext, useState, ReactNode } from "react";

export interface LeagueType {
  leagueId: number | string;
  setLeagueId: (id: number | string) => void;
}

export const LeagueContext = createContext<LeagueType | undefined>(undefined);

interface LeagueProviderProps {
  children: ReactNode;
}

export const LeagueContextProvider: React.FC<LeagueProviderProps> = ({
  children,
}) => {
  const [leagueId, setLeagueId] = useState<number | string>(0);

  return (
    <LeagueContext.Provider value={{ leagueId, setLeagueId }}>
      {children}
    </LeagueContext.Provider>
  );
};
