"use client";

import Link from "next/link";
import { Home, Map } from "lucide-react";
import SoundToggle from "./sound-toggle";

interface PakarnaattamHeaderProps {
  soundFile?: string;
  soundVolume?: number;
  showMap?: boolean;
}

export default function PakarnaattamHeader({
  soundFile = "/pakarnaattam/fire.opus",
  soundVolume = 0.8,
  showMap = true,
}: PakarnaattamHeaderProps) {
  return (
    <header className="mx-auto w-full max-w-8xl px-4 pt-6  lg:px-14 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/initiative/pakarnaattam">
            <Home className="cursor-pointer transition hover:scale-110" />
          </Link>
          {showMap && (
            <Link href="/pakarnaattam/map">
              <Map className="cursor-pointer transition hover:scale-110" />
            </Link>
          )}
        </div>
        <SoundToggle file={soundFile} volume={soundVolume} />
      </div>
    </header>
  );
}
