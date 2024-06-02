import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { footerData } from "@/constants";

const Footer = () => {
  return (
    <footer
      className="px-5 mt-20
    pb-10"
    >
      <div
        className="flex justify-center gap-16
      max-md:flex-col max-md:items-center max-md:gap-10"
      >
        <div className="space-y-3">
          <Link href="/">
            <Image
              src={logo}
              alt="logo image"
              width={117}
              height={35}
              quality={95}
              priority
              className="w-[90px]"
            />
          </Link>
          <p className="flex items-center gap-2 text-[13px] font-bold">
            <MdEmail className="text-red text-xl" />
            <span>Help@Frybix.Com</span>
          </p>
          <p className="flex items-center gap-2 text-[13px] font-bold">
            <FaPhoneAlt className="text-red text-xl" />
            <span>+1234 456 678 89</span>
          </p>
        </div>
        <div
          className="flex max-sm:grid grid-cols-2
        max-sm:text-center gap-10 max-sm:gap-5"
        >
          {footerData.map((footer, index) => (
            <div key={index} className="space-y-3">
              <h1 className="text-xl font-bold">{footer.heading}</h1>
              {footer.links.map((link, index) => (
                <p
                  key={index}
                  className="text-[12px] font-bold
              font-roboto cursor-pointer"
                >
                  {link}
                </p>
              ))}
              {index === 3 && (
                <div className="flex max-lg:flex-col">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-3 text-sm"
                  />
                  <button
                    className="text-white bg-black rounded-sm
                  py-3 px-4 text-sm"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="text-center mx-auto
      mt-20 border-t border-grey pt-10"
      >
        <p className="text-[13px] font-bold font-roboto">
          Copyright 2022 Uifry.Com All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
