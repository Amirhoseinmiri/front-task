import React from "react";
import CardProvider from "../card-provider";
import { FaNewspaper } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Articles = () => {
  return (
    <CardProvider>
      <span className="flex items-center gap-2 mr-auto">
        <FaNewspaper
          size={25}
          className="bg-[#0769DE] text-white p-1 rounded-4xl"
        />
        <p className="text-lg font-bold">Related Articles</p>
      </span>
      <div className="flex w-full gap-2 items-center">
        <Image
          src={"/article.webp"}
          alt="article"
          width={90}
          height={90}
          className="rounded-xl"
        />
        <div className="flex flex-col gap-3 h-full">
          <Link href={"/soccer"} className="text-[#0769DE]">
            Soccer{" "}
          </Link>
          <p className="text-lg font-bold">
            Premier League Matchday 33 Odds, Picks & Prediction (2025)
          </p>
          <span className="text-[#525A67] text-sm">
            Trenton Pruitt • 10 days ago
          </span>
        </div>
      </div>
      <div className="flex w-full gap-2 items-center">
        <Image
          src={"/article.webp"}
          alt="article"
          width={90}
          height={90}
          className="rounded-xl"
        />
        <div className="flex flex-col gap-3 h-full">
          <Link href={"/soccer"} className="text-[#0769DE]">
            Soccer{" "}
          </Link>
          <p className="text-lg font-bold">
            Premier League Matchday 33 Odds, Picks & Prediction (2025)
          </p>
          <span className="text-[#525A67] text-sm">
            Trenton Pruitt • 10 days ago
          </span>
        </div>
      </div>
      <div className="flex w-full gap-2 items-center">
        <Image
          src={"/article.webp"}
          alt="article"
          width={90}
          height={90}
          className="rounded-xl"
        />
        <div className="flex flex-col gap-3 h-full">
          <Link href={"/soccer"} className="text-[#0769DE]">
            Soccer{" "}
          </Link>
          <p className="text-lg font-bold">
            Premier League Matchday 33 Odds, Picks & Prediction (2025)
          </p>
          <span className="text-[#525A67] text-sm">
            Trenton Pruitt • 10 days ago
          </span>
        </div>
      </div>
    </CardProvider>
  );
};

export default Articles;
