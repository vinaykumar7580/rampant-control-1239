import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Img} from "@chakra-ui/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import style from "../Style/carousel.module.css"

// import required modules
import { Navigation,Pagination} from "swiper";


export default function Carousel() {
  return (
    <>
      <Swiper slidesPerView={2}
        spaceBetween={0}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]} className={style.mySwiper}>
        <SwiperSlide><Img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1672290419954.jpg?crsl_pos=0" alt="car1"/></SwiperSlide>
        <SwiperSlide><Img src="https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0" alt="car1"/></SwiperSlide>
        <SwiperSlide><Img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667388470485.jpg?crsl_pos=0" alt="car1"/></SwiperSlide>
        <SwiperSlide><Img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1658918101342.jpg?crsl_pos=0" alt="car1"/></SwiperSlide>
        <SwiperSlide><Img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0" alt="car1"/></SwiperSlide>
        <SwiperSlide><Img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1661924796571.jpg?crsl_pos=0" alt="car1"/></SwiperSlide>
        <SwiperSlide><Img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1657799410925.jpg?crsl_pos=0" alt="car1"/></SwiperSlide>
        <SwiperSlide><Img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1652694665568.jpg?crsl_pos=0" alt="car1"/></SwiperSlide>
        <SwiperSlide><Img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1672290419954.jpg?crsl_pos=0" alt="car1"/></SwiperSlide>
      </Swiper>
    </>
  );
}