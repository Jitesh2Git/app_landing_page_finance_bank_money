"use client";

import { featuresData } from "@/constants";
import { features, gradient } from "@/public";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      id="features"
      className="flex items-center max-md:flex-col-reverse
    max-md:text-center -mt-[80px] max-md:mt-0"
    >
      <div className="relative">
        <Image
          src={features}
          alt="features img"
          width={720}
          height={761}
          quality={95}
          priority
          className="w-[800px] h-[500px] object-contain
          max-sm:w-[380px] max-sm:h-[380px] max-sm:object-cover
         "
        />
        <Image
          src={gradient}
          alt="gradient"
          width={465}
          height={445}
          quality={95}
          priority
          className="absolute -z-10 top-10 right-28
                w-[280px] h-[280px] max-md:right-[280px]
                max-md:top-5 max-sm:right-[50px]"
        />
      </div>
      <div className="p-3 max-md:p-0">
        <h1
          className="text-red uppercase text-[12px] font-roboto
        tracking-widest font-bold"
        >
          Features
        </h1>
        <p
          className="font-extrabold text-3xl max-md:text-2xl font-roboto
        mb-5"
        >
          UiFry Premium
        </p>
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
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
            className="mt-2"
          >
            <div className="flex gap-2 items-center max-md:justify-center">
              <Image
                src={feature.image}
                alt="feature data img"
                width={24}
                height={24}
                quality={95}
                priority
                className="w-[15px] h-[15px]"
              />
              <h2 className="text-[13px] font-bold font-roboto">
                {feature.heading}
              </h2>
            </div>
            <p
              className="mt-2 text-grey text-[13px]
              capitalize max-lg:mx-4"
            >
              {feature.para}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
