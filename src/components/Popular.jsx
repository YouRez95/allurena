import { useEffect, useRef, useState } from "react";
import card1_1 from "../assets/card1-1.webp";
import card1_2 from "../assets/card1-2.webp";
import card1_3 from "../assets/card1-3.webp";
import { CARDS } from "../data/cards";
import PopularCard from "./PopularCard";

const HEIGHT = 70;
const HEIGHT_OK3 = 140;
const OK2_DELAY_THRESHOLD = -70;

export default function Popular() {
  const startTranslateRef = useRef(null);

  const [translateYOK2, setTranslateYOK2] = useState(0);
  const [translateYOK3, setTranslateYOK3] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (startTranslateRef.current) {
        const top = startTranslateRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        let newTranslateYOK2 = 0;
        let newTranslateYOK3 = 0;

        if (top < OK2_DELAY_THRESHOLD) {
          // Movement for OK2 (starts only after crossing the delay threshold)
          newTranslateYOK2 = Math.max(
            ((top - OK2_DELAY_THRESHOLD) / windowHeight) * 100,
            -HEIGHT
          );
          setTranslateYOK2(newTranslateYOK2);

          // Movement for OK3, starts after OK2 reaches its limit
          if (newTranslateYOK2 <= -HEIGHT) {
            const offsetForOK3 = top + windowHeight * 0.5; // Start movement relative to further scroll
            newTranslateYOK3 = Math.max(
              (offsetForOK3 / windowHeight) * 100,
              -HEIGHT_OK3
            );
          } else {
            newTranslateYOK3 = 0; // Reset OK3 if OK2 hasn't reached its limit
          }

          setTranslateYOK3(newTranslateYOK3);
        } else {
          // Reset translations if scrolled back up
          setTranslateYOK2(0);
          setTranslateYOK3(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="popular"
      className="flex-1 min-h-[300vh] flex flex-col relative pt-[15vh] my-10 mx-1 lg:mx-10 xl:mx-30 2xl:mx-52"
      ref={startTranslateRef}
    >
      <div className="h-[70vh] sticky top-[15vh] overflow-hidden">
        {CARDS.map((card, index) => {
          let translateY;
          let reverse;
          if (index === 1) {
            translateY = translateYOK2;
            reverse = true;
          } else if (index === 2) {
            translateY = translateYOK3;
            reverse = false;
          }

          return (
            <PopularCard
              key={card.productType}
              {...card}
              translateY={translateY}
              reverse={reverse}
            />
          );
        })}
      </div>
    </section>
  );
}
