import React from "react";
import GameResult from "../game-result";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "../overview";
import Odds from "../odds";
import Signals from "../signals";
import Articles from "../articles";
import Trends from "../trends";

const GameDeatails = () => {
  return (
    <div className="space-y-4 h-screen">
      <GameResult />
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
