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
import tour from "../../../public/assets/tourImage3.jpg";
import tour2 from "../../../public/assets/tourImage4.jpg";
import tour3 from "../../../public/assets/tourImage5.jpg";
import tour4 from "../../../public/assets/tourImage6.jpg";
import tour5 from "../../../public/assets/tourImage7.jpg";
import tour6 from "../../../public/assets/tourImage8.jpg";
import tour7 from "../../../public/assets/tourImage9.jpg";
import tour8 from "../../../public/assets/tourImage10.jpg";
import tour9 from "../../../public/assets/tourImage11.jpg";
import tour10 from "../../../public/assets/tourImage12.jpg";
import tour11 from "../../../public/assets/tourImage13.jpg";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "../../../components/Tour/Tour.module.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SeeMoreButton from "../../Shared/SeeMoreButton/SeeMoreButton";
const HotelTrending = () => {
  var settings = {
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
    <section>
      <SectionTitle
        heading="Inbound Tour Packages "
        subHeading="Explore breathtaking landscapes and cultural wonders with our immersive inbound tour packages, curated for an unforgettable journey into the heart of diverse destinations."
      ></SectionTitle>
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
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
                loading="lazy"
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
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
          </Slider>
          <Link href="/tours/package">
            <SeeMoreButton />
          </Link>
        </div>
      </div>
      <SectionTitle
        heading="Outbond Tour Packages "
        subHeading="India’s diverse topography, history and culture offers enough
       experiences to fulfil any type of wanderlust.."
      ></SectionTitle>

      <div className={style.destination}>
        <div>
          <Slider {...settings}>
            <div className={style.tourTrending}>
              <Image
                src={tour}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6>Radisson Blu Plaza Delhi Airport </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">504$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>

              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour2}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">The Corinthians Resort & Club </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">1344$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour3}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Roseate House</h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">454$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour4}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Kaldan Samudhra Palace</h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">124$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour5}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Gokulam Grand Turtle on the Beach </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">774$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour6}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Caravela Beach Resort </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour6}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">The Lalit New Delhi </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour7}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Trident Udaipur</h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour8}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Taj Resort & Convention Centre, Goa </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour9}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Country Inn Mysore </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour9}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3"> The Leela Kovalam, A Raviz Hotel</h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour10}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">Chandys Windy Woods </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
            <div className={style.tourTrending}>
              <Image
                src={tour11}
                alt="Picture of the author"
                width={500}
                height={500}
                className={style.swiperImg}
                loading="lazy"
              />
              <div>
                <div className={style.pricePackage}>
                  <h6 className="mb-3">New York City Hotels </h6>
                  <div className="relative">
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                    <span className={style.tourDay}>
                      <small>3D</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailBtn}>
                <Link href="/details">
                  <button>View Details </button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
        <Link href="/tours/package">
          <SeeMoreButton />
        </Link>
      </div>
    </section>
  );
};

export default HotelTrending;
