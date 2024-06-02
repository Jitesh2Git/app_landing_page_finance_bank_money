import { links } from "@/constants";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

const Menu = ({ setToggleMenu }) => {
  return (
    <div
      className="fixed bg-white h-[100%] w-full text-center
      right-0 top-0 z-[9999] flex flex-col
      items-center justify-center gap-5"
    >
      <ul>
        {links.map((link) => (
          <Link key={link.name} href={link.hash}>
            <li
              className={`font-bold text-xl py-2 ${
                link.name === "Home" ? "text-red" : "text-black"
              }`}
              onClick={() => setToggleMenu(false)}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
      <button
        className="px-8 py-3 bg-black text-white
          rounded-[5px] text-sm"
      >
        Download
      </button>
      <div
        className="absolute cursor-pointer text-2xl 
          rounded-3xl hover:text-red p-2 m-5
          hover:bg-[#e2e8f0] top-0 right-0"
      >
        <IoClose onClick={() => setToggleMenu(false)} />
      </div>
    </div>
  );
};

export default Menu;
