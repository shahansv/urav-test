"use client";

import { useRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

type ScrollZoomProps = {
  children: ReactNode;
  minScale?: number;
  maxScale?: number;
  spring?: { stiffness: number; damping: number; mass: number } | false;
};

function useElementCenterProgress(
  ref: React.RefObject<HTMLElement | null>,
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
  });

  return useTransform(scrollYProgress, (p) => 1 - Math.abs(p - 0.5) / 0.5);
}

export default function ScrollZoom({
  children,
  minScale = 0.5,
  maxScale = 1,
  spring = { stiffness: 120, damping: 20, mass: 0.6 },
}: ScrollZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const proximity = useElementCenterProgress(containerRef);
  const rawScale = useTransform(proximity, [0, 1], [minScale, maxScale]);
  const springScale = useSpring(
    rawScale,
    spring || { stiffness: 300, damping: 30 },
  );
  const scale = spring === false ? rawScale : springScale;

  return (
    <div
      ref={containerRef}
      className="sticky top-0 left-0 w-full h-screen flex justify-center items-center overflow-hidden"
    >
      <motion.div style={{ scale, willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  );
}
