import React from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import style from "./flightbooking.module.css";
import Image from "next/image";
import flight from "../../../../public/flight.png";
import hotel from "../../../../public/hotel.png";
import visa from "../../../../public/vissa.png";
import tour from "../../../../public/tour.png";
import Link from "next/link";
import visaa from "../../../../public/assets/visa.jpeg";
import { ReportProblem } from "@mui/icons-material";
import FlightBookingLeftSide from "../../../../components/Booking/FlightBooking/FlightBookingLeftSide";
import { Groups, SwapHoriz,CalendarMonth,AttachMoney } from "@mui/icons-material";
import ProfileLeftSide from "../profileLeftSide/ProfileLeftSide";
const flightbooking = () => {
  return (
    <section>
      <Nav />
      <section className={style.accounWra}>
        <div className={style.profileWrap}>
          <div className={style.userProfileLeftSide}>
          <ProfileLeftSide></ProfileLeftSide>
          </div>
          <div className={style.userProfileRightSide}>
            <div className={style.bookingWrap}>
              <Link href="/profile/userbooking/flightbooking">
                <div className={style.bookingHistory}>
                  <Image
                    src={flight}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className={style.logoIcon}
                  />
                  <button className="ml-1">Flight </button>
                </div>
              </Link>
              <Link href="/profile/userbooking/hotelbooking">
                <div className={style.bookingHistory}>
                  <Image
                    src={hotel}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className={style.logoIcon}
                  />
                  <button className="ml-1">Hotel </button>
                </div>
              </Link>
              <div className={style.bookingHistory}>
                <Image
                  src={visa}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={style.logoIcon}
                />
                <button className="ml-1">Visa </button>
              </div>
              <div className={style.bookingHistory}>
                <Image
                  src={tour}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={style.logoIcon}
                />
                <button className="ml-1">Tours </button>
              </div>
            </div>

            <div className={style.flightBooking}>
              <div className="flex w-full justify-between mb-8">
                <strong>DAC <SwapHoriz className="mx-3"/> CXB </strong>
                <strong>BDT 12,445 </strong>
              </div>
              <div className="flex items-center justify-between mb-3">
              <div className="flex items-center  ">
                <Groups className="mr-3 "/>
                <span> 1 Travelers</span>
              </div>
              <div className="flex items-center w-[200px] text-left ">
                <span> Airline PNR: </span>
                <strong>MXRHIF</strong>
              </div>
              </div>
              <div className="flex items-center w-full justify-between">
              <div className="flex items-center">
                <CalendarMonth className="mr-3 "/>
                <span>21 Aug 23 - 24 Dev 23</span>
              </div>
              <div className="flex items-center  w-[200px] text-left">
                <span> Reservation PNR:</span>
                <strong>540K9C</strong>
              </div>
              </div>
              <div className={style.detailBtnGroup}>
                <Link href='/profile/userbooking/flightDetail'><button>Flight Details</button></Link>
                <Link href='profile/userbooking/travelerdetails'><button>Traveller</button></Link>
                <Link href='/profile/userbooking/fareDetail'><button>Pricing</button></Link>
                <Link href='/profile/userbooking/flightCancel'><button>Cancellation Policy</button></Link>
                <Link href='/profile/userbooking/baggage'><button>Baggages</button></Link>
              
              </div>
             <div className="flex justify-between mt-5">
             <div className={style.payments}>
                <span>Payment:</span>
                <strong> Unpaid - </strong>
                <span> Booking:</span>
                <strong>Canacelled:</strong>
              </div>
              <div className="flex items-center">
               <small className={style.dollars}> <AttachMoney className={style.dollarIcons}/></small>
                <strong>240</strong>
              </div>
             </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default flightbooking;
