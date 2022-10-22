import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

interface project {
  name: string;
  description: string;
  imgPath: string;
}
export default function Projects({}: Props) {
  const test = [1, 2];
  const projects: [project] = [
    {
      name: "Project 1",
      description: "des1",
      imgPath: "fweninfiwe",
    },
  ];

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
      className="h-screen relative flex flex-col w-full overflow-hidden text-left md:flex-row px-10 justify-center mx-auto items-center "
    >
      <h3 className="uppercase absolute top-20 tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full flex items-center overflow-y-hidden overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary">
        {/* project */}
        {test.map((item, index) => {
          return (
            <div
              className="w-screen h-screen flex flex-col space-y-4 snap-center items-center justify-center flex-shrink-0 p-20 md:p-48"
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
                  alt="test1"
                  objectFit="contain"
                  layout="fill"
                />
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
                <h4 className="md:text-4xl text-2xl font-semibold text-center ">
                  <span className="underline decoration-secondary/50">
                    Case Study {index} of {test.length}:
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
      <div className="w-full absolute top-[30%] bg-secondary/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
}
