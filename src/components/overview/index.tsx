"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import CardProvider from "../card-provider";
import Odds from "../odds";
// import Trends from "../trends";
import Signals from "../signals";
import { useFixtureDetails } from "../../hooks/use-fixture-details";
import { useParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
// import { useLeagueContext } from "../../hooks/use-league";

const Overview = () => {
  const { id } = useParams();
  const { data, isPending } = useFixtureDetails(Number(id));

  // const { setTeamId, teamId } = useLeagueContext();

  return (
    <div className="flex flex-col gap-4 w-full">
      <CardProvider>
        {isPending && <Skeleton className="h-20 w-full" />}
        <Table className="w-full border border-gray-300">
          <TableHeader>
            <TableRow className="border-b border-gray-300">
              <TableHead className="w-[60%]"></TableHead>
              <TableHead align="center" className="text-right">
                H1
              </TableHead>
              <TableHead align="center" className="text-right">
                H2
              </TableHead>
              <TableHead align="center" className="text-right">
                T
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border border-gray-300">
              <TableCell className="flex items-center gap-3">
                <Image
                  src={data ? data[0]?.teams?.home?.logo : "/RBB.webp"}
                  alt="team logo"
                  width={50}
                  height={50}
                />
                <p className="text-lg font-bold">
                  {data ? data[0]?.teams?.home?.name : ""}
                </p>
              </TableCell>
              <TableCell align="center" className="text-right">
                {data ? data[0]?.score?.halftime.home : ""}
              </TableCell>
              <TableCell align="center" className="text-right">
                {data
                  ? data[0]?.score?.halftime?.home -
                    data[0]?.score?.fulltime?.home
                  : ""}
              </TableCell>
              <TableCell
                align="center"
                className="text-right font-bold text-lg"
              >
                {data ? data[0]?.score?.fulltime?.home : ""}
              </TableCell>
            </TableRow>
            <TableRow className="border border-gray-300">
              <TableCell className="flex items-center gap-3">
                <Image
                  src={data ? data[0]?.teams?.away?.logo : "/RBB.webp"}
                  alt="team logo"
                  width={50}
                  height={50}
                />
                <p className="text-lg font-bold">
                  {data ? data[0]?.teams?.away?.name : ""}
                </p>
              </TableCell>
              <TableCell align="center" className="text-right">
                {data ? data[0]?.score?.halftime?.away : ""}
              </TableCell>
              <TableCell align="center" className="text-right">
                {data
                  ? data[0]?.score?.fulltime.away -
                    data[0]?.score?.halftime.away
                  : ""}
              </TableCell>
              <TableCell
                align="center"
                className="text-right font-bold text-lg"
              >
                {data ? data[0]?.score?.fulltime.away : ""}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardProvider>
      <Odds
        awayName={data ? data[0]?.teams?.away?.name : ""}
        homeName={data ? data[0]?.teams?.home?.name : ""}
        id={Number(id)}
      />
      {/* <Trends teamId={teamId} awayId={} /> */}
      {/* <ul>
        {data &&
          data[0].events.map((item, i) => <li key={i}>{item.team.name}</li>)}
      </ul> */}
      <Signals />
    </div>
  );
};

export default Overview;
