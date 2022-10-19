import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-all duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={"/avt.png"}
          width={128}
          height={128}
          objectFit="cover"
          alt="expImg"
          className="object-center rounded-full xl:w-[200px] xl:h-[200px]"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl uppercase font-bold">Student of VKU</h4>
        {/* tech used    */}
        <div className="flex items-center justify-center space-x-2 my-2">
          <div>
            <Image
              src={"/js.png"}
              width={40}
              height={40}
              objectFit="cover"
              alt={"tech"}
            />
          </div>
          <div>
            <Image
              src={"/js.png"}
              width={40}
              height={40}
              objectFit="cover"
              alt={"tech"}
            />
          </div>
          <div>
            <Image
              src={"/js.png"}
              width={40}
              height={40}
              objectFit="cover"
              alt={"tech"}
            />
          </div>
        </div>
        <p className="uppercase py-5 text-gray-300">
          Start work... ended at....
        </p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Some infomation of myself</li>
          <li>Some infomation of myself</li>
          <li>Some infomation of myself</li>
          <li>Some infomation of myself</li>
        </ul>
      </div>
    </article>
  );
}
