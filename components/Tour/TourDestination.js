import React from "react";
import hotel from "../../public/hotel.png";
import vissa from "../../public/vissa.png";
import { FaSistrix } from "react-icons/fa";
import hotel2 from "../../public/hotel5.png";
import hotel3 from "../../public/hotel6.png";
import hotel6 from "../../public/hotel7.png";
import hotel4 from "../../public/hotel8.png";
import hotel5 from "../../public/hotel8.png";
import hotel11 from "../../public/hotel11.png";
import hotel7 from "../../public/hotel7.png";
import hotel8 from "../../public/hotel8.png";
import hotel9 from "../../public/hotel9.png";
import hotel10 from "../../public/hotel10.png";
import Image from "next/image";
import Link from "next/link";
import style from "./Tour.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const TourDestination = () => {

  
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={style.bestPlaceHead}>
        <h2>Trending International Destinations </h2>
        <p>
          The world is now just a hop, skip and jump away and here’s how you can
          make your travel easier and better.
        </p>
      </div>
      <div className={style.destination}>
      <div>
          <Slider {...settings}>
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
                    <h6 className="mb-3">Cinnamon Dhonveli</h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">9Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
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
                    <h6 className="mb-3">Egypt: Mysteries Desert </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
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
                    <h6 className="mb-3">Europe: the city of dream city  </h6>
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel7}
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel8}
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel9}
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel10}
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel11}
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
          </Slider>
        </div>
      </div>
      {/* trending Indian destination  */}
      <div className={style.bestPlaceHead}>
        <h2>Trending Indian Destinations </h2>
        <p>
          India’s diverse topography, history and culture offers enough
          experiences to fulfil any type of wanderlust.
        </p>
      </div>
      <div className={style.destination}>
        <div>
        <Slider {...settings}>
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
                    <h6 className="mb-3">Cinnamon Dhonveli</h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
                      <span className="bg-[#E6F8FF] p-3 ml-3 ">9Days</span>
                    </div>
                  </div>
                </div>
               <div className={style.viewDetailBtn}>
               <Link href="/detailHotel">
                  <button>View Details </button>
                </Link>
               </div>
              </div>
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
                    <h6 className="mb-3">Egypt: Mysteries Desert </h6>
                    <div>
                      <span className="text-[#4AB449] mt-5 ">Starts From <span className="text-black">184$</span></span>
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
                    <h6 className="mb-3">Europe: the city of dream city  </h6>
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel7}
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel8}
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel9}
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel10}
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
              <div className={style.tourTrending}>
                <Image
                  src={hotel11}
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TourDestination;
