import React from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import style from "./hotelbooking.module.css";
import Image from "next/image";
import Link from "next/link";
import ProfileLeftSide from "../profileLeftSide/ProfileLeftSide";
import flight from "../../../../public/flight.png";
import hotel from "../../../../public/hotel.png";
import visa from "../../../../public/vissa.png";
import tour from "../../../../public/tour.png";
import { FaMapMarkerAlt } from "react-icons/fa";
const hotelbooking = () => {
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

            <div className={style.userHotelBookingInfoWrap}>
              <div className={style.userHotelBookingInfo}>
                <div className={style.left}>
                  <div className=" pl-3 pt-3">
                    <h6>BOOKING ID: HB-DP2307290102</h6>
                    <hr className="w-full my-5" />
                  </div>
                  <div className={style.payHistory}>
                    <div>
                      <h6>Hotel The Cox Today</h6>
                      <div className="flex items-center">
                        <FaMapMarkerAlt />
                        <small>Kolatoli Cox s Bazar</small>
                      </div>
                    </div>
                    <div>
                      <small>Total</small> <br />
                      <strong>BDT 45,900</strong>
                    </div>
                    <div>
                      <small>Paid</small> <br />
                      <strong>BDT 00</strong>
                    </div>
                  </div>
                </div>
                <div className={style.pending}>
                  <p>Pending </p>
                </div>
              </div>
              <div className={style.userContactInfo}>
                <div>
                  <small>Contact Name</small> <br />
                  <span>MD Rofique</span>
                </div>
                <div>
                  <small>Guest </small> <br />
                  <span>3 Adults</span>
                </div>
                <div>
                  <small>Check In </small> <br />
                  <span>Sat, Aug 05, 2023</span>
                </div>
                <div>
                  <small>Check Out </small> <br />
                  <span>Sat, Aug 12, 2023</span>
                </div>
                <div>
                  <small>5 Nights x 1 Room</small> <br />
                  <span>Family </span>
                </div>
              </div>
            </div>
            <div className={style.userHotelBookingInfoWrap}>
              <div className={style.userHotelBookingInfo}>
                <div className={style.left}>
                  <div className=" pl-3 pt-3">
                    <h6>BOOKING ID: HB-DP2307290102</h6>
                    <hr className="w-full my-5" />
                  </div>
                  <div className={style.payHistory}>
                    <div>
                      <h6>Hotel The Cox Today</h6>
                      <div className="flex items-center">
                        <FaMapMarkerAlt />
                        <small>Kolatoli Cox s Bazar</small>
                      </div>
                    </div>
                    <div>
                      <small>Total</small> <br />
                      <strong>BDT 45,900</strong>
                    </div>
                    <div>
                      <small>Paid</small> <br />
                      <strong>BDT 00</strong>
                    </div>
                  </div>
                </div>
                <div className={style.pending}>
                  <p>Pending </p>
                </div>
              </div>
              <div className={style.userContactInfo}>
                <div>
                  <small>Contact Name</small> <br />
                  <span>MD Rofique</span>
                </div>
                <div>
                  <small>Guest </small> <br />
                  <span>3 Adults</span>
                </div>
                <div>
                  <small>Check In </small> <br />
                  <span>Sat, Aug 05, 2023</span>
                </div>
                <div>
                  <small>Check Out </small> <br />
                  <span>Sat, Aug 12, 2023</span>
                </div>
                <div>
                  <small>5 Nights x 1 Room</small> <br />
                  <span>Family </span>
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

export default hotelbooking;
