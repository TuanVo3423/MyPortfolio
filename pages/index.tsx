import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowUp } from "phosphor-react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] dark:red text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-secondary scroll-smooth scrollbar-thin 
    "
    >
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skill */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Project */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
      <Link href={"#hero"}>
        <ArrowUp
          size={44}
          weight="bold"
          className="sticky z-[100] cursor-pointer md:left-[90%] left-[82%] p-2 animate-pulse bottom-10 border-2 border-secondary rounded-full"
        />
      </Link>
    </div>
  );
};

export default Home;
