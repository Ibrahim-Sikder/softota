import React from "react";
import style from "./AboutHero.module.css";
import Image from "next/image";
import about from "../../public/about.png";
import VectorMan from "../../public/VectorMan.png";

const AboutHero = () => {
  return (
    <div className={style.aboutWrap}>
      <section className={style.aboutHero}>
        <Image
          src={about}
          alt="Picture of the author"
          className={style.aboutHeroImg}
        />
        <h2 className={style.aboutHead}>
          Ghuronti.com is partnering with you to reach your dream destinations.
        </h2>
      </section>
      <section className="py-28">
        <div className="flex justify-center flex-wrap-reverse items-center">
          <div className={style.leftBox}>
            <Image
              src={VectorMan}
              alt="Picture of the author"
              className={style.aboutMan}
            />
          </div>
          <div className={style.rightBox}>
            <div>
              <h2 className="text-4xl bold">Kaji Ehsan</h2>
              <p className="text-xl">Directior</p>
              <hr className="mb-5 mt-2 border-black" />
              <h2 className="text-xl font-bold">We are </h2>
              <p>
                Ghuronti.com is leading online travel aggregator in Bangladesh.
                Our mission is Providing advanced travel solutions with great
                care and satisfaction. And that is what we have done since our
                inception. Ghuronti.com is a pioneer in Bangladesh’s online
                travel space. Ghuronti.com is Founded by Kazi Sihan Hossain in
                the year 2016. Ghuronti.com began its journey by serving the
                Bangladesh travel market with best-value products, services and
                round-the-clock customer support. Through Ghuronti.com you can
                book your flights, hotels, and holiday packages in just a few
                clicks at low cost. It will save your time and money both. Over
                the years, we have partnered with many leading brands from the
                aviation &amp; hospitality industries, creating fruitful partner
                relations for business expansion opportunities. We also entered
                the ground transport space and commenced offering car and bus
                booking services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
