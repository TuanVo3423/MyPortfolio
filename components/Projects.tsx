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
  const projects: project[] = [
    {
      name: "Generate-tools",
      description:
        "Simple tool generate document and images using openAI with langchainJS(framework).",
      imgPath: "/generate-tools.png",
    },
    {
      name: "AQUA E-Commerce",
      description:
        "E-Commerce fullstack using ReactJS, tailwindCss, redux-toolkit, redux-saga, nodejs, expressjs, mongodb, jwt authentication,rest API, paypal checkout.",
      imgPath: "/aqua.png",
    },
    {
      name: "Blogs App",
      description:
        "Programming Blogs-App Application Using Handlebars, Nodejs, ExpressJS, MongoDB. This project is simple with CRUD tasks and easy to get started do backend.",
      imgPath: "/blog.png",
    },
    {
      name: "Chat Realtime",
      description:
        "Programming Real-Time Messaging Application Using ReactJS, Firebase, lodash, antdesign. Login with Google / Facebook. Manage chat rooms. Add members to chat room. Show member list in chat room, Texting.",
      imgPath: "/chat.png",
    },

    {
      name: "Todo App",
      description:
        "Programming Todo-App Application Using ReactJS, Firebase, redux-toolkit.",
      imgPath: "/todo.png",
    },
    {
      name: "Tracking Covid 19",
      description:
        "Tracking Covid 19 simple UI with ReactJS, Material UI. This project help you to learn about ReactJS and fetch API.",
      imgPath: "/tracking.png",
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
        {projects.map((item, index) => {
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
                  src={`${item.imgPath}`}
                  alt="test1"
                  objectFit="contain"
                  layout="fill"
                />
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
                <h4 className="md:text-4xl text-2xl font-semibold text-center ">
                  <span className="underline decoration-secondary/50">
                    Case Study {index + 1} of {projects.length}:
                  </span>{" "}
                  {item.name}
                </h4>
                <p className="text-base text-center md:text-left xl:line-clamp-none line-clamp-4 whitespace-pre-wrap">
                  {item.description}
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
