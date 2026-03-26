import { Carousel } from "@/components/web/carousel";
import { IdeaForm } from "@/components/web/idea-form";
import { LatestWork } from "@/components/web/latest-work";
import ScrollButton from "@/components/web/scroll-button";
import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-14 mt-8">
        <h1
          className={`${crimson.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug max-w-3xl`}
        >
          Replenishing roots drawn from....
        </h1>
      </section>
      <section className="mt-6 sm:mt-8 lg:mt-10">
        <Carousel />
      </section>
      <article className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-14 mt-8  ">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <p>
            A space that helps in reconnecting people with their cultural and
            traditional roots, and connects the gap between tradition and
            modernity, reimagining narratives through digital storytelling.
            <br className="hidden sm:block" />
            Calm, honest, and human in its approach, Urav remains deeply
            grounded in heritage while staying open to reinterpretation.
          </p>

          <p>
            Drawn to projects that blend heritage with contemporary design, it
            resonates deeply with Urav's vision. For fellow humans who seek
            cultural knowledge and crave meaningful digital experiences that
            connect them to living traditions. Together, we form a community
            that doesn't just consume culture — we engage with it, reflect on
            it, and keep it alive.
          </p>
        </div>
      </article>
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-14 mt-8">
        <h2
          className={`${crimson.className} text-2xl sm:text-3xl md:text-4xl leading-snug max-w-3xl`}
        >
          Latest works
        </h2>
        <LatestWork />
      </section>
      <div className="w-full my-16  h-5 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-neutral-400/40 to-transparent h-0.5 w-[90%] blur-md" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-white to-transparent h-px w-[90%]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-neutral-300/40 to-transparent h-1.5 w-[40%] blur-md" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-white to-transparent h-px w-[40%]" />
      </div>
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-14 my-8">
        <IdeaForm />
      </section>
      <ScrollButton isDarkBackground/>
    </main>
  );
}
