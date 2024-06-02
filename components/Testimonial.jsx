"use client";

import { testimonialData } from "@/constants";
import { gradient } from "@/public";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section id="about">
      <div className="max-w-[30%] max-sm:max-w-[60%] mx-auto text-center">
        <h1
          className="uppercase text-[12px] 
                font-roboto font-bold tracking-widest"
        >
          Testimonial
        </h1>
        <p
          className="font-extrabold text-3xl font-roboto
                max-lg:text-2xl max-md:text-xl max-sm:text-md"
        >
          What Our Users Say About Us?
        </p>
      </div>
      {testimonialData.map((test, index) => (
        <div
          key={index}
          className="flex items-center max-md:text-center
        max-md:flex-col max-md:justify-center relative"
        >
          <Image
            src={test.image}
            alt="testimonial img"
            width={735}
            height={725}
            quality={95}
            priority
            className="w-[800px] h-[500px] object-contain
          max-sm:w-[380px] max-sm:h-[380px] max-sm:object-cover"
          />
          <Image
            src={gradient}
            alt="gradient"
            width={465}
            height={445}
            quality={95}
            priority
            className="absolute -z-10 top-20 right-[450px]
                w-[320px] h-[320px] max-md:right-[250px]
                max-sm:right-[20px]"
          />
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
            className="mr-[50px] max-md:mr-0 max-md:mx-5"
          >
            <h2
              className="text-xl font-extrabold
              max-md:text-[18px]"
            >
              {test.heading}
            </h2>
            <p
              className="mt-4 text-grey text-[13px]
            capitalize mr-3 max-md:mr-4"
            >
              {test.para}
            </p>
            <div
              className="flex items-center gap-2
            max-md:justify-center"
            >
              {test.image1.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="test img"
                  width={60}
                  height={61}
                  quality={95}
                  priority
                  className={`my-5 ${
                    index === 0
                      ? "w-[35px] h-[35px]"
                      : "w-[25px] h-[25px] opacity-[50%]"
                  }`}
                />
              ))}
            </div>
            <h4 className="font-extrabold text-sm">Nick Jonas</h4>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Testimonial;
