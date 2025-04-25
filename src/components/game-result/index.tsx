import React from "react";

const GameResult = () => {
  return (
    <div className="flex items-center justify-center min-h-[210px]">
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-8">
          <span className="flex items-center justify-center gap-3">
            <p className="text-3xl font-bold">Real Betis Seville</p>
            <p className="text-2xl font-bold"> 3</p>
          </span>
          <span className="flex flex-col items-center justify-center">
            <p className="text-sm">Apr, 21, 2025</p>
            <p className="font-semibold">Final</p>
            <p className="text-sm">O/U 2.5</p>
          </span>
          <span className="flex items-center justify-center gap-3">
            <p className="text-2xl font-bold">3</p>
            <p className="text-3xl font-bold">Girona FC</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
