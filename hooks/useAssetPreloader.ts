"use client";

import { useCallback, useRef, useState } from "react";
import { motionValue, animate, MotionValue } from "motion/react";

const CACHE_NAME = "pakarnaattam-v1";
const MIN_DURATION_MS = 1500;

export function useAssetPreloader() {
  const progressMV = useRef<MotionValue<number>>(motionValue(0));

  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const preload = useCallback(async (assets: string[]) => {
    progressMV.current.set(0);
    setIsLoading(true);
    setIsDone(false);
    setError(null);

    const fakeAnim = animate(progressMV.current, 85, {
      duration: MIN_DURATION_MS / 1000,
      ease: [0.4, 0, 0.2, 1],
    });

    const minTimer = new Promise<void>((resolve) =>
      setTimeout(resolve, MIN_DURATION_MS),
    );

    try {
      const cache = await caches.open(CACHE_NAME);

      await Promise.all(
        assets.map(async (url) => {
          try {
            const cached = await cache.match(url);
            if (!cached) {
              const response = await fetch(url);
              if (!response.ok) throw new Error(`Failed: ${url}`);
              await cache.put(url, response.clone());
            }
          } catch (err) {
            console.warn(`Could not preload: ${url}`, err);
          }
        }),
      );

      await minTimer;

      fakeAnim.stop();

      await animate(progressMV.current, 100, {
        duration: 0.5,
        ease: "easeOut",
      });
    } catch (err) {
      fakeAnim.stop();
      setError("Something went wrong while loading. Please try again.");
      console.error("Preloader error:", err);
    } finally {
      setIsLoading(false);
      setIsDone(true);
    }
  }, []);

  const reset = useCallback(() => {
    progressMV.current.set(0);
    setIsLoading(false);
    setIsDone(false);
    setError(null);
  }, []);

  return {
    progressMV: progressMV.current,
    isLoading,
    isDone,
    error,
    reset,
    preload,
  };
}
