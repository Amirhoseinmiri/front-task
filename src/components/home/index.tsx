"use client";
import React from "react";
import Link from "next/link";
import { useLeagues } from "../../hooks/use-leagues";

const HomePageView = () => {
  const { data } = useLeagues();
  return (
    <div>
      <ul>
        {data?.map((item) => (
          <li key={item.league.id}>
            <Link href={`/leagues/${item.league.id}`}>{item.league.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePageView;
