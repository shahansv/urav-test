"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ScrollButton from "@/components/web/scroll-button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PakarnaattamPage() {
  const articleRef = useRef<HTMLElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    if (articleRef.current) {
      observer.observe(articleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ease-in-out ${
        isDark ? "bg-black" : "bg-[#F5F2E9]"
      }`}
    >
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-14 pt-4 lg:pt-8">
        <div className="relative w-full aspect-320/171">
          <Image
            src="/pakarnaattam/pakarnaattam-hero.jpg"
            alt="pakarnaattam hero"
            fill
            className="object-contain rounded-2xl shadow-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
          />
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2">
            <Link href="/pakarnaattam">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium"
              >
                <span>Immerse Now</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </section>

      <article
        ref={articleRef}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-14 mt-8 transition-colors duration-700 ease-in-out ${
          isDark ? "text-neutral-200" : "text-neutral-800"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug max-w-3xl py-4 tracking-tight font-semibold">
          What Pakarnaattam is...
        </h1>

        <div className="space-y-5 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg">
          <p>
            Pakarnattam is an illustrated documentation project that explores
            the cultural and artistic world of Theyyam, a ritual performance
            tradition practiced in the northern regions of Kerala. Deeply rooted
            in local belief systems, oral histories, and community
            participation, Theyyam stands as one of the most powerful ritual art
            forms in South India. It exists at the intersection of performance,
            spirituality, storytelling, and visual culture.
          </p>

          <p>
            The word Pakarnattam refers to transformation through performance.
            The term combines pakarnam, which suggests becoming or embodying
            another form, and attam, meaning play, dance, or enactment. Within
            the context of Theyyam, this idea of transformation lies at the
            heart of the ritual. Through elaborate costume, ritual preparation,
            music, and devotion, the performer moves beyond the identity of an
            individual and embodies a divine or ancestral presence. This
            transformation is not merely theatrical but deeply embedded in
            belief, tradition, and collective memory.
          </p>

          <p>
            While Theyyam is often recognised for its striking visual spectacle
            the vibrant face paintings, towering headgear, and elaborate
            costumes the art form is built upon a much deeper network of
            stories, sounds, symbols, and lived experiences. Pakarnattam seeks
            to explore these layers through illustration and visual
            interpretation, offering a perspective that looks beyond the
            spectacle and into the many elements that construct the world of
            Theyyam. The project follows a non-linear approach, allowing viewers
            to engage with different aspects of the tradition as interconnected
            dimensions rather than as a single chronological narrative. Each
            section of the project acts as a window into a different layer of
            the art form, revealing how mythology, visual identity, sound
            traditions, and human experience come together within the ritual.
          </p>

          <p>
            The project also reflects on the lives of the performers who
            dedicate themselves to sustaining this tradition. For many artists,
            Theyyam is not simply a performance practice but a lineage passed
            down through generations. Their lives involve rigorous preparation,
            inherited knowledge, and a deep sense of responsibility toward the
            ritual and the communities they serve. By acknowledging the human
            presence behind the spectacle, the project highlights the devotion,
            discipline, and continuity that keep the tradition alive. Through
            the language of illustration, design, and documentation, Pakarnattam
            attempts to create an immersive visual experience that invites
            viewers to engage with the world behind Theyyam. Each illustration
            acts as a point of entry into the tradition, revealing fragments of
            story, symbolism, sound, and lived experience.
          </p>
        </div>
      </article>

      <ScrollButton isDarkBackground={isDark} />
    </main>
  );
}
