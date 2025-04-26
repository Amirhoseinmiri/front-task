/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { getLeagues } from "../../api/service";
import { useLeagueContext } from "../../hooks/use-league";
import Link from "next/link";

const HomePageView = () => {
  const [league, setLeague] = useState<any[]>();
  const { setLeagueId } = useLeagueContext();

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await getLeagues();
        if (response) {
          setLeague(response);
        }
      } catch (error) {
        console.error("Error fetching leagues:", error);
      }
    };
    fetchLeagues();
  }, []);
  return (
    <div>
      <ul>
        {league?.map((item) => (
          <li key={item.league.id}>
            <Link href={`/leagues/${item.league.id}`}>
              <button
                onClick={() => {
                  setLeagueId(item.league.id);
                }}
              >
                {item.league.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePageView;
