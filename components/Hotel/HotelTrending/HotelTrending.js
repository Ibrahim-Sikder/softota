import React from "react";
import hotel from "../../../public/assets/india.jpeg";
import hotel1 from "../../../public/assets/india.jpeg";
import hotel2 from "../../../public/assets/india2.jpeg";
import hotel3 from "../../../public/assets/india3.jpeg";
import hotel4 from "../../../public/assets/india4.jpeg";
import hotel5 from "../../../public/assets/india5.jpeg";
import hotel6 from "../../../public/assets/india6.jpeg";
import hotel7 from "../../../public/assets/india7.jpeg";
import hotel8 from "../../../public/assets/india8.jpeg";
import hotel9 from "../../../public/assets/india9.jpeg";
import hotel10 from "../../../public/assets/india10.jpeg";
import hotel11 from "../../../public/assets/hotel2.jpg";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "../../../components/tour/Tour.module.css";
const HotelTrending = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        <h2>Trending Indian Destinations </h2>
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
                src={hotel}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div>
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                src={hotel1}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Cinnamon Dhonveli</h6>
                  <div>
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                src={hotel2}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Egypt: Mysteries Desert </h6>
                  <div>
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                src={hotel3}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Europe: the city of dream city </h6>
                  <div>
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
                    <span className="text-[#4AB449] mt-5 ">
                      Starts From <span className="text-black">184$</span>
                    </span>
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
    </div>
  );
};

export default HotelTrending;
