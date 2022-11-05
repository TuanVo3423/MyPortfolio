import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello gangs,", "I'm Tuan", "I'm fullstack web developer."],
    delaySpeed: 2000,
    loop: true,
  });
  return (
    <div className="h-screen flex flex-col gap-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto"
        width={128}
        height={128}
        alt="avt"
        objectFit="cover"
        src="/avt02.png"
      />
      <div className="z-20">
        <h2 className="uppercase text-base md:tracking-[15px] tracking-[5px] text-gray-500 pb-2">
          Software engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="secondary" />
        </h1>
        <div className="pt-5 cursor-pointer">
          <Link href={"#about"}>
            <button className="btnHero">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="btnHero">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="btnHero">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="btnHero">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
