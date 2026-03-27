"use client";

import React, { useState, useEffect, useRef, JSX } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Position = "left" | "center" | "right" | "hidden";

const slides = [
  { src: "/carousel-img/living-traditions.jpg", title: "Living traditions" },
  {
    src: "/carousel-img/cultural-narratives.jpg",
    title: "Cultural narratives",
  },
  { src: "/carousel-img/communities.jpg", title: "Communities" },
  {
    src: "/carousel-img/indigenous-practice.jpg",
    title: "Indigenous practice",
  },
  { src: "/carousel-img/rituals.jpg", title: "Rituals" },
  { src: "/carousel-img/communities2.jpg", title: "Cultural narratives" },
];

export const Carousel: React.FC = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [containerHeight, setContainerHeight] = useState(400);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const gap = 5;
  const slideDuration = 0.45;
  const autoplayDelay = 3000;

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoplayDelay);
  };

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) return setContainerHeight(250);
      if (window.innerWidth < 1024) return setContainerHeight(320);
      setContainerHeight(400);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const isMobile = containerHeight <= 250;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    startAutoplay();
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoplay();
  };

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    startAutoplay();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const getPosition = (index: number): Position => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;

    if (index === prevIndex) return "left";
    if (index === currentIndex) return "center";
    if (index === nextIndex) return "right";

    return "hidden";
  };

  const positionStyles: Record<Position, any> = {
    left: {
      left: isMobile ? "-40%" : "0%",
      width: isMobile ? "80%" : `calc(25% - ${gap}px)`,
      height: isMobile ? containerHeight * 0.7 : containerHeight / 2,
      top: isMobile ? containerHeight * 0.15 : 0,
      zIndex: 10,
      opacity: isMobile ? 0.5 : 1,
    },
    center: {
      left: isMobile ? "10%" : `calc(25% + ${gap}px)`,
      width: isMobile ? "80%" : `calc(50% - ${gap * 2}px)`,
      height: containerHeight,
      top: 0,
      zIndex: 20,
      opacity: 1,
    },
    right: {
      left: isMobile ? "60%" : `calc(75% + ${gap}px)`,
      width: isMobile ? "80%" : `calc(25% - ${gap}px)`,
      height: isMobile ? containerHeight * 0.7 : containerHeight / 2,
      top: isMobile ? containerHeight * 0.15 : containerHeight / 2,
      zIndex: 10,
      opacity: isMobile ? 0.5 : 1,
    },
    hidden: {
      left: `calc(25% + ${gap}px)`,
      width: `calc(50% - ${gap * 2}px)`,
      height: containerHeight,
      top: 0,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    },
  };

  return (
    <div
      className="relative w-full mt-4 overflow-hidden"
      style={{ height: containerHeight }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => {
        const position = getPosition(index);

        return (
          <motion.div
            key={index}
            layout
            drag="x"
            dragElastic={0.12}
            dragMomentum={false}
            dragConstraints={{ left: 0, right: 0 }}
            className="absolute cursor-grab active:cursor-grabbing"
            animate={positionStyles[position]}
            transition={{
              duration: slideDuration,
              ease: "easeInOut",
            }}
            onDragEnd={(e, info) => {
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              if (offset > 80 || velocity > 500) {
                prev();
              } else if (offset < -80 || velocity < -500) {
                next();
              } else {
                startAutoplay();
              }
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={`carousel-${index}`}
                fill
                priority
                sizes="(max-width: 640px) 80vw,
                (max-width: 1024px) 50vw,
                33vw"
                className="object-cover rounded-2xl"
              />
              {position === "center" && (
                <>
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent rounded-2xl" />
                  <div
                    className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light ${garamond.className}`}
                  >
                    {slide.title}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
