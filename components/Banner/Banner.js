import React from "react";
import style from "./Banner.module.css";
import Image from "next/image";
import banner from '../../public/banner.png'
import mokka from '../../public/mokka.png'
import flight from '../../public/flight.png'
import hotel from '../../public/hotel.png'
import vissa from '../../public/vissa.png'
import tours from '../../public/tours.png'
import buss from '../../public/buss.png'
import NavBar from "../NavBar/NavBar";

const Banner = () => {
  return (
    <div className={style.banner}>
      {/* <img className="bannerImg" src={banner} alt="" /> */}
      <Image
        src={banner}
        alt="Picture of the author"        
        />
      <h2>Welcome to Ghuronti! Find Flights, Hotels & Tour Packages</h2>
      <NavBar></NavBar>
      <div className={style.inputBox}>
        <span>One way</span>
        <span>One way</span>
        <span>One way</span>
      </div>
      <div className="grid style.inputBox2 grid-cols-1 md:grid-cols-2">
        <div className={style.airPort}>
          <h6>Flying From</h6>
          <p>City or Airport </p>
        </div>
        <div className={style.airPort2}>
          <h6>Flying From</h6>
          <p>City or Airport </p>
        </div>
      </div>
      <div>
        <div className={style.depart}>
          <p>Depart To</p>
          <span>18 March 2023</span>
        </div>
        <div className={style.depart2}>
          <p>Return To</p>
          <span>25 March 2023</span>
        </div>
      </div>
      <div className={style.passenger}>
        <span>Passengers & Cabin Class</span>
        <span>Copy
Economy Class</span> <br />
        <span>1 Person </span>
      </div>
      <button className={style.flightBtn}>Search Flight</button>
    </div>
  );
};

export default Banner;
