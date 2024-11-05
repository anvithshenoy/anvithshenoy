"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

const SwiperCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[EffectCards]}
      effect="cards"
      grabCursor={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      className="w-2/3 sm:w-1/4"
    >
      {[...Array(4)].map((_, index) => (
        <SwiperSlide key={index} className="">
          <div className="profile flex w-full flex-col items-center justify-center border-4 border-b-8 border-dark bg-dark">
            <Image
              src="/Profile.jpg"
              width={550}
              height={550}
              className={`aspect-square object-cover object-center ${
                activeIndex === index
                  ? "mix-blend-normal"
                  : "mix-blend-luminosity"
              }`}
              alt={`Profile ${index + 1}`}
              quality={85}
            />
            <p className="w-full bg-dark px-1 text-light">
              Web Developer & Designer
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCards;
