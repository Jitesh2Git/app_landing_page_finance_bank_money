"use client";

import { gradient, hero1, heroA, heroB, heroC } from "@/public";
import Image from "next/image";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="p-5 max-md:text-center">
      <div
        className="flex gap-5 max-md:flex-col 
        max-md:items-center"
      >
        <div
          className="flex flex-col gap-5 items-center
          pt-12"
        >
          <div className="space-y-4">
            <h1
              className="relative font-extrabold text-4xl font-roboto
            max-sm:text-3xl"
            >
              <Image
                src={gradient}
                alt="gradient"
                width={465}
                height={445}
                quality={95}
                priority
                className="absolute -z-10 top-[-80px] right-10
                w-[250px] h-[250px] max-sm:right-[10px]"
              />
              Make The Best Financial Decisions
            </h1>
            <p className="text-[12px] text-grey">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div
              className="flex items-center gap-2 max-md:justify-center
            max-sm:flex-col"
            >
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-5 py-3 bg-black text-white rounded-[5px] 
              text-sm flex gap-2 items-center"
              >
                Get Started
                <MdArrowRightAlt className="text-white text-xl" />
              </motion.button>
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 bg-white text-black rounded-[5px] 
              text-sm font-bold flex gap-2 items-center"
              >
                <BsPlayCircle className="text-xl" />
                Watch Video
              </motion.button>
            </div>
          </div>
          <Image
            src={hero1}
            alt="hero image1"
            width={569}
            height={427}
            quality={95}
            priority
            className="w-[350px] h-[250px] 
            max-sm:w-[300px] max-sm:h-[200px]"
          />
        </div>
        <div className="relative">
          <Image
            src={heroA}
            alt="heroA img"
            width={617}
            height={904}
            quality={95}
            priority
            className="max-md:w-[370px] 
            max-md:h-[500px] max-sm:w-[300px]
            max-sm:h-[400px]"
          />
          <Image
            src={heroB}
            alt="heroB img"
            width={527}
            height={753}
            quality={95}
            priority
            className="absolute w-[370px] h-[500px]
          right-[10px] top-[30px] object-contain
          max-sm:top-[-50px] max-sm:right-[-10px]"
          />
          <Image
            src={heroC}
            alt="heroC img"
            width={572}
            height={752}
            quality={95}
            priority
            className="absolute w-[370px] h-[500px]
            right-[85px] top-[-25px] object-contain
            max-sm:top-[-90px] max-sm:right-[45px]"
          />
          <Image
            src={gradient}
            alt="gradient"
            width={465}
            height={445}
            quality={95}
            priority
            className="absolute -z-10 bottom-[45px] right-24
                w-[250px] h-[250px] max-md:bottom-[-20px]
                max-sm:right-[40px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
