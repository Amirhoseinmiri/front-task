import React from "react";
import { MdSportsSoccer } from "react-icons/md";
import { navLinks } from "../../mock";
import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-white w-full flex items-center border-b border-gray-600 h-16 px-4 overflow-x-auto">
      <span className="border-r border-gray-600 flex h-full items-center justify-center gap-1 pr-4 font-bold">
        <MdSportsSoccer />
        Soccer
      </span>
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-bold text-sm px-4 py-2 rounded-md transition-all hover:text-gray-500 duration-300 ease-in-out"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
