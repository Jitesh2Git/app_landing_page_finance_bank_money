"use client";

import { download, gradient } from "@/public";
import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

const Download = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{
        once: true,
      }}
      id="pricing"
      className="px-5 mt-[100px] max-md:mt-[50px]"
    >
      <div
        className="relative bg-black flex items-center rounded-md
      py-5 max-md:justify-center max-md:text-center"
      >
        <div
          className="text-white ml-16 space-y-4
         max-md:m-5 flex-col items-center 
        justify-center"
        >
          <h1
            className="text-4xl font-extrabold
          font-roboto tracking-tighter max-md:text-2xl"
          >
            Ready To Get Started?
          </h1>
          <p className="text-sm capitalize">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-5 py-3 bg-white text-black rounded-sm
              text-[13px] flex gap-2 items-center justify-center font-bold
              max-md:mx-auto"
          >
            Download App
            <FaApple className="text-black text-2xl max-sm:text-xl" />
          </motion.button>
        </div>
        <Image
          src={download}
          alt="download img"
          width={501}
          height={461}
          quality={95}
          priority
          className="w-[380px] h-[360px] max-md:hidden"
        />
        <Image
          src={gradient}
          alt="gradient"
          width={465}
          height={445}
          quality={95}
          priority
          className="absolute -z-10 top-[-100px] left-[-100px]
                w-[250px] h-[250px]"
        />
      </div>
    </motion.section>
  );
};

export default Download;
