import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

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
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/jaketrent"
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
        <SocialIcon
          url="https://email.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase text-sm text-gray-400 hidden md:inline-flex">
          Get it touch
        </p>
      </motion.div>
    </header>
  );
}
