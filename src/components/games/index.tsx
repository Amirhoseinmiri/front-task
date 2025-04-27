"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useFixtures } from "../../hooks/use-fixtures";

const GameDeatailsViews = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { data } = useFixtures(Number(id));
  return (
    <div>
      <h1>Games List</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.fixture.id}>
            <Link href={`/${item.fixture.id}`}>
              <p>{item.fixture.date}</p>
              <p>
                {item.teams.home.name} vs {item.teams.away.name}
              </p>
              <p>{item.fixture.venue.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameDeatailsViews;
