"use client";

import LoadingScreen from "@/components/web/loading-screen";
import SoundToggle from "@/components/web/sound-toggle";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const KugileFont = localFont({
  src: "../../fonts/Kugile.ttf",
  display: "swap",
});

export default function PakarnaattamPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <main
        className={`
          relative w-full h-screen bg-black overflow-hidden
          transition-opacity duration-700
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      >
        <div className="absolute top-6 right-6 z-50">
          <SoundToggle file="/pakarnaattam/fire.opus" />
        </div>

        <Image
          src="/pakarnaattam/thayam.jpg"
          alt="Pakarnaattam"
          fill
          className="object-cover object-left md:hidden"
          priority
        />

        <img
          src="/pakarnaattam/thayam.jpg"
          alt="Pakarnaattam"
          className="hidden md:block absolute left-0 top-0 h-full w-auto"
          style={{ maxWidth: "none" }}
        />

        <div className="hidden md:block absolute inset-0 bg-linear-to-r from-transparent via-black/50 to-black" />
        <div className="md:hidden absolute inset-0 bg-linear-to-b from-transparent from-40% via-black/70 via-65% to-black to-80%" />

        <h1
          className={`${KugileFont.className} hidden md:flex absolute inset-y-0 right-0 w-1/2 items-center justify-center text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-lg z-10 px-8 tracking-wide`}
        >
          Pakarn<span className="text-red-700">aa</span>ttam
        </h1>

        <h1
          className={`${KugileFont.className} md:hidden absolute bottom-[22%] left-0 right-0 text-center text-4xl sm:text-5xl text-white drop-shadow-lg z-10 tracking-wide px-4`}
        >
          Pakarn<span className="text-red-700">aa</span>ttam
        </h1>

        <p className="absolute bottom-16 w-full text-white text-center animate-pulse z-20 opacity-70">
          Click on the torch to continue
        </p>

        <div
          className="absolute z-30 
            w-80 h-80 bottom-8 -right-4
            md:w-[65vw] md:h-[65vw] md:-bottom-[10vw] md:-right-[8vw]"
          style={{ transform: "rotate(-50deg) scaleX(-1)" }}
        >
          <Link href="/pakarnaattam/character">
            <Image
              src="/pakarnaattam/torch.png"
              alt="torch"
              fill
              priority
              className="object-contain hover:animate-pulse"
            />
          </Link>
        </div>
      </main>
    </>
  );
}
