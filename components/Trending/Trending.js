import React from "react";
import style from './Trending.module.css'
// import trending from '../../public/Trending.png'
import hotel2 from '../../public/hotel1.png'
import hotel from '../../public/hotel3.png'

import Image from "next/image";
const Trending = () => {
  return (
    <div className={style.destination}>
      <div className={style.trendingHead}>
        <h2>Trending International Destinations</h2>
        <p>
          
          Serving our customer, searching their entire satisfaction and
          providing <br /> touristic services of quality, committing to the
          social, cultural and <br /> environmental reality of our country.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div className={style.trending}>
        {/* <Image
            src={trending}
            alt="Picture of the author"
            width={500}
            height={500}
            className={style.trendingImg}
            /> */}
          {/* <img src={trending} className="w-full" alt="" /> */}
          <div className="w-full flex justify-between px-5">
            <div>
              <h6>Dubai: The city of life </h6>
              <span>
                Starts From <span className="text-black">27500TK</span>
              </span>
            </div>
            <p>4 Days </p>
          </div>
          <button>View Details </button>
        </div>
        <div className={style.trending}>
        <Image
            src={hotel2}
            alt="Picture of the author"
            width={500}
            height={500}
            className={style.trendingImg}
            />
          <div className="w-full flex justify-between px-5">
            <div>
              <h6>Dubai: The city of life </h6>
              <span>
                Starts From <span className="text-black">27500TK</span>
              </span>
            </div>
            <p>4 Days </p>
          </div>
          <button>View Details </button>
        </div>
        <div className={style.trending}>
        <Image
            src={hotel}
            alt="Picture of the author"
            width={500}
            height={500}
            className={style.trendingImg}
            />
          <div className="w-full flex justify-between px-5">
            <div>
              <h6>Dubai: The city of life </h6>
              <span>
                Starts From <span className="text-black">27500TK</span>
              </span>
            </div>
            <p>4 Days </p>
          </div>
          <button>View Details </button>
        </div>
       
      </div>
    </div>
  );
};

export default Trending;
