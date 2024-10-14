"use client";
import animaImage from "@/public/profile_pic1.svg";
import Image from "next/image";
import { techStackIcons } from "@/app/data/data";
import Cards from "../projectsCard/Cards";
import { myProjectsData } from "@/app/data/data";
import profile_rectangle from "@/public/profile_rectangle.svg";
import useMeasure from "react-use-measure";
import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface StackImages {
  id: number;
  url: any;
  description: string;
}

const Main = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  let FAST_DURATION = 25;
  let SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState<boolean>(false);
  const [reRender, setReRender] = useState<boolean>(false);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: ()=> {
          setMustFinish(false)
          setReRender(!reRender)
        }
        
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [xTranslation, width, duration, reRender]);

  return (
    <section className="">
      <nav className="mx-auto text-[#fff] flex flex-col lg:flex-row items-center justify-around my-14 ">
        <section className="text-center sm:text-left w-4/5 sm:w-2/4 mt-11">
          <h3 className="text-2xl font-bold text-[#EAB308]">
            Hello, I am Favour Idoko,
          </h3>
          <p className="text-4xl font-bold text-nowrap">Frontend Developer</p>
          <p className="text-sm lg:max-w-96 my-2 text-[#afadad]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className=" my-1 p-2 font-medium rounded-lg transition hover:bg-[#f8d95e] bg-[#FACC15] active:bg-[#e9c537] text-[#0f0f0f]">
            Download Resume
          </button>
        </section>
        <section className="sm:my-7">
          <Image
            src={animaImage}
            alt="Animaa image"
            className="shadow-lg rounded-full bg-black z-10 animate-floating"
          />
        </section>
      </nav>
      <section
        className="text-[#fff] items-center justify-center text-center flex flex-col gap-4"
        id="skills"
      >
        <ul className="mt-11">
          <li className="text-center font-bold text-3xl">MY TECH STACK</li>
          <li className="text-center text-md text-lg ">
            Technologies I’ve been working with recently
          </li>
        </ul>
        <ul className="w-5/6 bg-[#000] p-4 rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   lg:grid-cols-5 text-center mx-auto">
          {techStackIcons.map((items: StackImages) => (
            <li
              key={items.id}
              className="flex justify-center flex-col items-center my-3"
            >
              <Image src={items.url} alt="" />
              <p className="font-medium">{items.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="my-16 text-[#fff]" id="projects">
        <h3 className="text-center font-bold text-3xl ">PROJECTS</h3>
        <p className="text-center text-md text-lg mb-0">
          Things I’ve built so far
        </p>
        <main className="py-8">
          <motion.div
            className="absolute left-0 flex gap-4 "
            ref={ref}
            style={{ x: xTranslation }}
            onHoverStart={() => {setMustFinish(true); setDuration(SLOW_DURATION)}}
            onHoverEnd={() => {setMustFinish(true); setDuration(FAST_DURATION)}}
          >
            {[...myProjectsData, ...myProjectsData].map((item, index) => (
              <Cards laptop_img={item.laptop_url} key={index} />
            ))}
          </motion.div>
        </main>
      </section>
      <section
        className="my-16 text-[#fff] flex justify-center items-center flex-col"
        id="about_me"
      >
        <h1 className=" font-bold text-3xl my-4">
          ABOUT <span className="text-[#EAB308]">ME</span>
        </h1>
        <div className="w-full mx-auto p-8 bg-[#080808] justify-center items-center md:flex">
          <figure className="md:w-6/12 flex flex-col items-center">
            <Image
              src={profile_rectangle}
              alt={profile_rectangle}
              className="w-[55%]"
            />
          </figure>
          <div className="md:w-6/12 flex flex-col items-center py-2 md:py-0">
            <p className="w-[60%] justify-self-center md:w-[90%] ">
              Hello! I’m Favour Idoko, a passionate frontend developer with a
              knack for creating visually stunning and user-friendly websites.
              Yo, you can find me exploring the latest web technologies,
              contributing to open-source projects, or honing my skills in
              design.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Main;
