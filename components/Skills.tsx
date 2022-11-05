import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";

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
      percent: 95,
      directionLeft: true,
    },
    {
      imgPath: "/css.png",
      percent: 85,
      directionLeft: true,
    },
    {
      imgPath: "/js.png",
      percent: 90,
      directionLeft: true,
    },
    {
      imgPath: "/tailwind.png",
      percent: 85,
      directionLeft: true,
    },
    {
      imgPath: "/react.png",
      percent: 90,
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
    <motion.div className="min-h-screen max-w-[2000px] relative flex flex-col overflow-hidden md:text-left  text-center gap-4 px-10 justify-center mx-auto items-center">
      <h3 className="uppercase absolute top-20 tracking-[12px] md:tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="uppercase absolute top-32 tracking-[3px] text-gray-500 text-sm">
        Hover over skill for web currency proficiency
      </h3>
      <div className="grid grid-cols-3 gap-4 mt-24">
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
      <Link
        className="text-base underline"
        href={"https://github.com/TuanVo3423"}
      >
        <div className="flex flex-row gap-x-2 items-center justify-center text-secondary underline cursor-pointer text-lg font-semibold mt-8">
          <a target="_blank" rel="noopener noreferrer">
            And more technical in my github, click to see more detail!
          </a>
        </div>
      </Link>
    </motion.div>
  );
}
