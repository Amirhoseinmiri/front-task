import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

import CardProvider from "../card-provider";
import Link from "next/link";
import { Filter } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useLast10Games } from "../../hooks/use-last10game";
import { cn } from "../../lib/utils";

const Trends = ({
  teamId,
  setTeamId,
  awayId,
}: {
  teamId: number;
  setTeamId: (key: number) => void;
  awayId: number;
}) => {
  const { data } = useLast10Games(teamId);
  const determineResult = (homeGoals: number, awayGoals: number) => {
    if (homeGoals > awayGoals) return "Win";
    if (awayGoals > homeGoals) return "Loss";
    return "Draw";
  };

  return (
    <CardProvider>
      <Tabs defaultValue="overview" className="flex w-full items-center">
        <div className="flex w-full justify-between items-center">
          <span className="flex items-center gap-2 w-[80%]">
            <Image
              alt="trends logo"
              src={"/vs-icon.svg"}
              width={25}
              height={25}
            />
            <p className="text-lg font-bold">Last 10 Games</p>
          </span>
          <TabsList className="w-[20%] gap-5 justify-start ml-auto">
            <TabsTrigger value="overview" onClick={() => setTeamId(awayId)}>
              Overview
            </TabsTrigger>
            <TabsTrigger value="odds" onClick={() => setTeamId(teamId)}>
              Odds
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview" className="w-full mt-2">
          <Table className="border border-gray-300 w-full">
            <TableCaption className="mt-9">
              <Link href={"/trends"} className="text-[#0769DE]">
                View and Filter More SOCCER Game Trends
              </Link>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#0769DE] flex items-center gap-1">
                  Date <Filter size={15} />
                </TableHead>
                <TableHead>Opponent</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Monyline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {data?.response
                ? data.response.map((item, i) => (
                    <li key={item.fixture.id}>
                      <Image
                        alt=""
                        src={item.teams.home.logo}
                        width={50}
                        height={50}
                      />
                    </li>
                  ))
                : null} */}
              {data?.response
                ? data.response.map((item) => {
                    const isHomeTeam = item.teams.home.id === teamId;
                    const opponent = isHomeTeam
                      ? item.teams.away
                      : item.teams.home;
                    const homeGoals = item.goals.home;
                    const awayGoals = item.goals.away;

                    const result = isHomeTeam
                      ? determineResult(homeGoals, awayGoals) // Home team result
                      : determineResult(awayGoals, homeGoals); // Away team result

                    return (
                      <TableRow key={item.fixture.id}>
                        <TableCell>
                          {format(item.fixture.date, "yyyy/MM/dd")}
                        </TableCell>
                        <TableCell
                          className="flex
                         items-center gap-2 w-10"
                        >
                          <Image
                            src={opponent.logo}
                            alt="team logo"
                            width={30}
                            height={30}
                          />
                          {opponent.name}
                        </TableCell>
                        <TableCell className="flex items-center gap-1">
                          <span
                            className={cn(
                              result === "Win"
                                ? "text-green-300"
                                : result === "Loss"
                                ? "text-red-400"
                                : "text-white"
                            )}
                          >
                            {result}
                          </span>
                          <p>
                            {awayGoals} - {homeGoals}
                          </p>
                        </TableCell>
                        <TableCell>{item.goals.away}</TableCell>
                      </TableRow>
                    );
                  })
                : null}
              {/* {
                data && data.teams.away.
              } */}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="odds" className="w-full mt-2">
          <Table className="border border-gray-300 w-full">
            <TableCaption className="mt-9">
              <Link href={"/trends"} className="text-[#0769DE]">
                View and Filter More SOCCER Game Trends
              </Link>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#0769DE] flex items-center gap-1">
                  Date <Filter size={15} />
                </TableHead>
                <TableHead>Opponent</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Monyline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {data?.response
                ? data.response.map((item, i) => (
                    <li key={item.fixture.id}>
                      <Image
                        alt=""
                        src={item.teams.home.logo}
                        width={50}
                        height={50}
                      />
                    </li>
                  ))
                : null} */}
              {data?.response
                ? data.response.map((item) => {
                    const isHomeTeam = item.teams.home.id === teamId;
                    const opponent = isHomeTeam
                      ? item.teams.away
                      : item.teams.home;
                    const homeGoals = item.goals.home;
                    const awayGoals = item.goals.away;

                    const result = isHomeTeam
                      ? determineResult(homeGoals, awayGoals) // Home team result
                      : determineResult(awayGoals, homeGoals); // Away team result

                    return (
                      <TableRow key={item.fixture.id}>
                        <TableCell>
                          {format(item.fixture.date, "yyyy/MM/dd")}
                        </TableCell>
                        <TableCell>
                          <Image
                            src={opponent.logo}
                            alt="team logo"
                            width={30}
                            height={30}
                          />
                          {opponent.name}
                        </TableCell>
                        <TableCell>
                          {" "}
                          <span
                            className={cn(
                              result === "Win"
                                ? "text-green-300"
                                : result === "Loss"
                                ? "text-red-400"
                                : "text-white"
                            )}
                          >
                            {result}
                          </span>
                          <p>
                            {awayGoals} - {homeGoals}
                          </p>
                        </TableCell>
                        <TableCell>{item.goals.away}</TableCell>
                      </TableRow>
                    );
                  })
                : null}
              {/* {
                data && data.teams.away.
              } */}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </CardProvider>
  );
};

export default Trends;
