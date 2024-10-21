"use client";
import animaImage from "@/public/profile_pic1.svg";
import Image from "next/image";
import { techStackIcons } from "@/app/data/data";
import { myProjectsData } from "@/app/data/data";
import profile_rectangle from "@/public/profile_rectangle.svg";
import useMeasure from "react-use-measure";
import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import Contact_me from "../Contact_me/Contact_me";
import Link from "next/link";
import Cards from "../Projects_Card/Cards";
interface CardProps {
  id: number;
  laptop_img: any;
  chain_icon: any;
  github_icon: any;
  description: string;
  github_repository: string;
  live_url: string;
}

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
        onComplete: () => {
          setMustFinish(false);
          setReRender(!reRender);
        },
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
      <nav className="mx-auto text-[#fff] flex flex-col lg:flex-row items-center justify-around mt-9 mb-12 overflow-hidden ">
        <section className="text-center sm:text-left w-4/5 sm:w-2/4 mt-5">
          <h3 className="text-[19px] sm:text-2xl font-bold text-[#EAB308]">
            Hello, I am Favour Idoko,
          </h3>
          <p className="text-3xl sm:text-4xl font-bold text-nowrap">
            Frontend Developer
          </p>
          <p className="text-sm lg:max-w-96 my-2 text-[#afadad]">
            I design and write maintanable clean, elegant and efficient code
          </p>
          <Link
            href="#contact_me"
            className=" my-3 p-2 font-medium rounded-md transition  hover:bg-[#f8d95e] bg-[#FACC15] active:bg-[#e9c537] text-gray-600	"
          >
            Contact Me
          </Link>
        </section>
        <section className="sm:my-7 py-2 sm:py-0">
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
        <ul className="w-full bg-[#080808] p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center mx-auto">
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
      <section className="my-14 text-[#fff] " id="projects">
        <h3 className="text-center font-bold text-3xl ">PROJECTS</h3>
        <p className="text-center text-md text-lg mb-0">
          Things I’ve built so far
        </p>
        <main className="py-8 px-4 grid items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProjectsData?.map((items) => (
            <Cards 
              key={items.id}
              laptop_img={items.laptop_img}
              chain_icon={items.chain_icon}
              description={items.description} id={0} github_icon={items.github_icon} github_repository={items.github_repository} live_url={items.live_url}            />
          ))}

          {/* <motion.div
            className="absolute left-0 flex gap-6 "
            ref={ref}
            style={{ x: xTranslation }}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }} */}
          {/* > */}
          {/* {[...myProjectsData, ...myProjectsData].map((item, index) => (
              <Cards
                laptop_img={item.laptop_url}
                chain_icon={item.chain_icon}
                description={item.description}
                key={item.id}
              />
            ))} */}
          {/* </motion.div> */}
        </main>
      </section>
      <section
        className="mb-16 text-[#fff] flex justify-center items-center flex-col"
        id="about_me"
      >
        <h1 className="font-bold text-3xl my-4">
          ABOUT <span className="text-[#EAB308]">ME</span>
        </h1>
        <div className="w-full mx-auto p-8 bg-[#080808] justify-center items-center lg:flex">
          <figure className="lg:w-6/12 flex flex-col items-center">
            <Image
              src={profile_rectangle}
              alt={profile_rectangle}
              className="lg:w-[98%] xl:w-[57%]"
            />
          </figure>
          <article className="lg:w-6/12 flex flex-col items-center py-2 md:py-0">
            <p className="w-[100%] justify-self-center md:w-[90%] ">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me. I
              began my journey as a web developer in 2023, and since then, I've
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              with over 1 years after starting my web development journey, I'm
              building cutting-edge web applications using modern technologies
              such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and
              much more. When I'm not in full-on developer mode, you can find me
              hovering around on twitter or on indie hacker, witnessing the
              journey of early startups or enjoying some free time. You can
              follow me on Twitter where I share tech-related bites and build in
              public, or you can follow me on GitHub
            </p>
          </article>
        </div>
      </section>
      <section className="w-full " id="contact_me">
        <h1 className="font-bold text-3xl my-2 text-center text-[#fff]">
          CONTACT <span className="text-[#EAB308]">ME</span>
        </h1>
        <Contact_me />
      </section>
    </section>
  );
};

export default Main;
