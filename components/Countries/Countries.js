import React from "react";
import style from "./Countries.module.css";
import Image from "next/image";
import malasiya from "../../public/assets/malasiya.png";
import usa from "../../public/assets/usa.png";
import england from "../../public/assets/england.png";
import china from "../../public/assets/china.png";
import germany from "../../public/assets/germany.png";
import newzealand from "../../public/assets/newzealand.png";
import italy from "../../public/assets/italy.png";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";


const Countries = () => {
  return (
    <section className={style.countryWrap}>
      <div className="mt-10 text-center">
        <SectionTitle
        heading='Top visited countries'
        subHeading=' The Top Ranking of Most Visited Countries in the World is based on
        the most recent available numbers of visitors a country'
        ></SectionTitle>
        <div className="w-9/12 h-3/4 mx-auto p-10 bg-[#DBF0DB]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10 place-items-center">
            <Image
             loading="lazy"
              className={style.countryImg}
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
             loading="lazy"
              className={style.countryImg}
              src={italy}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
             loading="lazy"
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
             loading="lazy"
              className={style.countryImg}
              src={italy}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
             loading="lazy"
              className={style.countryImg}
              src={usa}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <button className={style.countryBtn}>View More countries</button>
        </div>
      </div>
    </section>
  );
};

export default Countries;
