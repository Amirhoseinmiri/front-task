/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { getFixtures } from "../../api/service";
import { useParams } from "next/navigation";
import Link from "next/link";

const GameDeatailsViews = () => {
  const [gamesList, setGamesList] = useState<any[]>([]);
  const { id } = useParams<{
    id: string;
  }>();
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await getFixtures(Number(id));
        setGamesList(response);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, [id]);
  return (
    <div>
      <h1>Games List</h1>
      <ul>
        {gamesList.map((item) => (
          <li key={item.fixture.id}>
            <Link href={`/${item.fixture.id}`}>
              <p>{item.fixture.date}</p>
              <p>
                {item.teams.home.name} vs {item.teams.away.name}
              </p>
              <p>{item.league.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameDeatailsViews;
