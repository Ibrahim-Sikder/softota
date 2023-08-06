import React from "react";
import style from "./Customer.module.css";
import quote2 from "../../public/quote2.png";
import Image from "next/image";
import Slider from "react-slick";
const Customer = () => {
  var settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
  };
  return (
    <div>
      <div className={style.customerHead}>
        <h2>Customer satisfaction is our top priority</h2>
        <p>
          Our clients praise us for our great results, personable service,
          expert knowledge. Here are what just a few of them had to say
        </p>
      </div>

      <Slider {...settings}>
        <div className={style.Customers}>
          <div className={style.customer}>
            <p>
              Your thoughtfulness and support of Ghuronti is very much
              appreciated. You are a very dear friend to the Chamber, and I want
              to assure you that your confidence in Ghuronti will be justified.
            </p>
            <Image
              src={quote2}
              alt="Picture of the author"
              width={100}
              height={30}
              className={style.quoteImg}
            />
          </div>
        </div>
        <div className={style.Customers}>
          <div className={style.customer}>
            <p>
              Your thoughtfulness and support of Ghuronti is very much
              appreciated. You are a very dear friend to the Chamber, and I want
              to assure you that your confidence in Ghuronti will be justified.
            </p>
            <Image
              src={quote2}
              alt="Picture of the author"
              width={100}
              height={30}
              className={style.quoteImg}
            />
          </div>
        </div>
        <div className={style.Customers}>
          <div className={style.customer}>
            <p>
              Your thoughtfulness and support of Ghuronti is very much
              appreciated. You are a very dear friend to the Chamber, and I want
              to assure you that your confidence in Ghuronti will be justified.
            </p>
            <Image
              src={quote2}
              alt="Picture of the author"
              width={100}
              height={30}
              className={style.quoteImg}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Customer;
