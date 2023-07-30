import React from 'react';
import Nav from '../../../../components/NavBarr/Nav';
import Footer from '../../../../components/Footer/Footer';
import ProfileLeftSide from '../profileLeftSide/ProfileLeftSide';
import ProfileRightSide from '../ProfileRightSide/ProfileRightSide';
import style from './flightbooking.module.css'
import Image from 'next/image';
import flight from '../../../../public/flight.png'
import hotel from '../../../../public/hotel.png'
import visa from '../../../../public/vissa.png'
import tour from '../../../../public/tour.png'
import Link from 'next/link';
import visaa from '../../../../public/assets/visa.jpeg'
import { ReportProblem } from "@mui/icons-material";
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
                        <Link href='/profile/userbooking/flightbooking'>
                        <div className={style.bookingHistory}>
                         <Image
                         src={flight}
                         alt="Picture of the author"
                         width={30}
                         height={30}
                         className={style.logoIcon}
                         />
                         <button className='ml-1'>Flight </button>
                         </div>
                        </Link>
                        <Link href='/profile/userbooking/hotelbooking'>
                        <div className={style.bookingHistory}>
                         <Image
                         src={hotel}
                         alt="Picture of the author"
                         width={30}
                         height={30}
                         className={style.logoIcon}
                         />
                         <button className='ml-1'>Hotel </button>
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
                         <button className='ml-1'>Visa </button>
                         </div>
                         <div className={style.bookingHistory}>
                         <Image
                         src={tour}
                         alt="Picture of the author"
                         width={30}
                         height={30}
                         className={style.logoIcon}
                         />
                         <button className='ml-1'>Tours </button>
                         </div>
                    </div>

                    <div className={style.userFlightBookingInfoWrap}>
                      <div className={style.bookingInfoWrap}>
                        <div className={style.bookingInfo}>
                        <div className={style.leftSideBook}>
                        <div>
                          <h6>DAC-LHR (One Way)</h6>
                          <p>Booking ID</p>
                          <p>FB-DM2307300311</p>
                        </div>
                        <div>
                          <p>Airline Pnr</p>
                          <p>5P67EL</p>
                        </div>
                        <div>
                          <p>Pax Details</p>
                          <p>3(Ibrahim Sikder)</p>
                        </div>
                        </div>
                        <div className={style.rightSide}>
                         <div>
                         <p>Pending</p>
                          <Image
                          src={visaa}
                          alt='visa'
                          width={50}
                          height={50}
                          
                          />
                         </div>
                        </div>
                        </div>
                      </div>
                      <div className={style.flightInfo}>
                        <div>
                        <p>Date</p>
                        <small>Sat, 05 Aug, 2023</small>
                        </div>
                        <div>
                        <p>Time</p>
                        <small>10:30 am</small>
                        </div>
                        <div>
                          <p>Flight Info</p>
                          <p>DepartsDAC</p>
                          <p>ArrivalLHR</p>
                        </div>
                        <div>
                          <p>Flight Number</p>
                          <p>UK182 (DAC-DEL)</p>
                          <p>UK17 (DEL-LHR)</p>
                          <small>stop: 1</small>
                        </div>
                        <div>
                          <p>Baggage Allowance</p>
                          <p>7 Kilograms</p>
                          <p>56 Kilograms</p>
                          <p>34 Kilograms</p>
                        </div>
                      </div>
                      <div className={style.payment}>
                        <div className='flex items-center'>
                        <ReportProblem/>
                        <p>Your booking expires at 11:14 AM</p>
                        </div>
                        <button>Complete Payment</button>
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