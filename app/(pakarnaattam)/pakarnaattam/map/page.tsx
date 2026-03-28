"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PakarnaattamHeader from "@/components/web/pakarnaattam-header";

const IMG_NATURAL_W = 2880;
const IMG_NATURAL_H = 1864;

type Position =
  | "top"
  | "top-right"
  | "top-left"
  | "right"
  | "left"
  | "bottom"
  | "bottom-right"
  | "bottom-left";

interface CardOffset {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface DotConfig {
  id: number;
  xPct: number;
  yPct: number;
  hoverImage: string;
  label: string;
  subtitle: string;
  href: string;
  cardOffset: {
    landscape: CardOffset;
    portrait: CardOffset;
  };
  labelPosition: {
    landscape: Position;
    portrait: Position;
  };
  imageSize?: {
    landscape: number;
    portrait: number;
  };
}

interface ImageRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface PakarnaattamMapPageProps {
  showHeader?: boolean;
  showPulse?: boolean;
}

const DOTS: DotConfig[] = [
  {
    id: 1,
    xPct: 12.5,
    yPct: 59.5,
    hoverImage: "/pakarnaattam/ritual-forms.png",
    label: "Ritual Forms",
    subtitle: "(Stories on, Theyyam Figures)",
    href: "/pakarnaattam/map/ritual-forms",
    cardOffset: {
      landscape: { top: -55, left: 38 },
      portrait: { bottom: -70, right: 90 },
    },
    labelPosition: { landscape: "bottom", portrait: "bottom" },
    imageSize: { landscape: 280, portrait: 160 },
  },
  {
    id: 2,
    xPct: 35.9,
    yPct: 52.1,
    hoverImage: "/pakarnaattam/rhythms.png",
    label: "Rhythms",
    subtitle: "(Musical Elements of Theyyam)",
    href: "/pakarnaattam/map/rhythms",
    cardOffset: {
      landscape: { bottom: 80, right: 40 },
      portrait: { bottom: 10, left: 40 },
    },
    labelPosition: { landscape: "bottom", portrait: "bottom" },
    imageSize: { landscape: 280, portrait: 160 },
  },
  {
    id: 3,
    xPct: 59.6,
    yPct: 44.2,
    hoverImage: "/pakarnaattam/making.png",
    label: "The Making",
    subtitle: "(Paint, Costume, Ornaments Sacred Object and Weapons)",
    href: "/pakarnaattam/map/making",
    cardOffset: {
      landscape: { bottom: 38, left: 45 },
      portrait: { bottom: 8, right: 25 },
    },
    labelPosition: { landscape: "bottom", portrait: "bottom" },
    imageSize: { landscape: 280, portrait: 160 },
  },
  {
    id: 4,
    xPct: 85.7,
    yPct: 69.4,
    hoverImage: "/pakarnaattam/human-behind-the-deity.png",
    label: "Human Behind the Deity",
    subtitle: "(Socio-Cultural Life of Theyyam Artists)",
    href: "/pakarnaattam/map/human-behind-the-deity",
    cardOffset: {
      landscape: { top: -100, right: 38 },
      portrait: { top: 35, left: -30 },
    },
    labelPosition: { landscape: "bottom", portrait: "bottom" },
    imageSize: { landscape: 250, portrait: 140 },
  },
];

const CARD_W = 300;

function cardOffsetStyle(offset: CardOffset): React.CSSProperties {
  const style: React.CSSProperties = { position: "absolute" };
  if (offset.top !== undefined) style.top = `${offset.top}px`;
  if (offset.bottom !== undefined) style.bottom = `${offset.bottom}px`;
  if (offset.left !== undefined) style.left = `${offset.left}px`;
  if (offset.right !== undefined) style.right = `${offset.right}px`;
  return style;
}

function labelStyle(position: Position): React.CSSProperties {
  switch (position) {
    case "top":
    case "top-left":
    case "top-right":
      return { display: "flex", flexDirection: "column-reverse" };
    case "bottom":
    case "bottom-left":
    case "bottom-right":
      return { display: "flex", flexDirection: "column" };
    case "right":
      return {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      };
    case "left":
      return {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 10,
      };
    default:
      return { display: "flex", flexDirection: "column" };
  }
}

export default function PakarnaattamMapPage({
  showHeader = true,
  showPulse = true,
}: PakarnaattamMapPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);
  const router = useRouter();
  const isTouchDevice = useRef(false);

  const [imgRect, setImgRect] = useState<ImageRect | null>(null);
  const [isPortrait, setIsPortrait] = useState(false);
  const [tappedId, setTappedId] = useState<number | null>(null);

  const measure = useCallback(() => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const imgBCR = img.getBoundingClientRect();
    const conBCR = container.getBoundingClientRect();

    setImgRect({
      left: imgBCR.left - conBCR.left,
      top: imgBCR.top - conBCR.top,
      width: imgBCR.width,
      height: imgBCR.height,
    });

    setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    roRef.current = new ResizeObserver(measure);
    roRef.current.observe(container);

    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    const raf = requestAnimationFrame(measure);

    return () => {
      roRef.current?.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
      cancelAnimationFrame(raf);
    };
  }, [measure]);

  useEffect(() => {
    if (tappedId === null) return;

    function handleOutside(e: TouchEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest(".dot-hotspot")) {
        setTappedId(null);
      }
    }

    document.addEventListener("touchstart", handleOutside, { passive: true });
    return () => document.removeEventListener("touchstart", handleOutside);
  }, [tappedId]);

  function dotPosition(dot: DotConfig): { x: number; y: number } | null {
    if (!imgRect) return null;

    if (isPortrait) {
      const x = imgRect.left + (dot.yPct / 100) * imgRect.width;
      const y = imgRect.top + (1 - dot.xPct / 100) * imgRect.height;
      return { x, y };
    }

    const x = imgRect.left + (dot.xPct / 100) * imgRect.width;
    const y = imgRect.top + (dot.yPct / 100) * imgRect.height;
    return { x, y };
  }

  function handleTouch(e: React.TouchEvent, dot: DotConfig) {
    isTouchDevice.current = true;
    e.preventDefault();
    e.stopPropagation();

    if (tappedId === dot.id) {
      router.push(dot.href);
    } else {
      setTappedId(dot.id);
    }
  }

  function handleClick(dot: DotConfig) {
    if (isTouchDevice.current) {
      isTouchDevice.current = false;
      return;
    }
    router.push(dot.href);
  }

  return (
    <main className="relative w-screen h-dvh overflow-hidden bg-[url('/pakarnaattam/fire-bg.png')] bg-cover bg-center bg-no-repeat">
      <style>{`
        .map-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .map-image {
          display: block;
          max-width: none !important;
          width: 100vw !important;
          height: auto !important;
          flex-shrink: 0;
          transform-origin: center center;
        }
        @media (orientation: portrait) {
          .map-image {
            width: 100dvh !important;
            transform: rotate(-90deg);
          }
        }
        .dot-hotspot {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 20;
          background: transparent;
          -webkit-tap-highlight-color: transparent;
          touch-action: none;
        }
        .dot-hotspot::after {
          content: "";
          position: absolute;
          inset: 4px;
          border-radius: 50%;
          border: 1.5px solid rgba(200, 40, 40, 0.55);
          ${showPulse ? "animation: pulse-ring 2s ease-out infinite;" : "display: none;"}
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.9); opacity: 0;   }
          100% { transform: scale(1.9); opacity: 0;   }
        }
        .hover-card {
          position: absolute;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.18s ease, transform 0.18s ease;
          z-index: 30;
          transform: scale(0.93);
        }
        @media (hover: hover) {
          .dot-hotspot:hover .hover-card {
            opacity: 1;
            pointer-events: auto;
            transform: scale(1);
          }
        }
        .dot-hotspot.is-tapped .hover-card {
          opacity: 1;
          pointer-events: auto;
          transform: scale(1);
        }
        .hover-card-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          object-position: center;
          display: block;
          border-radius: 8px;
        }
        .hover-card-body {
          padding: 10px 2px 0;
        }
        .hover-card-label {
          color: rgba(255, 255, 255, 0.95);
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.01em;
          margin: 0 0 4px;
          text-shadow: 0 1px 6px rgba(0,0,0,0.7);
        }
        .hover-card-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin: 0;
          text-shadow: 0 1px 6px rgba(0,0,0,0.7);
        }
      `}</style>

      <div className="map-bg" ref={containerRef}>
        <Image
          src="/pakarnaattam/map.png"
          alt="map"
          height={IMG_NATURAL_H}
          width={IMG_NATURAL_W}
          priority
          className="map-image"
          ref={(el) => {
            imgRef.current = el;
            if (el) requestAnimationFrame(measure);
          }}
          onLoad={measure}
        />

        {imgRect &&
          DOTS.map((dot) => {
            const pos = dotPosition(dot);
            if (!pos) return null;

            const mode = isPortrait ? "portrait" : "landscape";
            const lPos = dot.labelPosition[mode];
            const isTapped = tappedId === dot.id;
            const imgW = dot.imageSize?.[mode] ?? CARD_W;

            return (
              <div
                key={dot.id}
                className={`dot-hotspot${isTapped ? " is-tapped" : ""}`}
                style={{ left: pos.x, top: pos.y }}
                onTouchStart={(e) => handleTouch(e, dot)}
                onClick={() => handleClick(dot)}
                tabIndex={0}
                role="button"
                aria-label={dot.label}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") router.push(dot.href);
                }}
              >
                <div
                  className="hover-card"
                  style={{
                    ...cardOffsetStyle(dot.cardOffset[mode]),
                    width: imgW,
                  }}
                >
                  <div style={labelStyle(lPos)}>
                    <img
                      className="hover-card-img"
                      src={dot.hoverImage}
                      alt={dot.label}
                    />
                    <div className="hover-card-body">
                      <p className="hover-card-label">{dot.label}</p>
                      <p className="hover-card-subtitle">{dot.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {showHeader && (
        <div className="absolute top-0 left-0 right-0 z-10">
          <PakarnaattamHeader showMap={false} />
        </div>
      )}

      <p className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 z-20 text-white animate-pulse text-center text-sm md:text-base px-4 whitespace-nowrap pointer-events-none">
        Point the torch towards the dots to select
      </p>
    </main>
  );
}
