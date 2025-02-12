"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./banner-swiper.css";
export const BannerSwiper = () => {
  return (
    <div className="banner-swiper">
      <Swiper
        className="mySwiper"
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/e46dae7c-2d55-40f4-9e80-84baf6eb4c45.png?format=avif"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/feb896ca-4728-4f21-94e7-d2d83c3195f0.gif?format=avif"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
