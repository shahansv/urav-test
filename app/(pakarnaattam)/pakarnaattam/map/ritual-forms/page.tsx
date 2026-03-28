import ScrollButton from "@/components/web/scroll-button";
import PakarnaattamHeader from "@/components/web/pakarnaattam-header";
import { ShrineCard } from "@/components/web/shrine-card";

export default function PakarnaattamRitualFormsPage() {
  return (
    <main className="bg-[url('/pakarnaattam/fire-bg.png')] bg-cover bg-center bg-no-repeat">
      <PakarnaattamHeader showMap />
      <article className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-14 ">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <p>
            With over more than 400 distinct forms, Theyyam holds an expansive
            and diverse body of stories, each shaped by local histories,
            beliefs, and community memory. These narratives are spread across
            regions and traditions, evolving through generations while retaining
            their unique identities. Together, they form a rich and layered
            cultural landscape marked by variation, continuity, and deep-rooted
            meaning.
          </p>

          <p>
            Among this vast tradition are four Theyyam stories of
            <br className="hidden sm:block" />
            Guligan, Muthappan, Kathivanoor Veeran, and Pottan.. each carrying
            its own narrative landscape, voice, memory, and meaning
          </p>
        </div>
      </article>

      <section className="relative min-h-screen px-4 py-16 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl place-items-center mb-16 sm:mb-20 ">
          <ShrineCard
            title="Kathivanoor Veeran"
            defaultImg="/pakarnaattam/shrine-kathivanoor-veeran.png"
            hoverImg="/pakarnaattam/shrine-kathivanoor-veeran-hover.png"
            href="/pakarnaattam/map/ritual-forms/kathivanoor-veeran"
          />

          <ShrineCard
            title="Pottan"
            defaultImg="/pakarnaattam/shrine-pottan.png"
            hoverImg="/pakarnaattam/shrine-pottan-hover.png"
            href="/pakarnaattam/map/ritual-forms/pottan"
          />
        </div>

        <p className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white animate-pulse text-xs sm:text-sm md:text-base text-center px-2 pointer-events-none">
          Click on any Shrine to know more
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl place-items-center mt-16 sm:mt-20 ">
          <ShrineCard
            title="Gulikan"
            defaultImg="/pakarnaattam/shrine-gulikan.png"
            hoverImg="/pakarnaattam/shrine-gulikan-hover.png"
            href="/pakarnaattam/map/ritual-forms/gulikan"
          />

          <ShrineCard
            title="Muthappan"
            defaultImg="/pakarnaattam/shrine-muthappan.png"
            hoverImg="/pakarnaattam/shrine-muthappan-hover.png"
            href="/pakarnaattam/map/ritual-forms/muthappan"
          />
        </div>
      </section>

      <ScrollButton isDarkBackground />
    </main>
  );
}
