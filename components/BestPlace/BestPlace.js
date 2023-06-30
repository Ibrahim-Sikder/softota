import React from 'react'
import style from './BestPlace.module.css';
import Image from 'next/image';
import hotel from '../../public/hotel4.png'
import see from '../../public/see.png'
import see2 from '../../public/see2.png'
import see3 from '../../public/see3.png'
import see4 from '../../public/see4.png'
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
const BestPlace = () => {
     return (
          <div className={style.bestPlaceWrap}>
            <div className={style.trendingHead}>
               <h2>Best Places To Visit In Bangladesh</h2>
               <p>
                 
               Bangladesh is a South Asian country with a rich cultural heritage
               and natural beauty. It is home to the world s largest mangrove
               forest, culture, and natural beauty.
                </p>
             </div>
           <div className={style.destination}> 
               <div className={style.trending}>
                         <Image
                         src={see}
                         alt="Picture of the author"
                         width={400}
                         height={300}
                         className={style.swiperImg}
                         />
                         {/* <img src={trending} className="w-full" alt="" /> */}
                         <div className={style.placeFooter}>
                         <h3>Coxs Bazar</h3>
                         <span>1500TK</span>
                         </div>
                         
                 </div>
                 <div className={style.trending}>
                        <div className={style.imgWrap}> 
                        <Image
                         src={see2}
                         alt="Picture of the author"
                         width={400}
                         height={300}
                         className={style.swiperImg}
                         />
                        </div>
                        
                         {/* <img src={trending} className="w-full" alt="" /> */}
                         <div className={style.placeFooter}>
                         <h3>Shylet</h3>
                         <span>900TK</span>
                         </div>
                         
                 </div>
                 <div className={style.trending}>
                         <Image
                         src={see3}
                         alt="Picture of the author"
                         width={400}
                         height={300}
                         className={style.swiperImg}
                         />
                         {/* <img src={trending} className="w-full" alt="" /> */}
                         <div className={style.placeFooter}>
                         <h3>Sainmartin</h3>
                         <span>1400TK</span>
                         </div>
                         
                 </div>
                 <div className={style.trending}>
                         <Image
                         src={see4}
                         alt="Picture of the author"
                         width={400}
                         height={300}
                         className={style.swiperImg}
                         />
                         {/* <img src={trending} className="w-full" alt="" /> */}
                         <div className={style.placeFooter}>
                         <h3>Sundarban</h3>
                         <span>1900TK</span>
                         </div>
                         
                 </div>
           </div>
          </div>
         );
}

export default BestPlace
