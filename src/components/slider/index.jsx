import React, { useEffect, useState } from "react";
import { SliderContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ bannerList }) => {
  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
          >
            {bannerList.map((slider) => (
              <SwiperSlide key={slider.id}>
                <img
                  src={slider.imageUrl}
                  width="100%"
                  height="100%"
                  alt="推荐"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
};

export default React.memo(Slider);
