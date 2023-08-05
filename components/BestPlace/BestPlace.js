import React from "react";
import style from "./BestPlace.module.css";
import Image from "next/image";
import cox from "../../public/assets/cox.jpg";
import see from "../../public/assets/shylet.jpg";
import see3 from "../../public/see3.png";

import { autoplay, FreeMode, Pagination, Autoplay, Navigation } from "swiper";
import Link from "next/link";
import { FaLaptopHouse } from "react-icons/fa";
const BestPlace = () => {
  return (
    <div className={style.bestPlaceWrap}>
      <div className={style.trendingHead}>
        <h2>Best Places To Visit In Bangladesh</h2>
        <p>
          Bangladesh is a South Asian country with a rich cultural heritage and
          natural beauty. It is home to the world s largest mangrove forest,
          culture, and natural beauty.
        </p>
      </div>
      <div>
        <div className={style.singleBestPlace}>
          <div className="max-w-screen-xl mx-auto px-4 pt-8 pb-10">
            <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
              <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                <Link
                  href=""
                  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-[#4AB449]"
                >
                  {/* <img src={category.img}  /> */}

                  <Image
                    className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150"
                    alt="house"
                    src={cox}
                  />
                  {/* width={40}
                               height={20} */}

                  <div className="absolute gradient transition duration-500 group-hover:bg-[#19ABE3] group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
                  <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                    <div className="h-1/2 relative">
                      <div className="absolute bottom-0">
                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                          Cox s Bazar
                        </h2>
                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                          4500TK
                        </h2>
                      </div>
                    </div>
                    <div className="h-1/2">
                      <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                        {" "}
                        It is famous mostly for its long natural sandy beach,
                        and it is infamous for the largest refugee camp in the
                        world. It is located 150 km.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                <Link
                  href=""
                  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-[#4AB449]"
                >
                  {/* <img src={category.img}  /> */}

                  <Image
                    className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150"
                    alt="house"
                    src={see}
                  />
                  {/* width={40}
                               height={20} */}

                  <div className="absolute gradient transition duration-500 group-hover:bg-[#19ABE3] group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
                  <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                    <div className="h-1/2 relative">
                      <div className="absolute bottom-0">
                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                          Shylet
                        </h2>
                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                          4500TK
                        </h2>
                      </div>
                    </div>
                    <div className="h-1/2">
                      <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                        {" "}
                        Tourist attractions outside the city include Ratargul
                        Swamp Forest, Bisnakandi, Bholaganj SadaPathor, Jaflong,
                        Lalakhal, Khadimnagar Rain Forest, Sreemangal
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                <Link
                  href=""
                  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-[#4AB449]"
                >
                  {/* <img src={category.img}  /> */}

                  <Image
                    className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150"
                    alt="house"
                    src={see3}
                  />
                  {/* width={40}
                               height={20} */}

                  <div className="absolute gradient transition duration-500 group-hover:bg-[#19ABE3] group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
                  <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                    <div className="h-1/2 relative">
                      <div className="absolute bottom-0">
                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">
                          Sundarban
                        </h2>
                        <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 ">
                          4500TK
                        </h2>
                      </div>
                    </div>
                    <div className="h-1/2">
                      <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100">
                        {" "}
                        Sundarbans is a mangrove area in the delta formed by the
                        confluence of the Ganges, Brahmaputra and Meghna Rivers
                        in the Bay of Bengal
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPlace;
