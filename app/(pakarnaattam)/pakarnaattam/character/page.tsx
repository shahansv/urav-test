import Character from "@/components/web/character";
import PakarnaattamHeader from "@/components/web/pakarnaattam-header";
import ScrollButton from "@/components/web/scroll-button";

export default function PakarnaattamCharacterPage() {
  return (
    <main>
      <PakarnaattamHeader showMap={false} />
      <article className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-14 ">
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <p>
            With the thunder of the Chendamelam, the clash of Ilathalam, the
            sacred Thottam songs, and the glow of fire and torches, the night
            had transformed into a world of trance. Carrying in their minds the
            wondrous sight of Theyyams dancing in fierce splendour, Neelu and
            Kannan finally drifted into sleep well past midnight.
          </p>

          <p>
            After a long gap, the two had come home from Bengaluru during the
            Theyyam season. They were no longer the little children who had
            visited three years ago, next year they would step into Class Ten.
            Earlier, whenever they watched Theyyam, they would fall asleep
            halfway through. But this time, they savoured the entire ambience of
            the ritual from beginning to end. Even in their sleep, Theyyam
            filled their dreams.
          </p>

          <p>
            The moment she woke up in the morning, Neelu rubbed her eyes and
            walked straight into the kitchen where Amma was busy making Dosas.
            Kannan followed close behind.
          </p>

          <p>
            “Amma… Amma… tell us the story of yesterday's Theyyam,” Neelu asked
            eagerly.
          </p>

          <p>
            Already standing in the heat of the stove preparing breakfast for
            ten to fifteen people, Amma grew even more flustered.
            <br className="hidden sm:block" /> “Go wash your mouth and sit
            somewhere over there…,” she said, almost reaching for the ladle in
            mock irritation.
          </p>

          <p>
            Disappointed, the two began to walk away ,
            <br className="hidden sm:block" /> Just then came their
            grandmother's call.
            <br className="hidden sm:block" /> “What is it, children? Want the
            story of the Theyyam? I'll tell you...
            <br className="hidden sm:block" /> Go wash your faces and come.”
          </p>
          <p>
            It was the thira of the sacred grove. The main Theyyams of the night
            were Gulikan and Pottan.
          </p>

          <p>
            Grandmother was about to begin her story.
            <br className="hidden sm:block" />
            Just then Kannan raised another question.
            <br className="hidden sm:block" />
            “Who performs this Theyyam?” <br className="hidden sm:block" />
            “Aaaahaa... you are a tiny little curious creature aren't you.
            <br className="hidden sm:block" /> I'll take you through the world
            of theyyam,” Grandmother replied.
          </p>
          <p> She continued, her voice steady and vivid......</p>
        </div>
      </article>

      <section className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-14">
        <Character />
      </section>

      <ScrollButton isDarkBackground />
    </main>
  );
}
