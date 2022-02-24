import React from 'react'
import Style from "./ImgSwiper.module.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation, Autoplay, Keyboard]); // install Swiper modules

const ImgSwiper = ({Data}) => {
  return (
    <>
        <Swiper loop={true}  slidesPerView={1} slidesPerGroup={1}
        pagination={{ clickable: true }}
        navigation={true}
        className={Style.mySwiper}
        autoplay={{   delay:2500,   disableOnInteraction:false, }}
        keyboard={{enabled:true}}
        >
        {
          Data.map((item,index)=>
            <SwiperSlide  className={Style.swiper_slide} key={index}  >
                <img src={item} loading="lazy" alt="img"  />
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  )
}

export default ImgSwiper;