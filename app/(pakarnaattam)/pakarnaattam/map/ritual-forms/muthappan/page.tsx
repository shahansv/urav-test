import PakarnaattamHeader from "@/components/web/pakarnaattam-header";
import ScrollButton from "@/components/web/scroll-button";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamMuthappanPage() {
  return (
    <main>
      <PakarnaattamHeader
        soundFile="/pakarnaattam/muthappan.opus"
        soundVolume={0.8}
      />
      <article className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-14 ">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-6">
            Muthappan
          </h1>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/muthappan-img1.jpg"
              alt="Muthappan Illustration"
              width={2048}
              height={2048}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            “Not all gods are found in grand palaces,” she began. “Some choose
            to walk among people… to live like them, to understand them.”
          </p>

          <p>
            Long ago, in Ayyankara Illam, there lived a noble couple who had no
            children. The lady of the house, Padikkutti Antharjanam, was a
            devoted follower of Shiva. Every day, she prayed with all her heart,
            wishing for a child.
          </p>

          <p>
            One night, Shiva appeared in her dream.
            <br className="hidden sm:block" />
            The very next morning, as she returned from bathing in a nearby
            stream, she saw something extraordinary a baby lying gently on a bed
            of flowers. She felt it was a blessing. With love, she carried the
            child home and raised him as her own.
            <br className="hidden sm:block" />
            But this child… the grandmother paused, “was different.”
          </p>

          <p>
            The child grew up as the joy of the household. He was taught the
            Vedas and epics and was brought up according to Brahmin customs,
            even undergoing the sacred ritual of upanayanam. But as he grew
            older, his true nature began to reveal itself.
          </p>

          <p>
            He showed signs of something beyond human. He freely moved among
            people of all communities, inviting those considered lower caste
            into the illam. He hunted in the forests and brought meat back home,
            breaking the strict rules of purity the household followed.
          </p>

          <p>What the illam tried to preserve, he quietly challenged.</p>

          <p>
            Despite repeated warnings, he did not change. When Ayyankara Devan
            could no longer tolerate his actions, it was decided that the boy
            must leave.
            <br className="hidden sm:block" />
            In that moment, his divine power revealed itself. With a single
            glance, the vegetation around him seemed to burn with his anger.
            When his gaze turned toward his father, his mother rushed forward,
            covering his eyes and pleading with him to soften his vision. It was
            then they truly understood that he was no ordinary child, but a
            divine being. With his bow and arrow and a pack of hunting dogs, he
            left the illam and walked into the forests, choosing his own path.
          </p>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/muthappan-img2.jpg"
              alt="Muthappan Illustration"
              width={2048}
              height={2048}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            He travelled until he reached the beautiful lands of Kunnathoor. The
            place was peaceful, filled with nature. And there… he chose to stay
            for a while.
          </p>

          <p>
            The grandmother chuckled softly.
            <br className="hidden sm:block" />
            “They say he even developed a liking for toddy from the palm trees.”
          </p>

          <p>
            One day, he climbed a palm tree and drank toddy. The owner of the
            tree, a man named Chandan, tried to attack him in anger. But the
            moment Muthappan looked at him, Chandan froze and fell unconscious.
          </p>

          <p>
            When Chandan's wife came searching for him, she found him lying
            still. Looking up, she saw a radiant figure above, glowing with
            divine light, and cried out, “Muthappa,” ( like calling a
            grandfather ). She prayed for her husband, and soon, he woke up.”
            <br className="hidden sm:block" />
            They understood then… this was no ordinary being.
            <br className="hidden sm:block" />
            With devotion, they offered him what they had boiled grains,
            coconut, roasted fish, and toddy. Simple food, just like theirs.
            <br className="hidden sm:block" />
            Muthappan accepted it with grace.
            <br className="hidden sm:block" />
            He blessed them and chose Kunnathoor as his home. That place came to
            be known as Kunnathoor Paadi.
          </p>

          <p>
            The grandmother's voice grew a little deeper now.
            <br className="hidden sm:block" />
            You see… Muthappan did something very important. At a time when
            Brahminical rules controlled who could eat what, who could touch
            whom, and who could enter sacred spaces… he broke all those
            boundaries. He ate food that was considered 'impure' by the upper
            castes. He lived among those who were pushed to the margins. He
            showed, without anger but with quiet strength, that divinity does
            not belong to one group alone. He was not against people… but
            against the idea that some people are greater than others. “But his
            journey was not over,” she continued.
          </p>

          <p>
            One day, he shot an arrow into the sky. It travelled far and landed
            in a place now known as Parassinikkadavu Muthappan Temple.
          </p>

          <p>
            “That is where he chose to stay.”
            <br className="hidden sm:block" />
            Even today, people believe he lives there, not as a distant god, but
            as one among them. He accepts offerings that other temples may not.
            He does not see caste, wealth, or status.
          </p>

          <p>
            The grandmother looked at the children, her eyes warm.
            <br className="hidden sm:block" />
            “He is a god who walks with the people, eats like them, and belongs
            to everyone.” And that, she said gently, is why Muthappan is not
            just worshipped… but loved.
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
