"use client";

import { advantagesData } from "@/constants";
import { gradient } from "@/public";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Advantages = () => {
  return (
    <section className="px-5 -mt-[50px] max-md:mt-0">
      {advantagesData.map((advantage, index) => (
        <div
          key={index}
          className={`flex items-center relative 
          max-md:flex-col max-md:text-center
          ${index === 1 ? "flex-row-reverse" : "flex-row"}`}
        >
          <div className="mt-5">
            {index === 0 && (
              <div className="px-1 relative">
                <h1
                  className="text-red uppercase text-[12px] 
                font-roboto tracking-widest font-bold"
                >
                  Advantages
                </h1>
                <p
                  className="font-extrabold text-3xl font-roboto
                max-md:text-2xl"
                >
                  Why Choose Uifry?
                </p>
                <Image
                  src={gradient}
                  alt="gradient"
                  width={465}
                  height={445}
                  quality={95}
                  priority
                  className="absolute -z-10 top-[5px] right-[-320px]
                w-[300px] h-[300px] max-md:top-[200px] max-md:right-[260px]
                max-sm:right-[40px] max-sm:top-[280px]"
                />
              </div>
            )}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              className="flex gap-2 items-center max-md:justify-center
            mt-5"
            >
              <Image
                src={advantage.image}
                alt="feature data img"
                width={24}
                height={24}
                quality={95}
                priority
                className="w-[30px] h-[30px]"
              />

              <h2
                className="text-lg font-extrabold
              max-md:text-[18px]"
              >
                {advantage.heading}
              </h2>
            </motion.div>
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              className="mt-4 text-grey text-[13px]
              capitalize max-lg:mx-4"
            >
              {advantage.para}
            </motion.p>
          </div>
          <Image
            src={advantage.image1}
            alt="advantage img"
            width={720}
            height={761}
            quality={95}
            priority
            className="w-[800px] h-[450px] object-contain
            max-sm:w-[380px] max-sm:h-[380px] max-sm:object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default Advantages;
