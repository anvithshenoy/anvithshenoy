"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

const cardList = [
  {
    caption: "Developer & Designer",
    image: "/profile.jpg",
    blurDataURL: "/blur/profile.jpg",
  },
  {
    caption: "Graphic Design",
    image: "/design.jpg",
    blurDataURL: "/blur/design.jpg",
  },
];

const SwiperCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[EffectCards]}
      effect="cards"
      grabCursor={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      className="w-2/3 sm:w-1/4"
      autoplay={true}
    >
      {cardList.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="profile flex h-max w-full flex-col items-center justify-center border-4 border-b-8 border-dark bg-dark">
            <Image
              src={card.image}
              width={550}
              height={550}
              className={`aspect-square object-cover object-top ${
                activeIndex === index
                  ? "mix-blend-normal"
                  : "mix-blend-luminosity"
              }`}
              blurDataURL={card.blurDataURL}
              alt={card.caption}
              quality={85}
            />
            <p className="min-h-10 w-full place-content-center bg-dark px-1 text-center text-base text-light">
              {card.caption}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCards;
