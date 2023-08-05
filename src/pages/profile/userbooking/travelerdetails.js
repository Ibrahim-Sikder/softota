import React from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import style from '../userbooking/flightbooking.module.css'
import Image from "next/image";
import flight from "../../../../public/flight.png";
import hotel from "../../../../public/hotel.png";
import visa from "../../../../public/vissa.png";
import tour from "../../../../public/tour.png";
import Link from "next/link";
import visaa from "../../../../public/assets/visa.jpeg";
import { ReportProblem } from "@mui/icons-material";
import FlightBookingLeftSide from "../../../../components/Booking/FlightBooking/FlightBookingLeftSide";
import { ArrowForwardIos, Home } from "@mui/icons-material";
import Details from "../../../../components/Booking/FlightDetails/Details/Details";
import TravelerDetails from "../../../../components/Booking/TravelerDetails/TravelerDetails";
const travelerdetails = () => {
  return (
    <section>
      <Nav />
      <div className={style.flightBookingTo}>
        <div className={style.fTopBar}>
        <Link href='/'>
          <span>
            <Home className={style.topIcon} />
          </span>
          <span>Home</span>
          </Link>
          <Link href='/profile'>
          <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>Profile</span>
          </Link>
          <Link href='/profile/booking'>
          <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>Booking</span>
          </Link>
         <Link href='/profile/userbooking/flightbooking'>
         <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>Flight</span>
         </Link>
          
          <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>
            <span>STFL16900068481176</span>
          </span>
        </div>
      </div>
      <section className={style.accounWra}>
        <div className={style.profileWrap}>
          <div className={style.userProfileLeftSide}>
            <FlightBookingLeftSide />
          </div>
          <div className={style.userProfileRightSide}>
           <TravelerDetails></TravelerDetails>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default travelerdetails;
