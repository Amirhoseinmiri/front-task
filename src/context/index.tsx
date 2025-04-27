import React, { createContext, useState, ReactNode } from "react";

export interface LeagueType {
  teamId: number | string;
  setTeamId: (id: number | string) => void;
}

export const LeagueContext = createContext<LeagueType | undefined>(undefined);

interface LeagueProviderProps {
  children: ReactNode;
}

export const LeagueContextProvider: React.FC<LeagueProviderProps> = ({
  children,
}) => {
  const [teamId, setTeamId] = useState<number | string>(0);

  return (
    <LeagueContext.Provider value={{ teamId, setTeamId }}>
      {children}
    </LeagueContext.Provider>
  );
};
