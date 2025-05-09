/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { BestOdds, GameTime } from "./filter-odds";
import Link from "next/link";
import CardProvider from "../card-provider";
import { useFixtureOdds } from "../../hooks/use-odds";

const Odds = ({
  awayName,
  homeName,
  id,
}: {
  homeName: string;
  awayName: string;
  id: number | string;
}) => {
  const { data } = useFixtureOdds(Number(id));

  // Ensure that data is available and has odds
  const homeOdds: any = data?.response?.[0]?.odds?.find(
    (odd: any) => odd.team === homeName
  );
  const awayOdds: any = data?.response?.[0]?.odds?.find(
    (odd: any) => odd.team === awayName
  );

  return (
    <CardProvider>
      <div className="flex justify-between items-center w-full">
        <span className="flex items-center gap-2">
          <Image
            alt="odds logo"
            src={"/game-odds.svg"}
            width={25}
            height={25}
          />
          <p className="text-lg font-bold">Game Odds</p>
        </span>
        <div className="flex items-center w-[30%] justify-between">
          <BestOdds />
          <GameTime />
        </div>
      </div>
      <div className="w-full flex items-center justify-end mr-8 gap-20">
        <div className="flex justify-between w-[20%] items-center mr-8">
          <p>Total</p>
          <p>Moneyline</p>
        </div>
      </div>
      <div className="p-4 border w-full border-black flex flex-col gap-3 rounded-4xl">
        {/* Home Team Odds Section */}
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-3">
            <Image
              src={"/RBB.webp"}
              alt="home team logo"
              width={50}
              height={50}
            />
            <p className="text-lg font-bold">{homeName}</p>
          </span>
          <div className="w-[40%] flex items-center justify-between">
            <span className="flex items-center justify-center gap-2 min-w-fit bg-[#fcf6e4] p-2 rounded-lg mr-2">
              <p>{homeOdds?.moneyline || "N/A"}</p>{" "}
              {/* Displaying home Moneyline odds */}
              <Image
                src={"/pinnacle-icon.png"}
                alt="team logo"
                width={30}
                height={30}
                className="rounded-lg"
              />
            </span>
          </div>
        </div>

        {/* Away Team Odds Section */}
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-3">
            <Image
              src={"/RBB.webp"}
              alt="away team logo"
              width={50}
              height={50}
            />
            <p className="text-lg font-bold">{awayName}</p>
          </span>
          <div className="w-[40%] flex items-center justify-between">
            <span className="flex items-center justify-center gap-2 min-w-fit bg-[#fcf6e4] p-2 rounded-lg mr-2">
              <p>{awayOdds?.moneyline || "N/A"}</p>{" "}
              {/* Displaying away Moneyline odds */}
              <Image
                src={"/pinnacle-icon.png"}
                alt="team logo"
                width={30}
                height={30}
                className="rounded-lg"
              />
            </span>
          </div>
        </div>
      </div>
      <Link href={"/odds"} className="text-center text-[#0769DE]">
        View More Odds
      </Link>
    </CardProvider>
  );
};

export default Odds;
