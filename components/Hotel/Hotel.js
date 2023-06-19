import Image from 'next/image';
import React from 'react'
import style from './Hotel.module.css';
import hotel from '../../public/hotel4.png'
import hotel2 from '../../public/hotel5.png'
import hotel3 from '../../public/hotel6.png'
import hotel6 from '../../public/hotel7.png'
import hotel4 from '../../public/hotel8.png'
import hotel5 from '../../public/hotel8.png'
import hotel7 from '../../public/hotel9.png'
import hotel8 from '../../public/hotel10.png'
import Link from 'next/link';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {autoplay, FreeMode, Pagination,Autoplay,Navigation } from "swiper";

const Hotel = () => {
   
     return (
         <div>
           <div className={style.trendingHead}>
              <h2>Trending International Destinations</h2>
              <p>
                
                Serving our customer, searching their entire satisfaction and
                providing <br /> touristic services of quality, committing to the
                social, cultural and <br /> environmental reality of our country.
              </p>
            </div>
          <div className={style.destination}>
           
            <div >

         
      <Swiper
        slidesPerView={4}
        spaceBetween={100}
        freeMode={true}
        centeredSlides={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.mySwiper}
      >
        <SwiperSlide>
          
        <div className={style.trending}>
              <Image
                  src={hotel}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                 className={style.swiperImg}
                  />
                {/* <img src={trending} className="w-full" alt="" /> */}
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New York City Hotels </h6>
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                
               {/* <Link href={`http://localhost:3000/hotel/${id}`}> */}
               <button>View Details </button>
               {/* </Link> */}
              </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={style.trending}>
              <Image
              className={style.swiperImg}
                  src={hotel2}
                  alt="Picture of the author"
                  width={500}
                  height={500}
            
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>Dubai: The city of life </h6>
                    <span>
                      Starts From <span className="text-black">155$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.trending}>
              <Image
                  src={hotel3}
                  className={style.swiperImg}
                  alt="Picture of the author"
                  width={500}
                  height={500}
              
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New Orleans Hotels </h6>
                    <span>
                      Starts From <span className="text-black">199$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.trending}>
              <Image
              className={style.swiperImg}
                  src={hotel8}
                  alt="Picture of the author"
                  width={500}
                  height={500}
           
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New Orleans Hotels </h6>
                    <span>
                      Starts From <span className="text-black">199$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.trending}>
              <Image
              className={style.swiperImg}
                  src={hotel7}
                  alt="Picture of the author"
                  width={500}
                  height={500}
       
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New Orleans Hotels </h6>
                    <span>
                      Starts From <span className="text-black">199$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.trending}>
              <Image
                  src={hotel3}
                  className={style.swiperImg}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New Orleans Hotels </h6>
                    <span>
                      Starts From <span className="text-black">199$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.trending}>
              <Image
              className={style.swiperImg}
                  src={hotel6}
                  alt="Picture of the author"
                  width={500}
                  height={500}
  
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New Orleans Hotels </h6>
                    <span>
                      Starts From <span className="text-black">199$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.trending}>
              <Image
              className={style.swiperImg}
                  src={hotel5}
                  alt="Picture of the author"
                  width={500}
                  height={500}
            
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New Orleans Hotels </h6>
                    <span>
                      Starts From <span className="text-black">199$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.trending}>
              <Image
              className={style.swiperImg}
                  src={hotel4}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                 
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New Orleans Hotels </h6>
                    <span>
                      Starts From <span className="text-black">199$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
        </SwiperSlide>
      </Swiper>
   

            </div>
          </div>
         </div>
        );
}

export default Hotel
