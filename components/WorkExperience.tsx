import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

type Props = {};
interface card {
  title: String;
  timestart: String;
  timeend: String;
  description: String[];
  technical: String[];
  imgPath: String;
}

export default function WorkExperience({}: Props) {
  const data: card[] = [
    {
      title: "1st VKU student",
      timestart: "September 2021",
      timeend: "February 2022",
      description: [
        "Get started with programming like C++, OOP, Java Core(IO Stream, Network,...).",
        "Learn about Html, Css, Javascript.",
        "Learn Tailwind Css, ReactJS by myself.",
        "Learn about relational databases like SQL Server.",
      ],
      technical: [
        "/html.png",
        "/css.png",
        "/java.png",
        "/js.png",
        "/react.png",
        "/tailwind.png",
      ],
      imgPath: "/bwd1.png",
    },
    {
      title: "2st VKU student",
      timestart: "March 2022",
      timeend: "September 2023",
      description: [
        "Get started with Typescipt.",
        "Learn about a web framework like NestJS.",
        "Get started with backend like NodeJS, ExpressJS.",
        "learn about non relational databases like MongoDB, Firebase.",
      ],
      technical: [
        "/ts.png",
        "/mongodb.png",
        "/nodejs.png",
        "/express.png",
        "/nextjs.png",
        "/firebase.png",
      ],
      imgPath: "/2nd_uni.png",
    },
    {
      title: "Intership at French company",
      timestart: "April 2023",
      timeend: "June 2023",
      description: [
        "Join and work on the real project of company.",
        "Learn more about some technologies used in the project like above.",
        "Get started with AI and apply the openAI into the project.",
        "Working on the real process development software.",
      ],
      technical: [
        "/ts.png",
        "/tanstack.png",
        "/nodejs.png",
        "/langchainjs.png",
        "/nextjs.png",
        "/openai.png",
      ],
      imgPath: "/avt04.png",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col max-w-full overflow-hidden text-left md:flex-row md:px-10 px-0 justify-center mx-auto items-center"
    >
      <h3 className="uppercase absolute top-20 tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className=" mt-12 w-full flex flex-row space-x-5 md:p-10 p-2 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary">
        {data.map((item, index) => {
          return <ExperienceCard data={item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
