"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
