"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type SoundToggleProps = {
  file: string;
  volume?: number;
  className?: string;
};

export default function SoundToggle({
  file,
  volume = 1,
  className = "",
}: SoundToggleProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    audio.play().catch(() => {});
  }, [volume]);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <>
      <audio ref={audioRef} src={file} />

      <button
        aria-label="Toggle Sound"
        onClick={toggleSound}
        className={`cursor-pointer transition hover:scale-110 text-white ${className}`}
        type="button"
      >
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>
    </>
  );
}
