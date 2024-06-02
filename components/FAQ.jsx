"use client";

import { faqData } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const FAQ = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="px-5 max-md:mt-16"
    >
      <div className="max-md:text-center mb-8">
        <h1
          className="text-red uppercase text-[12px] 
                font-roboto tracking-widest font-bold"
        >
          FAQ
        </h1>
        <p
          className="font-extrabold text-3xl font-roboto
                max-md:text-2xl"
        >
          Frequently Asked <br /> Questions
        </p>
      </div>
      <div className="grid max-md:grid-cols-1 grid-cols-2 gap-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`rounded-md p-5 ${
              [0, 3, 4].includes(index) ? "text-white bg-red" : "text-black"
            } ${
              index === 0
                ? "max-md:order-1"
                : index === 1
                ? "max-md:order-2"
                : index === 3
                ? "max-md:order-3"
                : index === 2
                ? "max-md:order-4"
                : index === 4
                ? "max-md:order-5"
                : "max-md:order-6"
            }`}
          >
            <h2 className="text-2xl font-extrabold max-md:text-xl">
              {faq.heading}
            </h2>
            <p
              className={`mt-4 text-[14px] capitalize text-grey ${
                [0, 3, 4].includes(index) && "text-white"
              }`}
            >
              {faq.para}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQ;
