import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const BestOdds = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full min-w-fit flex justify-center items-center gap-1 text-left group">
        Best Odds
        <ChevronDown className="ml-2 h-4 w-4 font-bold text-black transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>1.5</DropdownMenuItem>
        <DropdownMenuItem>2.0</DropdownMenuItem>
        <DropdownMenuItem>2.5</DropdownMenuItem>
        <DropdownMenuItem>3.0</DropdownMenuItem>
        <DropdownMenuItem>3.5</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export const GameTime = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full min-w-fit flex justify-center items-center gap-1 text-left group">
        Full Time
        <ChevronDown className="ml-2 h-4 w-4 font-bold text-black transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>1st Half</DropdownMenuItem>
        <DropdownMenuItem>2nd Half</DropdownMenuItem>
        <DropdownMenuItem>Full Time</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
