"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type ShrineCardProps = {
  title: string;
  defaultImg: string;
  hoverImg: string;
  href: string;
};

export function ShrineCard({
  title,
  defaultImg,
  hoverImg,
  href,
}: ShrineCardProps) {
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const hasHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    setIsTouchDevice(!hasHover);
  }, []);

  const handleClick = () => {
    if (!isTouchDevice) {
      router.push(href);
      return;
    }

    setHovered(true);

    setTimeout(() => {
      router.push(href);
    }, 800);
  };

  return (
    <motion.div
      onHoverStart={() => !isTouchDevice && setHovered(true)}
      onHoverEnd={() => !isTouchDevice && setHovered(false)}
      onClick={handleClick}
      className="text-center space-y-2 cursor-pointer w-full max-w-45 sm:max-w-55 md:max-w-65"
      whileHover={!isTouchDevice ? { scale: 1.03 } : undefined}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="relative w-full aspect-square">
        <motion.div
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src={defaultImg} alt={title} fill className="object-contain" />
        </motion.div>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src={hoverImg} alt={title} fill className="object-contain" />
        </motion.div>
      </div>

      <motion.p
        animate={{ color: hovered ? "#ef4444" : "#ffffff" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="text-xs sm:text-sm md:text-base"
      >
        {title}
      </motion.p>
    </motion.div>
  );
}
