import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};
interface skillItem {
  imgPath: string;
  percent: number;
  directionLeft: boolean;
}

export default function Skills({}: Props) {
  const Skills: skillItem[] = [
    {
      imgPath: "/html.png",
      percent: 80,
      directionLeft: true,
    },
    {
      imgPath: "/css.png",
      percent: 75,
      directionLeft: true,
    },
    {
      imgPath: "/js.png",
      percent: 80,
      directionLeft: true,
    },
    {
      imgPath: "/tailwind.png",
      percent: 75,
      directionLeft: true,
    },
    {
      imgPath: "/react.png",
      percent: 80,
      directionLeft: true,
    },
    {
      imgPath: "/nextjs.png",
      percent: 80,
      directionLeft: true,
    },
    {
      imgPath: "/express.png",
      percent: 80,
      directionLeft: false,
    },
    {
      imgPath: "/nodejs.png",
      percent: 80,
      directionLeft: false,
    },
    {
      imgPath: "/mongodb.png",
      percent: 80,
      directionLeft: false,
    },
  ];
  return (
    <motion.div className="min-h-screen max-w-[2000px] relative flex flex-col overflow-hidden md:text-left text-center md:flex-row px-10 justify-center mx-auto items-center">
      <h3 className="uppercase absolute top-20 tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="uppercase absolute top-32 tracking-[3px] text-gray-500 text-sm">
        Hover over skill for currency profieciency
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {Skills.map((item, index) => {
          return (
            <Skill
              key={index}
              imgPath={item.imgPath}
              percent={item.percent}
              directionLeft={item.directionLeft}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
