import React from "react";
import style from "./Countries.module.css";
import Image from "next/image";
import malasiya from "../../public/malasiya.png";
import usa from "../../public/usa.png";
import england from "../../public/england.png";
import china from "../../public/china.png";
import germany from "../../public/germany.png";
import italy from "../../public/italy.png";
import newzealand from "../../public/newzealand.png";

const Countries = () => {
  return (
    <div className={style.countryWrap}>
      <div className="mt-10 text-center">
        <div className={style.countryHeadText}>
          <h2 className="text-3xl font-bold capitalize">
            Top visited countries
          </h2>
          <p>
            The Top Ranking of Most Visited Countries in the World is based on
            the most recent available numbers of visitors a country
          </p>
        </div>
        <div className="w-9/12 h-3/4 mx-auto p-10 bg-[#DBF0DB]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10 place-items-center">
            <Image
              className={style.countryImg}
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              className={style.countryImg}
              src={italy}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              className={style.countryImg}
              src={china}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              className={style.countryImg}
              src={germany}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              className={style.countryImg}
              src={newzealand}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              className={style.countryImg}
              src={england}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              className={style.countryImg}
              src={italy}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              className={style.countryImg}
              src={usa}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <button className="countryBtn  bg-[#4AB449] py-2 px-5 text-white">
            View More countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Countries;
