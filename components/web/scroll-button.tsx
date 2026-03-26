"use client";

import { ArrowUp, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

type ScrollButtonProps = {
  isDarkBackground: boolean;
};

export default function ScrollButton({ isDarkBackground }: ScrollButtonProps) {
  const [atTop, setAtTop] = useState(true);

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const size = 44;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const dashOffset = useTransform(progress, [0, 1], [circumference, 0]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence mode="wait">
        {atTop ? (
          <motion.div
            key="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="px-2 py-2 rounded-full flex items-center gap-2"
          >
            <span
              className={`text-sm ${
                isDarkBackground ? "text-neutral-100" : "text-neutral-900"
              }`}
            >
              Scroll to see more
            </span>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown
                className={`w-4 h-4 ${
                  isDarkBackground ? "text-neutral-100" : "text-neutral-900"
                }`}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 text-white"
          >
            <svg width={size} height={size} className="absolute -rotate-90">
              <circle
                stroke="rgba(255,255,255,0.2)"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
              />

              <motion.circle
                stroke="white"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                r={radius}
                cx={size / 2}
                cy={size / 2}
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: dashOffset,
                }}
              />
            </svg>

            <ArrowUp className="w-5 h-5 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
