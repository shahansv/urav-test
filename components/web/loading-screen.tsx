"use client";

import { useEffect, useState } from "react";

const ASSETS_TO_PRELOAD = [
  "/pakarnaattam/fire-bg.png",
  "/pakarnaattam/gulikan-img1.jpg",
  "/pakarnaattam/gulikan-img2.jpg",
  "/pakarnaattam/human-behind-the-deity.png",
  "/pakarnaattam/kannan-mask.jpg",
  "/pakarnaattam/kannan.jpg",
  "/pakarnaattam/kathivanoor-veeran-img1.jpg",
  "/pakarnaattam/kathivanoor-veeran-img2.jpg",
  "/pakarnaattam/making-img1.jpg",
  "/pakarnaattam/making-img2.jpg",
  "/pakarnaattam/making-img3.jpg",
  "/pakarnaattam/making.png",
  "/pakarnaattam/map.png",
  "/pakarnaattam/muthappan-img1.jpg",
  "/pakarnaattam/muthappan-img2.jpg",
  "/pakarnaattam/neelu-mask.jpg",
  "/pakarnaattam/neelu.jpg",
  "/pakarnaattam/pakarnaattam-hero.jpg",
  "/pakarnaattam/pottan-img1.jpg",
  "/pakarnaattam/pottan-img2.jpg",
  "/pakarnaattam/rhythms-img1.jpg",
  "/pakarnaattam/rhythms-img2.jpg",
  "/pakarnaattam/rhythms-img3.jpg",
  "/pakarnaattam/rhythms.png",
  "/pakarnaattam/ritual-forms.png",
  "/pakarnaattam/shashikumar.jpg",
  "/pakarnaattam/shrine-gulikan-hover.png",
  "/pakarnaattam/shrine-gulikan.png",
  "/pakarnaattam/shrine-kathivanoor-veeran-hover.png",
  "/pakarnaattam/shrine-kathivanoor-veeran.png",
  "/pakarnaattam/shrine-muthappan-hover.png",
  "/pakarnaattam/shrine-muthappan.png",
  "/pakarnaattam/shrine-pottan-hover.png",
  "/pakarnaattam/shrine-pottan.png",
  "/pakarnaattam/thayam.jpg",
  "/pakarnaattam/torch.png",
];

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

const MIN_DURATION = 2000;

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [assetProgress, setAssetProgress] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const [assetsReady, setAssetsReady] = useState(false);
  const [timeReady, setTimeReady] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const total = ASSETS_TO_PRELOAD.length;
    let loaded = 0;

    ASSETS_TO_PRELOAD.forEach((src) =>
      preloadImage(src).then(() => {
        loaded++;
        setAssetProgress(Math.round((loaded / total) * 100));
        if (loaded === total) setAssetsReady(true);
      }),
    );
  }, []);

  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = () => {
      const elapsed = performance.now() - start;
      const t = Math.min(elapsed / MIN_DURATION, 1);
      setTimeProgress(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeReady(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const displayProgress = Math.min(assetProgress, timeProgress);

  useEffect(() => {
    if (assetsReady && timeReady && !done) {
      setDone(true);
      setTimeout(onComplete, 600);
    }
  }, [assetsReady, timeReady, done, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-100 bg-black flex flex-col items-center justify-center gap-4 transition-opacity duration-600 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-64 sm:w-80 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Loading
          </span>
          <span className="text-white/40 text-xs tabular-nums">
            {displayProgress}%
          </span>
        </div>

        <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full"
            style={{
              width: `${displayProgress}%`,
              transition: "width 80ms linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
