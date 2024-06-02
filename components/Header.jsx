"use client";

import { links } from "@/constants";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from "@/components";
import { motion } from "framer-motion";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      className="p-5 flex items-center 
      justify-between"
    >
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center gap-6"
      >
        <Link href="/">
          <Image
            src={logo}
            alt="logo image"
            width={117}
            height={35}
            quality={95}
            priority
            className="w-[80px]"
          />
        </Link>
        <ul
          className="flex items-center gap-5 
        max-sm:hidden"
        >
          {links.map((link) => (
            <Link key={link.name} href={link.hash}>
              <li
                className={`font-bold text-md ${
                  link.name === "Home" ? "text-red" : "text-black"
                }`}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>

      <motion.button
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="px-10 py-3 bg-black text-white
          rounded-[5px] text-sm max-sm:hidden
          hover:scale-105"
      >
        Download
      </motion.button>
      <GiHamburgerMenu
        className="hidden max-sm:block
      mr-3 text-xl"
        onClick={() => setToggleMenu(true)}
      />
      {toggleMenu && <Menu setToggleMenu={setToggleMenu} />}
    </header>
  );
};

export default Header;
