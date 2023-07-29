import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  FaPlane,
  FaPlaneDeparture,
  FaPlaneSlash,
  FaPercent,
  FaReact,
  FaBiking,
  FaBlind,
  FaPhoneVolume,
  FaCanadianMapleLeaf
} from "react-icons/fa";
import { TrendingFlat } from "@mui/icons-material";
import Image from "next/image";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import milvik from '../../../../public/assets/milvik.png';
import Link from "next/link";
import style from './Book.module.css'
import book from '../../../../public/assets/hotell.jpeg';
const HotelBookLeft = () => {
     return (
          <div>
            <div className="flex justify-between my-5 pr-2">
              <h3 className="text-[#4AB449] text-xl">Review Your Booking</h3>
            </div>
           <div className={style.hotelReview}>
           <div className="w-full flex justify-between">
              <div>
              <h6>Hotel The Cox Today </h6>
              <small>3 Guests | 1 Room | 5 Nights</small>
              </div>
              <div>
                <Image
                src={book}
                alt='hotel'
                width={100}
                height={100}
                />

              </div>
            </div>
            <div className={style.breakfast}>
              <h6>Executive Suite Hill view</h6>
             <div className="flex ">
             <FaCanadianMapleLeaf className='mr-3'/>
              <p>  Breakfast Included</p>
             </div>
              <p>Bed and Breakfast - Refundable</p>
              <p>Refundable</p>
            </div>
            <hr className="w-full my-5"/>
            <div className={style.stayInfo}>
              <div>
                <p>Check In 14:00</p>
                <strong>15 Aug</strong> <br />
                <small>Sunday</small>
              </div>
              <div>
                <TrendingFlat/>
              </div>
              <div>
                <p>Check Out 12:00</p>
                <strong>30 Aug</strong> <br />
                <small>Saturday</small>
              </div>
            </div>
           </div>




         
            <div className={style.dealWrap}>
              <h6>Hot Deals </h6>
              <hr className="w-full " />
              <div className={style.hotdetailWrap}>
                <div className={style.hotDeal}>
                  <div className="flex items-center">
                    <FaPercent className="mr-3" />
                    <h3 className="text-xl">DOMSTAY0823</h3>
                  </div>
                  <small>Extra 4% discount for any card payment.</small>
                  <br />
                  <strong>Offer Details </strong>
                </div>
                <div className={style.hotDeal}>
                  <div className="flex items-center">
                    <FaPercent className="mr-3" />
                    <h3 className="text-xl"> STAYB0608</h3>
                  </div>
                  <small>Extra 5% discount for bKash payment.</small>
                  <strong>Offer Details </strong>
                </div>
                <div className={style.hotDeal}>
                  <div className="flex items-center">
                    <FaPercent className="mr-3" />
                    <h3 className="text-xl"> GOSTAY0823</h3>
                  </div>
                  <small>Extra 4% discount for BRAC Bank, City AMEX, EBL & StanChart cards.</small>
                  <br />
                  <strong>Offer Details </strong>
                </div>
                <div className={style.hotDeal}>
                  <div className="flex items-center">
                    <FaPercent className="mr-3" />
                    <h3 className="text-xl">STAYDOM0823</h3>
                  </div>
                  <small>Extra 4% discount for Nagad, Rocket, tap & upay payment.</small>
                  <br />
                  <strong>Offer Details </strong>
                </div>
              </div>
      
              <div className={style.couponCodeWrap}>
                <h6 className="text-xl font-bold">Coupon Code</h6>
                <div className={style.couponCode}>
                  <TextField
                    className={style.couponField}
                    id="outlined-basic"
                    placeholder="Have a coupon code ? "
                  />
                  <button className={style.apply}>Apply</button>
                </div>
              </div>
            </div>

         
         
             <div>
             <div className={style.personal}>
              <h3 className="text-xl font-bold">Guest Details </h3>
              </div>
            <div className={style.guestInfoWrap}>
              <span>Executive Suite Hill view</span> <br />
              <div className={style.guestInfo}>
                <label htmlFor="">Guest 1 (Adult)</label>
               <div className={style.guestField}>
               <input placeholder="Given Name" type="text" />
               <input placeholder="Sure Name" type="text" />
               </div>
              </div>
              <div className={style.guestInfo}>
                <label htmlFor="">Guest 2 (Adult)</label>
               <div className={style.guestField}>
               <input placeholder="Given Name" type="text" />
               <input placeholder="Sure Name" type="text" />
               </div>
              </div>
              <div className={style.guestInfo}>
                <label htmlFor="">Guest 3 (Adult)</label>
               <div className={style.guestField}>
               <input placeholder="Given Name" type="text" />
               <input placeholder="Sure Name" type="text" />
               </div>
              </div>
            </div>

             </div>
            <div className={style.contactWrap}>
              <h1 className="text-[#4AB449]">Primary Contact </h1>
              <small>Please enter the contact details of the person who would like to receive <br />  the confirmation and be contacted if required.</small>
              <div className={style.primaryInfo}>
              <div>
                <label> Primary Contact</label> <br />
                <select>
                  <option value="">Select primary contact </option>
                  <option value="">New contact </option>
                </select>
              </div>
              <div>
                <label> Mobile Number </label> <br />
                <input type="number" />
              </div>
              </div>
            </div>

       
         <Link href='/payment'><button className={style.continueBtn}>Continue </button></Link>
          </div>
        );
};

export default HotelBookLeft;