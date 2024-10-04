import animaImage from "@/public/man_icon.svg";
import Image from "next/image";
import javascript_icon from "@/public/javascript-original 1.svg";
import typescript_icon from "@/public/typescript-logo.svg";
import react_icon from "@/public/react-logo.svg";
import redux_icon from "@/public/redux-logo.svg";
import nextjs_icon from "@/public/nextjs_logo.svg";
import html_icon from "@/public/html_icon.svg";
import css_icon from "@/public/css_logo.svg";
import tailwind_icon from "@/public/tailwind-logo.svg";
import bootstrap_icon from "@/public/logos_bootstrap.svg";
import sass_icon from "@/public/logos_sass.svg";

interface stackImages {
  id: number;
  url: any;
  description: string;
}

const Main = () => {
  const techStackIcons: stackImages = [
    {
      id: 1,
      url: html_icon,
      description: "Html5",
    },
    {
      id: 2,
      url: css_icon,
      description: "CSS3",
    },
    {
      id: 3,
      url: tailwind_icon,
      description: "Tailwind",
    },
    {
      id: 4,
      url: bootstrap_icon,
      description: "Bootstrap",
    },
    {
      id: 5,
      url: sass_icon,
      description: "SaSS",
    },
    {
      id: 6,
      url: javascript_icon,
      description: "Javascript",
    },
    {
      id: 7,
      url: typescript_icon,
      description: "Typescript",
    },
    {
      id: 8,
      url: react_icon,
      description: "ReactJS",
    },
    {
      id: 9,
      url: redux_icon,
      description: "Redux Toolkit",
    },
    {
      id: 10,
      url: nextjs_icon,
      description: "NextJs",
    },
  ];

  return (
    <section className="">
      <nav className="mx-auto text-[#fff] flex items-center justify-around my-11">
        <section className="">
          <h3 className="text-2xl font-bold">Hello, I am Favour Idoko,</h3>
          <p className="text-4xl font-bold text-nowrap">Frontend Developer</p>
          <p className="text-sm lg:max-w-96 my-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className=" my-1 p-2 font-medium rounded-lg transition hover:bg-[#2fdf2f] bg-[#188618] active:bg-[#176d25]">
            Download Resume
          </button>
          {/* <ul className="flex gap-3">

          </ul> */}
        </section>
        <section className=" rounded-full pt-6">
          <Image
            src={animaImage}
            alt="Animaa image"
            className=" shadow-lg rounded-full bg-black "
          />
        </section>
      </nav>
      <section className="text-[#fff] items-center justify-center text-center flex flex-col gap-4" id="skills">
        <ul className="mt-11">
          <li className="text-center font-bold text-3xl">MY TECH STACK</li>
          <li className="text-center text-md text-lg ">
            Technologies I&apos;ve been working with recently
          </li>
        </ul>
        <ul className="w-5/6 bg-[#000] p-4 rounded-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-center mx-auto">
          {techStackIcons.map((items: stackImages) => (
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
      <section>
        <h3 className="text-center font-bold text-3xl text-[#fff]">PROJECTS</h3>
      </section>
    </section>
  );
};

export default Main;
