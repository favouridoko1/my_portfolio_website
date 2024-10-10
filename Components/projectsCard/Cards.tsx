"use client";
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
}

const Cards: React.FC<CardProps> = () => {
  const [showOverLay, setShowOverLay] = useState<null | Boolean>(false);
  let [ref, bounds] = useMeasure();
  const width = bounds.width;
  const xTransition = useMotionValue(0);
  const router = useRouter();
  const navigate = (page: string) => router.push(page);

  useEffect(() => {
    let control;
    let finalPosition = -width / 2 - 8;
    control = animate(xTransition, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => control.stop(); // Cleanup animation on unmount
  }, [xTransition, width]);

  return (
    <motion.section
      className="p-8"
      onHoverStart={() => setShowOverLay(true)}
      onHoverEnd={() => setShowOverLay(false)}
    >
      <section
        ref={ref}
        className="flex gap-4 relative overflow-hidden"
        style={{ x: xTransition }}
      >
        <AnimatePresence>
          {[...myProjectsData].map((items) => (
            <motion.ul
              className="gap-4 p-4 bg-[#4d4c4c] rounded-md transform transition-transform duration-1000 hover:scale-105"
              key={items.id}
            >
              <Image
                src={laptop_img}
                alt="Laptop image for project preview"
                className="rounded-lg"
              />
              <p className="text-sm">{items.description}</p>
              <ul className="flex justify-between p-x mt-2">
                <li>
                  <a
                    href={items.live_url}
                    className="flex gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={items.chain_icon} alt="Chain icon" />
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href={items.github_repository}
                    target="_blank"
                    className="flex gap-2"
                  >
                    <Image src={items.github_icon} alt="Github icon" />
                    GitHub
                  </a>
                </li>
              </ul>
            </motion.ul>
          ))}
        </AnimatePresence>
      </section>
    </motion.section>
  );
};

export default Cards;
