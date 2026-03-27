import PakarnaattamHeader from "@/components/web/pakarnaattam-header";
import ScrollButton from "@/components/web/scroll-button";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamRhythmsPage() {
  return (
    <main>
      <PakarnaattamHeader
              soundFile="/pakarnaattam/story.opus"
              soundVolume={0.6}
            />
      <article className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-14 ">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed mb-16 md-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-6">
            Thottam (Sacred Songs)
          </h1>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/rhythms-img1.jpg"
              alt="Thottam Illustration"
              height={889}
              width={1280}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            The grandmother's voice slowed, taking on a rhythm of its own.....
          </p>

          <p>
            Before you ever see the Theyyam… before the colors, before the
            crown….. there is a voice, she said gently. “That voice is the
            Thottam.”
            <br className="hidden sm:block" /> She closed her eyes for a moment,
            as if listening to it in her memory. “It begins softly… almost like
            a whisper from the past.
            <br className="hidden sm:block" /> The ones who sing it are not just
            singers they are keepers of memory, carrying stories that have lived
            for generations.” The song does not rush. It unfolds slowly, verse
            by verse, telling of the deity's birth, their struggles, their
            anger, their justice. With every line, the distance between the past
            and the present begins to fade.
          </p>

          <p>
            You see, she continued, “the story is not just being told… it is
            being brought here.”
            <br className="hidden sm:block" /> The space changes, the air grows
            heavier, and the listener is drawn into the world of the deity.
            Thottam is not separate from the ritual it is what prepares
            everything. It prepares the performer to transform, the space to
            become sacred, and the people to receive the deity. By the time the
            song rises to its full strength, the story is no longer far away. It
            stands at the edge of the present… waiting to take form.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed mb-16 md-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-6">
            Musical Instruments and Rhythm
          </h1>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/rhythms-img2.jpg"
              alt=" Musical Instruments and Rhythm Illustration"
              height={1280}
              width={1280}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            In Theyyam, sound is not something that comes after it begins
            alongside the ritual itself.
            <br className="hidden sm:block" /> Grandma explained how the
            performance is built on a carefully structured system of rhythm,
            where each instrument plays a distinct role.
            <br className="hidden sm:block" /> The chenda, perumbara, and
            cherututi form the base, creating deep, layered beats that guide the
            pace of the performance.
            <br className="hidden sm:block" /> Alongside them, the elathalam
            keeps a constant rhythm, its sharp metallic sound maintaining timing
            and balance throughout.
            <br className="hidden sm:block" /> The kuzhal cuts through the air
            with its high, piercing notes, while the udukku adds quick,
            vibrating beats that respond to shifts in movement.
            <br className="hidden sm:block" />
            At certain moments, the sound of the conch is introduced, marking
            transitions and heightening the ritual atmosphere.These instruments
            are not played independently of the performance. Their rhythms are
            closely aligned with the movements of the performer, creating a
            direct connection between sound and action. The same practitioners
            often handle both singing the Thottam and playing the instruments,
            ensuring continuity between narration and rhythm.
          </p>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/rhythms-img3.jpg"
              alt=" Musical Instruments and Rhythm Illustration"
              height={1280}
              width={1280}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            As the ritual progresses, the tempo changes starting slow and
            measured, then gradually intensifying as the transformation unfolds.
            The elathalam maintains the rhythmic structure, while the drums
            build energy, supporting the increasing dynamism of the dance. The
            movements themselves shift accordingly, sometimes forceful and
            vigorous, sometimes controlled and graceful, reflecting the dual
            qualities often described as Tandava and Lasya.
          </p>

          <p>
            In this way, the music does not simply accompany the performance it
            organizes and sustains it. From the initial stages of invocation to
            the final moments of release, rhythm acts as the underlying force
            that carries the entire Theyyam experience forward.
          </p>
        </div>
      </article>

      <section className="h-52 flex justify-center items-center text-sm sm:text-base">
        <Link
          href="/pakarnaattam/map"
          className="hover:underline hover:animate-pulse"
        >
          Go back to map
        </Link>
      </section>

      <ScrollButton isDarkBackground />
    </main>
  );
}
