"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface TorchProps {
  target?: { x: number; y: number } | null;
}

export default function Torch({ target }: TorchProps) {
  const torchRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (!torchRef.current || !target) {
      setAngle(0);
      return;
    }

    const rect = torchRef.current.getBoundingClientRect();
    const pivotX = rect.left + rect.width / 2;
    const pivotY = rect.bottom;

    const dx = target.x - pivotX;
    const dy = target.y - pivotY;

    let newAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 95;
    setAngle(newAngle);
  }, [target]);

  return (
    <div className="fixed -bottom-45 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
      <div
        ref={torchRef}
        style={{
          transform: `rotate(${angle}deg)`,
          transformOrigin: "50% 100%",
          transition: "transform 0.2s ease-out",
        }}
        className="relative w-225 h-290"
      >
        <Image
          src="/pakarnaattam/torch.png"
          alt="Torch"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
