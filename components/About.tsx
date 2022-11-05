/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col px-10 relative text-center md:text-left md:flex-row max-w-7xl mx-auto justify-evenly items-center"
    >
      <h3 className="uppercase absolute top-20 tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      {/* <div className="absolute top-32 flex flex-col md:flex-row justify-evenly items-center"> */}
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 0.75,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:max-h-96 xl:w-[500px] xl:h-[600px]"
        src="/2nd_uni.png"
      />
      <div className="md:space-y-10 space-y-4 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-secondary/50">litle</span>{" "}
          background
        </h4>
        <p className="text-base line-clamp-4 md:line-clamp-none">
          Hi gangs, I'm Tuan, you can call me "titus". I'm currently a 3nd year
          university student of Viet Han information and communication
          technology from 21GIT class and my major is computer science. I am an
          organized person and always focused on creating results. While setting
          goals, I am always very realistic, I am always working to develop ways
          to get things done more efficiently and more often than I expect. I am
          able to work well under pressure and adhere to strict deadlines.
        </p>
      </div>
      {/* </div> */}
    </motion.div>
  );
}
