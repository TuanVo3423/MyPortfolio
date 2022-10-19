import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col max-w-full overflow-hidden text-left md:flex-row px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="uppercase absolute top-20 tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full absolute top-24  flex flex-row space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        
      </div>
    </motion.div>
  );
}
