'use client'
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { GrLinkedinOption } from "react-icons/gr";
import menu_icon from "@/public/menu_icon.svg";
import linkedIn_icon from "@/public/linkedin_icon.svg";
import github_icon from "@/public/github_logo.svg";
let PDF_FILE_URL = 'http://localhost:7000/file_pdf.pdf'
// 

const Header = () => {
  const downloadFileAtUrl = (url)=>{
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=url;
    aTag.setAttribute('download', fileName) 
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <ul className="border-b border-[#292929] py-4 flex justify-around items-center bg-[#2b2b2b]">
        <li className="text-[#f6f6f6] font-bold text-xl">
          <Link href="/">
            FAVOUR<span className="text-[#EAB308]">IDOKO</span>
          </Link>
        </li>
        <li className="hidden md:flex gap-4 ">
          <Link
            href=""
            className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            Home
          </Link>
          <Link
            href="#skills"
            className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            Skills
          </Link>
          <Link
            href="#about_me"
            className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            Projects
          </Link>
          <Link
            href="#contact_me"
            className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            Contact
          </Link>
        </li>
        <li className="flex gap-5">
          <Link
            href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
            target="_blank"
            className="hidden md:flex gap-1 items-center text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            {" "}
            <Image src={linkedIn_icon} alt="linkedin" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/favouridoko1"
            target="_blank"
            className="hidden md:flex gap-1 items-center text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
          >
            <Image src={github_icon} alt="" />
            Github
          </Link>
        </li>
        <li className="">
          <Image src={menu_icon} alt="" className=" block md:hidden" />
        </li>
        <li>
        <button className=" my-1 p-2 font-medium rounded-lg transition  hover:bg-[#f8d95e] bg-[#FACC15] active:bg-[#e9c537] text-gray-600	md:hidden" onClick={()=>downloadFileAtUrl(PDF_FILE_URL)}>
            Download Resume
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
