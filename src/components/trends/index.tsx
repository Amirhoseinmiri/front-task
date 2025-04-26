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
import CardProvider from "../card-provider";
import Link from "next/link";
import { Filter } from "lucide-react";
import { lastTenGames } from "../../mock";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Trends = () => {
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
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="odds">Odds</TabsTrigger>
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
              {lastTenGames.map((game) => (
                <TableRow
                  key={game.id}
                  className="border-b border-gray-300 odd:bg-gray-100"
                >
                  <TableCell>{game.date}</TableCell>
                  <TableCell className="flex items-center gap-3">
                    <Image
                      src={game.opponentLogo}
                      alt="team logo"
                      width={40}
                      height={40}
                    />
                    <p>{game.opponent}</p>
                  </TableCell>
                  <TableCell>{game.score}</TableCell>
                  <TableCell>{game.total}</TableCell>
                  <TableCell>{game.monyLine}</TableCell>
                </TableRow>
              ))}
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
              {lastTenGames.map((game) => (
                <TableRow
                  key={game.id}
                  className="border-b border-gray-300 odd:bg-gray-100"
                >
                  <TableCell>{game.date}</TableCell>
                  <TableCell className="flex items-center gap-3">
                    <Image
                      src={game.opponentLogo}
                      alt="team logo"
                      width={40}
                      height={40}
                    />
                    <p>{game.opponent}</p>
                  </TableCell>
                  <TableCell>{game.score}</TableCell>
                  <TableCell>{game.total}</TableCell>
                  <TableCell>{game.monyLine}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </CardProvider>
  );
};

export default Trends;
