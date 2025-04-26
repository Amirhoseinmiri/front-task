/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";
import React, { useEffect, useState } from "react";
import GameResult from "../game-result";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "../overview";
import Odds from "../odds";
import Signals from "../signals";
import Articles from "../articles";
import Trends from "../trends";
import { useParams } from "next/navigation";
import { getFixtureDetails } from "../../api/service";
type FixtureDetails = {
  fixture: {
    id: number;
    date: string;
    status: {
      long: string;
      short: string;
    };
  };
  teams: {
    home: {
      name: string;
      logo: string;
      winner: boolean;
    };
    away: {
      name: string;
      logo: string;
      winner: boolean;
    };
  };
  goals: {
    home: number;
    away: number;
  };
};

const GameDeatails = () => {
  const [gameDeatails, setGamesDeatails] = useState<FixtureDetails | null>();
  const { id } = useParams<{
    id: string;
  }>();
  useEffect(() => {
    const fetchGameList = async () => {
      try {
        const res = await getFixtureDetails(Number(id));
        console.log(res);
        setGamesDeatails(res[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGameList();
  }, [id]);
  return (
    <div className="space-y-4 h-screen">
      {gameDeatails && (
        <GameResult
          homeTeam={gameDeatails?.teams?.home!}
          awayTeam={gameDeatails?.teams?.away!}
          homeGoals={gameDeatails?.goals?.home!}
          awayGoals={gameDeatails?.goals?.away!}
          status={gameDeatails?.fixture?.status?.long!}
          date={gameDeatails?.fixture?.date!}
        />
      )}
      <div className="bg-gray-200 p-4 min-h-full">
        <Tabs defaultValue="overview" className="w-[60%] mx-auto gap-6">
          <TabsList className="w-full gap-5 justify-start mx-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="odds">Odds</TabsTrigger>
            <TabsTrigger value="picks">Picks</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="props">Props</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Overview />
          </TabsContent>
          <TabsContent value="odds">
            <Odds />
          </TabsContent>
          <TabsContent value="picks">
            <Signals />
          </TabsContent>
          <TabsContent value="articles">
            <Articles />
          </TabsContent>
          <TabsContent value="props">Props</TabsContent>
          <TabsContent value="trends">
            <Trends />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GameDeatails;
