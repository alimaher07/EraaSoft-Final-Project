'use client'

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import FirstStudent from "./First Student/firstStudent"
import SecondStudent from "./Second Student/secondtStudent"
import ThirdStudent from "./Third Student/thirdStudent"
import ForthStudent from "./Fourth Student/forthStudent"

import { Pagination, Navigation } from 'swiper/modules'


export default function SwiperStudents() {
  return (
    <Swiper 
    spaceBetween = {300}
    slidesPerView = "1"
    navigation = {true}
    pagination = {{ clickable : true }}
    scrollbar = {{ draggable : true }}
    className = 'w-full'
    loop = {true}
    modules = {[ Pagination , Navigation ]}>

    <SwiperSlide>
        <FirstStudent />
    </SwiperSlide>
    <SwiperSlide>
        <SecondStudent />
    </SwiperSlide>
    <SwiperSlide>
        <ThirdStudent />
    </SwiperSlide>
    <SwiperSlide>
        <ForthStudent />
    </SwiperSlide>
    </Swiper>
  )
}
