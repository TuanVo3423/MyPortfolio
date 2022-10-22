import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Envelope } from "phosphor-react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky p-5 top-0 z-20 max-w-7xl flex flex-row items-start justify-between mx-auto xl:items-center">
      {/* Social icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0.5,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            duration: 1.5,
          },
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.instagram.com/titus_3423/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/TuanVo3423"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/titus3423"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      {/* Contact icons */}

      <motion.div
        initial={{
          x: 500,
          opacity: 0.5,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            duration: 1.5,
          },
        }}
        className="cursor-pointer text-gray-300 flex flex-row items-center"
      >
        <Link href={"#contact"}>
          <div className="flex flex-row items-center gap-x-2">
            <Envelope
              size={32}
              weight="thin"
              className="text-gray bg-transparent"
            />
            <p className="uppercase text-sm text-gray-400 hidden md:inline-flex">
              Get it touch
            </p>
          </div>
        </Link>
        {/* <Link href={"#experience"}>
          <button className="btnHero">Experience</button>
        </Link> */}
      </motion.div>
    </header>
  );
}
