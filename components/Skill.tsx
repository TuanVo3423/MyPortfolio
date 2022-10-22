import React from "react";
import { motion } from "framer-motion";

type Props = {
  imgPath: string;
  percent: number;
  directionLeft?: boolean;
};

export default function Skill({ directionLeft, imgPath, percent }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        src={imgPath}
        className="w-16 h-w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full border border-gray-500 object-cover filter group-hover:grayscale
        transition-all duration-300 ease-in-out
        "
      ></motion.img>
      <div className="absolute w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out z-0 ">
        <div className="flex justify-center items-center h-full">
          <p className=" text-black font-bold text-3xl opacity-100">
            {percent}%
          </p>
        </div>
      </div>
    </div>
  );
}
