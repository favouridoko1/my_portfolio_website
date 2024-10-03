import animaImage from "@/public/man_icon.svg";
import Image from "next/image";
const Main = () => {
  return (
    <nav className="mx-auto text-[#fff] flex items-center justify-around mt-11">
      <section className="">
        <h3 className="text-2xl font-semibold">Hello, I'm</h3>
        <h2 className="text-6xl text-[#48c937] font-semibold">
          &lt;Favour <br />
          Idoko/&gt;
        </h2>
        <br></br>
        <p className="text-4xl text-semibold">Frontend Developer</p>

        <ul>
          <div className="flex items-end">
            <li className="text-5xl font-semibold">2</li>
            <aside className="text-sm items-center font-semibold">
              <li>YEARS OF</li>
              <li>EXPERIENCE</li>
            </aside>
          </div>
        </ul>
      </section>
      <section className=" rounded-full pt-6">
        <Image
          src={animaImage}
          alt="Animaa image"
          className=" shadow-lg rounded-full bg-black "
        />
      </section>
    </nav>
  );
};

export default Main;
