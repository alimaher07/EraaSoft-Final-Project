'use client'

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import FirstText from './Slide One/firstText';
import SecondText from './Slide Two/secondText';

import { Pagination, Navigation } from 'swiper/modules'

export default function SwiperComponent() {
  return (
    <Swiper
    spaceBetween = {0}
    slidesPerView = {1}
    navigation = {true}
    pagination = {{ clickable : true }}
    scrollbar = {{ draggable : true }}
    className = 'w-full'
    loop = {true}
    modules = {[ Pagination , Navigation ]}
    >
        <SwiperSlide>
            <FirstText />
        </SwiperSlide>
        <SwiperSlide>
            <SecondText />
        </SwiperSlide>
    </Swiper>
  )
}
