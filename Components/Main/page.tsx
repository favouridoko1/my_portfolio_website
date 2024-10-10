import animaImage from "@/public/profile_pic1.svg";
import Image from "next/image";
import { techStackIcons } from "@/app/data/data";
import Cards from "../projectsCard/Cards";
import Scroll from "../Scroll_effect/scroll_effect";

interface StackImages {
  id: number;
  url: any;
  description: string;
}

const Main = () => {
  return (
    <section className="">
      <nav className="mx-auto text-[#fff] flex flex-col lg:flex-row items-center justify-around my-14 ">
        <section className="text-center sm:text-left w-4/5 sm:w-2/4">
          <h3 className="text-2xl font-bold text-[#EAB308]">Hello, I am Favour Idoko,</h3>
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
        <section className="my-7">
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
        <ul className="">
          <Cards />
          {/* <Scroll/> */}
        </ul>
      </section>
      <section
        className="my-16 text-[#fff] flex justify-center items-center flex-col"
        id="about_me"
      >
        <h1 className=" font-bold text-3xl mb-2">ABOUT ME</h1>
        <p className="w-3/4 p-8 bg-[#080808] rounded-lg">
          Hello! I’m Favour Idoko, a passionate frontend developer with
          a knack for creating visually stunning and user-friendly websites.
          With a background in [Your Background, e.g., design, computer
          science], I bring a unique blend of creativity and technical expertise
          to every project. I specialize in HTML, CSS, and JavaScript, and I
          have experience with popular frameworks like React and Vue.js. My goal
          is to build responsive and accessible web applications that enhance
          user experience and drive engagement. I thrive in collaborative
          environments and enjoy working with designers and backend developers
          to bring ideas to life. In my spare time, you can find me exploring
          the latest web technologies, contributing to open-source projects, or
          honing my skills in design. I believe in continuous learning and am
          always seeking new challenges that push my boundaries and expand my
          knowledge. I’m excited to connect and explore how I can help bring
          your vision to life!
        </p>
      </section>
    </section>
  );
};

export default Main;
