"use client";
import React, { useState, useEffect } from "react";
import { myProjectsData } from "@/app/data/data";
import Image from "next/image";
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

const Cards: React.FC<CardProps> = ({
  id,
  laptop_img,
  chain_icon,
  github_icon,
  description,
  github_repository,
}) => {
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

    return () => control.stop(); // Cleanup animation on unmoun
  }, [xTransition, width]);

  return (
    <motion.section className="relative overflow-hidden h-[250px] rounded-lg min-w-[300px] flex justify-center items-center">
      <Image src={laptop_img} alt={laptop_img} fill style={{objectFit:"cover"}} />
    </motion.section>
  );
};

export default Cards;
