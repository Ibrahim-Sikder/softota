import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { autoplay, FreeMode, Pagination, Autoplay, Navigation,Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import hotel from "../../public/hotel.png";
import vissa from "../../public/vissa.png";
import { FaSistrix } from "react-icons/fa";
import hotel2 from "../../public/hotel5.png";
import hotel3 from "../../public/hotel6.png";
import hotel6 from "../../public/hotel7.png";
import hotel4 from "../../public/hotel8.png";
import hotel5 from "../../public/hotel8.png";
import Image from "next/image";
import Link from "next/link";
import style from "./Tour.module.css";
const TourDestination = () => {
  return (
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
          
            modules={[ Autoplay, Pagination, Navigation,Mousewheel]}
            className={style.mySwiper}
          >
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={hotel6}
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
                  src={hotel2}
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
                  src={hotel3}
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
                  src={hotel4}
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
                  src={hotel5}
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
                  src={hotel6}
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
                  src={hotel6}
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
      {/* trending Indian destination  */}
      <div className={style.bestPlaceHead}>
        <h2>Trending Indian Destinations </h2>
        <p>India’s diverse topography, history and culture offers enough
experiences to fulfil any type of wanderlust.</p>
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
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
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
          
            modules={[ Autoplay, Pagination, Navigation,Mousewheel]}
            className={style.mySwiper}
          >
            <SwiperSlide>
              <div className={style.tourTrending}>
                <Image
                  src={hotel6}
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
                  src={hotel2}
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
                  src={hotel3}
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
                  src={hotel4}
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
                  src={hotel5}
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
                  src={hotel6}
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
                  src={hotel6}
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
  );
};

export default TourDestination;
