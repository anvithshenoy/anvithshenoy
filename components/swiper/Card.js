"use client";

import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const cardList = [
  {
    caption: "Web Developer & Designer",
    image: "/myself.jpg",
    blurDataURL: "/blur/myself.webp",
  },
  {
    caption: "Graphic Design",
    image: "/design.jpg",
    blurDataURL: "/blur/design.webp",
  },
];

const SwiperCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <Swiper
      modules={[EffectCards]}
      effect="cards"
      grabCursor={false}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      className="w-2/3 *:cursor-none md:w-1/4"
    >
      {cardList.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="profile flex h-max w-full flex-col items-center justify-center border-4 border-b-8 border-dark bg-dark">
            <Image
              onContextMenu={handleContextMenu}
              src={card.image}
              width={550}
              height={550}
              className={`aspect-square object-cover object-top ${
                activeIndex === index
                  ? "mix-blend-normal"
                  : "mix-blend-luminosity"
              }`}
              placeholder="blur"
              blurDataURL={card.blurDataURL}
              alt={card.caption}
              quality={50}
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
