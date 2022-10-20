import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col max-w-full overflow-hidden text-left md:flex-row px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase absolute top-20 tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-y-hidden overflow-x-scroll snap-x snap-mandatory z-20">
        {/* project */}
        {projects.map((item, index) => {
          return (
            <div
              className="w-screen h-screen flex flex-col space-y-4 items-center justify-center flex-shrink-0 snap-center p-20 md:p-48"
              key={index}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: -200,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{ once: true }}
                className="md:w-full md:h-full w-full h-[40%] relative"
              >
                <Image
                  src={"/avt.png"}
                  alt="test"
                  objectFit="contain"
                  layout="fill"
                />
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="md:text-4xl text-2xl font-semibold text-center ">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {index + 1} of {projects.length}:
                  </span>{" "}
                  Do Something
                </h4>
                <p className="text-base text-center md:text-left xl:line-clamp-none line-clamp-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry is
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
}
