import PakarnaattamHeader from "@/components/web/pakarnaattam-header";
import ScrollButton from "@/components/web/scroll-button";
import Image from "next/image";
import Link from "next/link";

export default function PakarnaattamHumanBehindDeityPage() {
  return (
    <main>
      <PakarnaattamHeader
        soundFile="/pakarnaattam/fire.opus"
        soundVolume={0.8}
      />
      <article className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-14 ">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-6">
            Shashikumar
          </h1>

          <figure className="flex justify-center">
            <Image
              src="/pakarnaattam/shashikumar.jpg"
              alt="shashikumar Illustration"
              width={1280}
              height={1280}
              priority
              className="w-full h-auto"
            />
          </figure>

          <p>
            “Change can be accepted, as long as the rituals are not altered”.
          </p>

          <p>
            Even at the age of 65, with a voice refined through years of
            practice, Shashikumar from Panur Chendayad is reciting the Thottam.
            Wearing a fish-shaped crown and holding a bow and arrow, he
            transforms into Muthappan, embodying a calm yet radiant presence.
            Through his performance, he once again enacts the Thottam and dance
            of Muthappan, absorbing the sorrows of ordinary people.
            <br className="hidden sm:block" /> As he speaks about the legends
            and rituals of Muthappan, his memories drift back, and for a moment,
            Shashikumar becomes a young man again.
            <br className="hidden sm:block" /> “We belong to the Anjootan
            community. I began performing Muthappan Theyyam in my early
            twenties. Back then, we would earn just enough for tea. After the
            season ended, there would be no work for six months…” The hardships
            of those days pass through his mind.
            <br className="hidden sm:block" /> But times have changed now. Life
            has moved forward. With better income, the younger generation has
            also become more active in this field. In the earlier days, the
            performance was simpler, but over time, Muthappan Theyyam has
            evolved visually, becoming more elaborate while still retaining its
            rituals and traditions.
            <br className="hidden sm:block" /> “Change can be accepted,” he
            says, “as long as the rituals are not altered. Performing Theyyam is
            an act of complete surrender.”
          </p>

          <p>
            Shashikumar has learned the art by watching and listening to his
            elders. The rhythm, the music, and the dance must all come together
            to captivate the audience. Once the costume is worn and the ritual
            sword (madayan churika) is placed in his hand, the presence of
            Muthappan is believed to enter his body. From that moment until the
            crown is removed, there is no human on stage only Muthappan.
            <br className="hidden sm:block" />
            Muthappan is performed mainly in three forms. In Thiruvappana,
            considered an aspect of Lord Shiva, the performer appears with a
            crescent-shaped crown and facial makeup, embodying a calm yet
            radiant presence. In the Mudi Uyarna Muthappan (Vaishnava or hunting
            form), the performer wears a fish-shaped crown and carries a bow and
            arrow, appearing in the form of a hunter. In another form, Muthappan
            appears as a householder and a people's deity living like an
            ordinary man, hunting, consuming toddy and fish, and directly
            listening to the concerns of devotees.
          </p>

          <p>
            “When the body and mind can no longer keep up,” Shashikumar says,
            “one naturally steps away from performing.” Like any art, he
            believes that with sincerity, discipline, and a willingness to
            learn, the younger generation can continue to shine in performing
            Muthappan Theyyam.
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
