"use client";
import React, { useState } from "react";
import { myProjectsData } from "@/app/data/data";
import Image from "next/image";
import laptop_img from "@/public/laptop_image.svg";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
interface CardProps {
  id: number;
  laptop_img: any;
  chain_icon: any;
  github_icon: any;
  description: string;
  github_repository: string;
}
const Cards: React.FC<CardProps> = () => {
  const [showOverLay, setShowOverLay] = useState<null | Boolean>(false);
  let [ref, { width }] = useMeasure();
  return (
    <motion.section
      className="p-8"
      onHoverStart={() => setShowOverLay(true)}
      onHoverEnd={() => setShowOverLay(false)}
    >
      <section ref={ref} className=" flex gap-4 relative overflow-hidden ">
        <AnimatePresence>
          {[...myProjectsData, ...myProjectsData]?.map((items, index) => (
            <motion.ul
              className="gap-4  hover:border-[#949494] hover:border rounded-md"
              key={items.id}
            >
              <Image src={laptop_img} alt="" className="rounded-lg" />
            </motion.ul>
          ))}
        </AnimatePresence>
      </section>
    </motion.section>
  );
};

export default Cards;
