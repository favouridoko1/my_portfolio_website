import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { GrLinkedinOption } from "react-icons/gr";

import linkedIn_icon from '@/public/linkedin_icon.svg'
import github_icon from '@/public/github_logo.svg'

const Header = () => {
  return (
    <header className="w-full">
      <ul className="border-b border-[#292929] py-4 flex justify-around items-center ">
        <li className="text-[#d4d4d4] font-bold text-xl">
          <span className="text-[#727272]">FAVOUR</span>IDOKO
        </li>
        <li className="flex gap-4">
          <Link
            href=""
            className="text-md font-semibold text-[#d4d4d4] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            Home
          </Link>
          <Link
            href=""
            className="text-md font-semibold text-[#d4d4d4] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            Skills
          </Link>
          <Link
            href=""
            className="text-md font-semibold text-[#d4d4d4] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            About
          </Link>
          <Link
            href=""
            className="text-md font-semibold text-[#d4d4d4] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            Projects
          </Link>
          <Link
            href=""
            className="text-md font-semibold text-[#d4d4d4] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            Contact
          </Link>
        </li>
        <li className="flex gap-5">
          <Link
            href=""
            className=" flex gap-1 items-center text-md font-semibold text-[#d4d4d4] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            {" "}
            <Image src={linkedIn_icon} alt="linkedin" />
            LinkedIn
          </Link>
          <Link
            href=""
            className="flex gap-1 text-md font-semibold text-[#d4d4d4] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            <Image src={github_icon} alt="" />
            Github
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
