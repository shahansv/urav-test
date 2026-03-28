import PakarnaattamHeader from "@/components/web/pakarnaattam-header";
import ScrollButton from "@/components/web/scroll-button";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamPottanPage() {
  return (
    <main>
      <PakarnaattamHeader
        soundFile="/pakarnaattam/pottan.opus"
        soundVolume={0.8}
      />
      <article className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-14 ">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-6">
            Pottan
          </h1>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/pottan-img1.jpg"
              alt="Pottan Illustration"
              width={889}
              height={1280}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            Long ago, she said, there lived a man named Alankaran, a man born
            among the oppressed communities of the land. Though society treated
            him as lowly, Alankaran possessed great wisdom and deep
            understanding about the world and the nature of truth. He questioned
            the rigid caste system that divided people and spoke boldly about
            equality.
          </p>

          <p>
            But those who held power did not like such questions.
            <br className="hidden sm:block" />
            For seeing what he was not supposed to see and hearing what he was
            not meant to hear, the powerful punished him cruelly. His eyes were
            gouged, and his ears were cut off. They mocked him and gave him a
            name meant to insult him “Pottan,” which means a fool. “But he was
            not a fool at all,” the grandmother said softly.
            <br className="hidden sm:block" />
            “In truth, he was wiser than many.”
          </p>

          <p>
            Despite the suffering he endured, Alankaran continued to speak about
            truth and justice. Through spiritual strength and mystical powers,
            people believed he could transform himself into different forms
            sometimes appearing as animals like a deer or a fox. His loyal
            friend Kanadan and his courageous wife Sundari stood beside him,
            helping him awaken the oppressed people around them.
          </p>

          <p>
            Together they challenged cruel customs and injustice. One such
            ancient custom allowed powerful landlords to claim rights over women
            from lower communities during marriage rituals. Alankaran and his
            companions strongly opposed this practice, encouraging people to
            recognize their dignity and resist oppression.
            <br className="hidden sm:block" />
            The grandmother paused for a moment before continuing the most
            famous part of the story.
          </p>

          <p>
            One day, during his travels, the great philosopher Adi
            Shankaracharya was walking along a forest path. Suddenly he came
            across Alankaran standing in his way with a child on his hip and a
            pot balanced on his head.
            <br className="hidden sm:block" />
            Shankaracharya, following the rigid rules of caste purity of that
            time, asked the man to step aside.
          </p>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/pottan-img2.jpg"
              alt="Pottan Illustration"
              width={2048}
              height={2048}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            But Alankaran calmly replied:
            <br className="hidden sm:block" />
            “Everywhere around us there are forests and thorns...
            <br className="hidden sm:block" /> How can I step aside?
            <br className="hidden sm:block" />I carry a child on my hip and a
            pot upon my head...
            <br className="hidden sm:block" />
            Where should I move?”
            <br className="hidden sm:block" />
            Annoyed, Shankaracharya told him to move away, calling him a
            Chandala, a man of the lowest caste.
          </p>

          <p>
            But Alankaran answered with quiet wisdom:
            <br className="hidden sm:block" />
            “If you cut me, does my blood not flow the same red?
            <br className="hidden sm:block" />
            If you cut yourself, is your blood any different?
            <br className="hidden sm:block" />
            If we are both made of the same life,
            <br className="hidden sm:block" />
            Why then do you see such difference between us?”
          </p>

          <p>
            The grandmother's voice softened.
            <br className="hidden sm:block" />
            Those words, she said, opened Shankaracharya's inner vision. In that
            moment he realized the truth of Advaita the philosophy that all
            beings are one. It is said that from this profound realization he
            later composed the famous philosophical verses known as the Manisha
            Panchakam.
          </p>

          <p>
            Some people believe that Alankaran was not an ordinary man at all,
            but a divine manifestation of Shiva, who had taken the form of a
            humble outcaste to teach the world about equality and truth.
          </p>

          <p>
            Over time, the people of North Malabar remembered this story through
            ritual songs and performances. Alankaran, the man who was once
            mocked as “Pottan,” came to be worshipped as Pottan Theyyam, a
            powerful deity who stands against injustice and reminds people of
            the oneness of all life.
          </p>

          <p>
            The grandmother looked and said gently,
            <br className="hidden sm:block" />
            “Remember this… sometimes the world calls a wise person a fool. But
            truth has a way of shining through, even after many years.”
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
