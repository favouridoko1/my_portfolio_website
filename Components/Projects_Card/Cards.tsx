import React, { useState, useEffect } from "react";
import { myProjectsData } from "@/app/data/data";
import Image from "next/image";
import laptop_img from "@/public/laptop_image.svg";
import { useRouter } from "next/navigation";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import useMeasure from "react-use-measure";
import Link from "next/link";

interface CardProps {
  id: number;
  laptop_img: any;
  chain_icon: any;
  github_icon: any;
  description: string;
  github_repository: string;
  live_url: string;
}

const Cards: React.FC<CardProps> = ({
  laptop_img,
  chain_icon,
  github_icon,
  description,
  github_repository,
  live_url,
}) => {
  return (
    <>
      <ul className="bg-[#080808] p-4 rounded">
        <li className="grid gap-2">
          <Image src={laptop_img} alt={laptop_img} />
          <p>{description}</p>
          <div className="flex justify-between">
          <Link href={github_repository} target="_blank" className="py-1 px-2 font-semibold rounded hover:bg-[#f8d95e] bg-[#FACC15] flex items-center gap-1 active:bg-[#e9c537] text-gray-600 w-fit">Gitbub Repo</Link>
          <Link href={live_url} target="_blank" className="py-1 px-2 font-semibold rounded hover:bg-[#f8d95e] bg-[#FACC15] flex items-center gap-1 active:bg-[#e9c537] text-gray-600 w-fit">Demo</Link>

          </div>
        </li>
      </ul>
    </>
  );
};

export default Cards;
