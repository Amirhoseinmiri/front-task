import React from "react";
interface GameResultProps {
  homeTeam: { name: string; logo: string; winner: boolean };
  awayTeam: { name: string; logo: string; winner: boolean };
  homeGoals: number;
  awayGoals: number;
  date: string;
  status: string;
}

const GameResult = ({
  homeTeam,
  awayTeam,
  homeGoals,
  awayGoals,
  status,
  date,
}: GameResultProps) => {
  return (
    <div className="flex items-center justify-center min-h-[210px]">
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-8">
          <span className="flex items-center justify-center gap-3">
            <p className="text-3xl font-bold">{homeTeam?.name}</p>
            <p className="text-2xl font-bold"> {homeGoals}</p>
          </span>
          <span className="flex flex-col items-center justify-center">
            <p className="text-sm">{date}</p>
            <p className="font-semibold">Final</p>
            <p className="text-sm">{status}</p>
          </span>
          <span className="flex items-center justify-center gap-3">
            <p className="text-2xl font-bold">{awayGoals}</p>
            <p className="text-3xl font-bold">{awayTeam?.name}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
