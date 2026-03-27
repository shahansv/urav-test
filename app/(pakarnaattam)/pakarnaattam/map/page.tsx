"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MapDot from "@/components/web/map_dot";
import Torch from "@/components/web/torch";

export default function PakarnaattamMapPage() {
  const [torchTarget, setTorchTarget] = useState<{
    x: number;
    y: number;
  } | null>(null);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/pakarnaattam/map.png"
        alt="Map"
        fill
        priority
        className="object-cover"
      />

      <p className="absolute top-24 w-full text-center text-white z-20 animate-pulse">
        Point the torch towards the dots to select
      </p>

      <Link href="/pakarnaattam/map/ritualforms">
        <MapDot
          top="55%"
          left="9.5%"
          image="/pakarnaattam/ritual-forms.png"
          title="Ritual Forms"
          desc="(Stories on, Theyyam Figures)"
          position="bottom-right"
          onHover={setTorchTarget}
        />
      </Link>

      <Link href="/pakarnaattam/map/rhythms">
        <MapDot
          top="46.5%"
          left="32.5%"
          image="/pakarnaattam/rhythms.png"
          title="Rhythms"
          desc="(Musical Elements of Theyyam)"
          position="top-left"
          onHover={setTorchTarget}
        />
      </Link>

      <Link href="/pakarnaattam/map/making">
        <MapDot
          top="37.5%"
          left="56.5%"
          image="/pakarnaattam/making.png"
          title="The Making"
          desc="(Paint, Costume, Ornaments Sacred Objects and Weapons)"
          position="top-right"
          onHover={setTorchTarget}
        />
      </Link>

      <Link href="/pakarnaattam/map/human-behind-deity">
        <MapDot
          top="67.5%"
          left="82.5%"
          image="/pakarnaattam/deity.png"
          title="Human Behind the Deity"
          desc="(Socio-Cultural Life of Theyyam Artists)"
          position="left"
          onHover={setTorchTarget}
        />
      </Link>

      <Torch target={torchTarget} />
    </div>
  );
}
