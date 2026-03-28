import PakarnaattamHeader from "@/components/web/pakarnaattam-header";
import ScrollButton from "@/components/web/scroll-button";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamGulikanPage() {
  return (
    <main>
      <PakarnaattamHeader soundFile="/pakarnaattam/gulikan.opus" soundVolume={0.8} />
      <article className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-14 ">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-6">
            Gulikan
          </h1>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/gulikan-img1.jpg"
              alt="Gulikan Illustration"
              width={2048}
              height={2048}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            Some stories are not just about life… but about death, time, and
            balance.”
          </p>

          <p>
            Gulikan is one such presence feared, respected, and deeply powerful.
            To understand Gulikan, we must first hear the story of a young
            devotee.
          </p>

          <p>
            Long ago, there lived a sage named Mrigandu, a great devotee of
            Shiva. He prayed with all his heart for a child. Pleased with his
            devotion, Shiva appeared before him and gave him a choice a son who
            would live long but without wisdom, or a divine child who would live
            only for sixteen years.
            <br className="hidden sm:block" />
            Mrigandu chose the divine child.
            <br className="hidden sm:block" />
            And so, Markandeya was born, a boy filled with devotion and purity,
            who grew up worshipping Shiva with complete faith.
          </p>

          <p>
            The grandmother paused, her voice softening.
            <br className="hidden sm:block" />
            “But time waits for no one.”
            <br className="hidden sm:block" />
            On the day Markandeya turned sixteen, Yama, the god of death, came
            to take his life. He cast his noose towards the boy.
            <br className="hidden sm:block" />
            But Markandeya, unafraid, held tightly onto the Shivalinga he was
            praying to, calling out to Shiva. The noose fell not just on the
            boy… but also on the Shivalinga.
          </p>

          <p>
            The grandmother's voice grew intense.
            <br className="hidden sm:block" />
            “That moment changed everything.”
            <br className="hidden sm:block" />
            Angered by this, Shiva opened his third eye and burned Yama to
            ashes.
            <br className="hidden sm:block" />
            For a while, death disappeared from the world. No one died. The
            earth grew heavy with life, unable to carry the growing burden.
          </p>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/gulikan-img2.jpg"
              alt="Gulikan Illustration"
              width={2048}
              height={2048}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            To restore balance, Shiva created another force from his own being.”
            <br className="hidden sm:block" />
            From his left side, he brought forth Gulikan.
          </p>

          <p>
            He gave him the trident and the kalapasa, and sent him to earth not
            just as death, but as the keeper of time, balance, and fate.
            <br className="hidden sm:block" />
            Gulikan was not just destruction… he was necessity.
          </p>

          <p>
            The grandmother looked at the children carefully.
            <br className="hidden sm:block" />
            They say, Gulikan walks the earth at noon, at dusk, and at midnight
            times when the world shifts from one state to another. He is present
            in every moment of life, from birth to death. Not always seen... but
            always there.
            <br className="hidden sm:block" />
            There are many forms of Gulikan, Vadakkan Gulikan, Thekkan Gulikan,
            Marana Gulikan, Pathira Gulikan... and many more. Some say he exists
            in a hundred and one forms, yet remains one.
            <br className="hidden sm:block" />
            The grandmother's voice softened again.
            <br className="hidden sm:block" />
            Gulikan reminds us of something important...
            <br className="hidden sm:block" />
            “That life and death are not separate… they are part of the same
            cycle.”
            <br className="hidden sm:block" />
            She looked at the children gently.
          </p>
        </div>
      </article>

      <section className="h-52 flex justify-between items-center text-sm sm:text-base mx-auto w-full max-w-5xl px-4 py-8 lg:px-14">
        <Link
          href="/pakarnaattam/map"
          className="hover:underline hover:animate-pulse"
        >
          Go back to map
        </Link>
        <Link
          href="/pakarnaattam/map/ritual-forms"
          className="hover:underline hover:animate-pulse"
        >
          Select a different theyyam story
        </Link>
      </section>

      <ScrollButton isDarkBackground />
    </main>
  );
}
