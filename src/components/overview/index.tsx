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

const Overview = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
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
              <Image src={"/RBB.webp"} alt="team logo" width={50} height={50} />
              <p className="text-lg font-bold">Real Betis Seville</p>
            </TableCell>
            <TableCell align="center" className="text-right">
              3
            </TableCell>
            <TableCell align="center" className="text-right">
              0
            </TableCell>
            <TableCell align="center" className="text-right font-bold text-lg">
              3
            </TableCell>
          </TableRow>
          <TableRow className="border border-gray-300">
            <TableCell className="flex items-center gap-3">
              <Image src={"/RBB.webp"} alt="team logo" width={50} height={50} />
              <p className="text-lg font-bold">Real Betis Seville</p>
            </TableCell>
            <TableCell align="center" className="text-right">
              3
            </TableCell>
            <TableCell align="center" className="text-right">
              0
            </TableCell>
            <TableCell align="center" className="text-right font-bold text-lg">
              3
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Overview;
