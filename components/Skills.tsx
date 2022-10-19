import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="min-h-screen max-w-[2000px] relative flex flex-col overflow-hidden md:text-left text-center md:flex-row px-10 justify-center mx-auto items-center">
      <h3 className="uppercase absolute top-20 tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="uppercase absolute top-32 tracking-[3px] text-gray-500 text-sm">
        Hover over skill for currency profieciency
      </h3>
      <div className="grid grid-cols-4 gap-4">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
