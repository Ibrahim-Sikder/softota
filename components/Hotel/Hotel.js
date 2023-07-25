import Image from 'next/image';
import React from 'react'
import style from './Hotel.module.css';
import destination from '../../public/assets/destination.jpeg'
import destination1 from '../../public/assets/destination11.jpeg'
import destination2 from '../../public/assets/destination1.jpeg'
import destination3 from '../../public/assets/destination2.jpeg'
import destination4 from '../../public/assets/destination3.jpeg'
import destination5 from '../../public/assets/destination4.jpeg'
import destination6 from '../../public/assets/destination5.jpeg'
import destination7 from '../../public/assets/destination6.jpeg'
import destination8 from '../../public/assets/destination7.jpeg'
import destination9 from '../../public/assets/destination8.jpeg'
import destination10 from '../../public/assets/destination9.jpeg'
import destination11 from '../../public/assets/destination10.jpeg'
import destination12 from '../../public/assets/destination11.jpeg'
import destination13 from '../../public/assets/destination12.jpeg'
import NavBar from "../NavBar/NavBar";
import hajj from '../../public/hajj.png'
import tour from '../../public/tour.png'
import train from '../../public/train.png'
import buss from '../../public/Bus.png'
import flight from '../../public/flight.png'
import hotelIcon from '../../public/hotel.png'
import vissa from '../../public/vissa.png'
import Link from 'next/link';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination,Autoplay,Navigation,Mousewheel  } from "swiper";

const Hotel = () => {
   
     return (
        <div>
          {/* banner */}
          <div className={style.bannerWrap}>
        <h2>Welcome to Ghuronti! Find Tours, Flights & Hotels Packages</h2>
        <div className={style.heroBoxMain}>
         <div className={style.packageWrap}>
         <div className={style.package}>
            <div >
            <h4>City/Hotel/Street Name</h4>
            <input type="text " placeholder='Enter your city' />
            </div>
          </div>
          <div className={style.package2}>
            <div>
            <h4>Nationality</h4>
            <input type="text " placeholder='Bangladesh' />
            </div>
          </div>
         </div>
         <div className={style.packageWrap}>
         <div className={style.packageDate}>
            <div className={style.date}>
            <h4>Check In</h4>
            <input type="date" />
            </div>
            <div className={style.date2}>
            <h4>Check In</h4>
            <input type="date" />
            </div>
          </div>
          <div className={style.package4}>
            <div>
            <h4>Room & Guests</h4>
            <input type="text "  placeholder='1 person'/>
            </div>
          </div>
         </div>
          <button className={style.heroBoxBtn}>Get Your Offers</button>

          {/* menubar */}
          <div>
            <ul className={style.menu}>
             <li>
             <Image
              src={hajj}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/hajjUmra'><p className='ml-3'>Hajj & Umrah</p></Link>
             </li>
             <li>
             <Image
              src={flight}
              alt='menu'
              width={30}
              height={30}
              />
                <Link href='/flight'><p className='ml-3'>Flight</p></Link>
             </li>
             <li>
             <Image
              src={hotelIcon}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/hotel'><p className='ml-3'>Hotel</p></Link>
             </li>
             <li>
             <Image
              src={vissa}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/vissa'><p className='ml-3'>Vissa</p></Link>
             </li>
             <li>
             <Image
              src={tour}
              alt='menu'
              width={30}
              height={30}
              />
               <Link href='/tours'><p className='ml-3'>Tours</p></Link>
             </li>
             <li>
             <Image
              src={buss}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/busses'><p className='ml-3'>Buses</p></Link>
             </li>
             <li className={style.trainLi}>
             <Image
              src={train}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/train'><p className='ml-3'>Trains</p></Link>
             </li>
            </ul>
          </div>


        </div>
    </div>



          {/* hotel structure */}
          <div>
          <div className={style.bestPlaceHead}>
        <h2>Trending International Destinations </h2>
        <p>
        The world is now just a hop, skip and jump away and here’s how
        you can make your travel easier and better.
        </p>
      </div>
      <div className={style.destination}>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={200}
            freeMode={true}
            centeredSlides={true}
            breakpoints={{
              430: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
          
            modules={[Pagination,Autoplay, Navigation,Mousewheel]}
            className={style.mySwiper}
          >
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
                <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">Paris, France - The City of Lights </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination1}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
                <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">Machu Picchu, Peru </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination2}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
               <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">New York City Hotels </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination3}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
               <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">The Grand Canyon </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination4}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
                <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">New Zealand - The Land Where Adventures Wait </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination5}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
               <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">London, England - London: The heritage of England. </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">994$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination6}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
               <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">Goa - Beaches, Sunsets and Crazy Nights </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">7894$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">3Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination7}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
               <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">New York City Hotels </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination8}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
               <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">New York City Hotels </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination9}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
               <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">Munnar, Kerala - Tea Gardens, Lakes and Pretty little hill-station </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">984$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination10}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
               <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">Darjeeling, West Bengal - Queen of The Himalayas </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">6544$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={destination12}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={style.swiperImg}
                />
               <div>
                  <div className={style.pricePackage}>
                    <h6 className="mb-3">New York City Hotels </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">5Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
         </div>
        </div>
        );
}

export default Hotel
