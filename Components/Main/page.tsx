import animaImage from "@/public/man_icon.svg";
import Image from "next/image";
import { techStackIcons } from "@/app/data/data";
import Cards from "../projectsCard/Cards";

interface StackImages {
  id: number;
  url: any;
  description: string;
}

const Main = ()=>{
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
            Technologies I’ve been working with recently
          </li>
        </ul>
        <ul className="w-5/6 bg-[#000] p-4 rounded-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-center mx-auto">
          {techStackIcons.map((items:StackImages) => (
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
      <section className="my-16 text-[#fff]">
        <h3 className="text-center font-bold text-3xl ">PROJECTS</h3>
        <p className="text-center text-md text-lg mb-10">Things I’ve built so far</p>
        <Cards/>
      </section>
    </section>
  );
};

export default Main;
