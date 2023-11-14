import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import user from '../../../public/assets/review.png'
import style from './Review.module.css'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import Image from 'next/image';
const Reveiw = () => {
  return (
    <>
      <div className="my-16">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={style.mySwiper}
      >
        <SwiperSlide className={style.swiperSlide}>
         <div className={style.testimonialBox}>
          <FaQuoteLeft/>
          <div className={style.content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis debitis enim quam quod et consequatur, commodi molestias sit atque eos quo deleniti ea ullam inventore? Consequuntur, nostrum </p>
            <div className={style.details}>
              <div className={style.imgBx}>
               <div className="flex items-center">
               <Image
                alt='swiper'
                src={user}
                className=' w-[80px] h-[80px] rounded-full'
                />
                <div>
                  <b className='block'>Aminul Hoque </b>
                  <small>Business Man </small>
                </div>
               </div>
              </div>
            </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
         <div className={style.testimonialBox}>
          <FaQuoteLeft/>
          <div className={style.content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis debitis enim quam quod et consequatur, commodi molestias sit atque eos quo deleniti ea ullam inventore? Consequuntur, nostrum </p>
            <div className={style.details}>
              <div className={style.imgBx}>
               <div className="flex items-center">
               <Image
                alt='swiper'
                src={user}
                className=' w-[80px] h-[80px] rounded-full'
                />
                <div>
                  <b className='block'>Aminul Hoque </b>
                  <small>Business Man </small>
                </div>
               </div>
              </div>
            </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
         <div className={style.testimonialBox}>
          <FaQuoteLeft/>
          <div className={style.content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis debitis enim quam quod et consequatur, commodi molestias sit atque eos quo deleniti ea ullam inventore? Consequuntur, nostrum </p>
            <div className={style.details}>
              <div className={style.imgBx}>
               <div className="flex items-center">
               <Image
                alt='swiper'
                src={user}
                className=' w-[80px] h-[80px] rounded-full'
                />
                <div>
                  <b className='block'>Aminul Hoque </b>
                  <small>Business Man </small>
                </div>
               </div>
              </div>
            </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
         <div className={style.testimonialBox}>
          <FaQuoteLeft/>
          <div className={style.content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis debitis enim quam quod et consequatur, commodi molestias sit atque eos quo deleniti ea ullam inventore? Consequuntur, nostrum </p>
            <div className={style.details}>
              <div className={style.imgBx}>
               <div className="flex items-center">
               <Image
                alt='swiper'
                src={user}
                className=' w-[80px] h-[80px] rounded-full'
                />
                <div>
                  <b className='block'>Aminul Hoque </b>
                  <small>Business Man </small>
                </div>
               </div>
              </div>
            </div>
          </div>
         </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Reveiw;