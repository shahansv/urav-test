import PakarnaattamHeader from "@/components/web/pakarnaattam-header";
import ScrollButton from "@/components/web/scroll-button";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamKathivanoorVeeranPage() {
  return (
    <main>
      <PakarnaattamHeader
        soundFile="/pakarnaattam/kathivanoor-veeran.opus"
        soundVolume={0.8}
      />
      <article className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-14 ">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-6">
            Kathivanoor Veeran
          </h1>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/kathivanoor-veeran-img1.jpg"
              alt="kathivanoor veeran Illustration"
              width={1647}
              height={1647}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            Long ago, in a village called Mangad near Taliparamba, there lived a
            couple named Kumarachan and Chakkiyamma. For many years they had no
            children, and they prayed earnestly to their ancestral deity,
            Chuzhali Bhagavathi. At last, their prayers were answered. A son was
            born to them on the star Makam, and they named him Mandappan. The
            elders believed the child was no ordinary boy some even said he
            carried the spirit of a gandharva, sent to earth for a special
            purpose. Mandappan grew up strong, fearless, and full of energy.
            While other boys played ordinary games, Mandappan was fascinated by
            weapons and martial skills. He trained tirelessly, mastering the
            techniques of the warrior traditions of the land. But this passion
            for weapons and adventure often worried his father, who wished for
            him to settle into a responsible life and earn for the family.
          </p>

          <p>
            One day, after a disagreement with his father, Mandappan left home,
            determined to make his own destiny. Refusing to return, he travelled
            and eventually reached a place called Kathivanoor in the northern
            Malabar region. There, with the support of his relatives, he began a
            new life. Through hard work and determination, Mandappan transformed
            barren lands into fertile fields and built a thriving life through
            farming and trade.
          </p>

          <p>
            As the years passed, Mandappan's courage and success became well
            known. But success often brings jealousy. A rival chieftain named
            Mutharmudi Kudakar began to see Mandappan as a threat. Despite this
            tension, Mandappan's life seemed complete when he fell deeply in
            love with a woman named Chemmarathi. They married and began a joyful
            life together.
            <br className="hidden sm:block" /> But fate had other plans.
          </p>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/kathivanoor-veeran-img2.jpg"
              alt="kathivanoor veeran Illustration"
              width={2048}
              height={2048}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            One day, after Mandappan returned late from a journey, a
            misunderstanding arose between the couple. Troubled by doubt and
            anger, Chemmarathi treated him coldly and served him food filled
            with tiny stones and strands of hair an ominous sign in local
            belief. As Mandappan held the ball of rice, it split into two.
            Seeing this, Chemmarathi uttered a chilling prediction: such a sign
            meant a warrior's life would soon be cut short. Just then, the
            distant cry of battle echoed through the land. It was the war call
            of Mutharmudi Kudakar. For a warrior, such a call could never be
            ignored. Mandappan rose immediately and rushed to the battlefield.
          </p>

          <p>
            There he fought with unmatched bravery, using all the martial skills
            he had mastered since childhood. One by one he defeated the enemies
            before him. But when the battle seemed won, Mandappan noticed
            something strange his ring finger, along with his wedding ring, had
            been severed in the fight.A proud warrior like Mandappan could not
            bear to return home without it. Rather than face dishonour, he chose
            to return to the battlefield and reclaim his lost honour.The enemy
            forces saw him return and attacked with renewed fury. Surrounded on
            all sides, Mandappan fought like a raging storm. Arrows rained upon
            him from every direction until his body was pierced again and again.
            Legend says his body was struck by countless arrows, breaking apart
            on the battlefield.
          </p>

          <p>The earth turned red with the blood of the fearless warrior.</p>

          <p>
            Back home, Chemmarathi soon learned of the tragedy. When Mandappan's
            body was gathered and placed upon the funeral pyre, grief consumed
            her heart. Unable to bear life without him, she leapt into the
            flames, choosing to follow her husband in death. But the story does
            not end there.... <br className="hidden sm:block" />
            As the people left the cremation ground the next day, they witnessed
            something astonishing. Along the riverbank, they saw Mandappan and
            Chemmarathi walking together, radiant and divine. The brave warrior
            had transcended death and returned as a powerful spirit.
          </p>

          <p>
            From that day onward, Mandappan was worshipped as Kathivanoor
            Veeran—the fearless warrior of Kathivanoor who chose honour over
            life itself.
          </p>

          <p>
            Grandmother said softly, “And that is why, when Kathivanoor Veeran
            appears as Theyyam, it is not just a dance. It is the story of a
            brave man remembered by the people, a hero whose courage was so
            great that he became a god.”
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
