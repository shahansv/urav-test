"use client";

import { useState, useRef } from "react";
import Image from "next/image";

type Position =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface MapDotProps {
  top: string;
  left: string;
  image: string;
  title: string;
  desc: string;
  position?: Position;
  onHover?: (coords: { x: number; y: number } | null) => void;
}

export default function MapDot({
  top,
  left,
  image,
  title,
  desc,
  position = "top",
  onHover,
}: MapDotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);

  const positionClasses: Record<Position, string> = {
    top: "bottom-10 left-1/2 -translate-x-1/2",
    bottom: "top-10 left-1/2 -translate-x-1/2",
    left: "right-10 top-1/2 -translate-y-1/2",
    right: "left-10 top-1/2 -translate-y-1/2",
    "top-left": "bottom-5 right-18",
    "top-right": "bottom-5 left-10",
    "bottom-left": "top-10 right-10",
    "bottom-right": "-top-20 left-1",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (dotRef.current && onHover) {
      const rect = dotRef.current.getBoundingClientRect();
      onHover({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onHover) onHover(null);
  };

  return (
    <div
      ref={dotRef}
      className="absolute"
      style={{ top, left }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-24 h-24 rounded-full cursor-pointer " />

      {isHovered && (
        <div
          className={`absolute w-80 text-white rounded-lg shadow-xl p-3 z-50 ${positionClasses[position]}`}
        >
          <div className="mb-2">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="rounded-md w-full h-auto"
              priority
            />
          </div>

          <p className="text-sm font-semibold text-shadow-lg">{title}</p>
          <p className="text-sm text-neutral-100 text-shadow-black text-shadow-lg">
            {desc}
          </p>
        </div>
      )}
    </div>
  );
}
