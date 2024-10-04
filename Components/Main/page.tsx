import animaImage from "@/public/man_icon.svg";
import Image from "next/image";
const Main = () => {
  return (
    <section>
      <nav className="mx-auto text-[#fff] flex items-center justify-around my-11">
        <section className="">
          <h3 className="text-2xl font-bold">Hello, I am Favour Idoko,</h3>
          <p className="text-4xl font-bold text-nowrap">
            Frontend Developer
          </p>
          <p className="text-sm lg:max-w-96 my-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className=" my-1 p-2 font-medium rounded-lg transition hover:bg-[#2fdf2f] bg-[#188618] active:bg-[#176d25]">Download Resume</button>
          <ul className="flex gap-3"></ul>
        </section>
        <section className=" rounded-full pt-6">
          <Image
            src={animaImage}
            alt="Animaa image"
            className=" shadow-lg rounded-full bg-black "
          />
        </section>
      </nav>
      <section className="text-[#fff] items-center justify-center text-center">
        <h2 className="text-center font-bold text-3xl">MY TECH STACK</h2>
        <p className="text-center ">
          {" "}
          Technologies I&apos;ve been working with recently
        </p>
      </section>
    </section>
  );
};

export default Main;
