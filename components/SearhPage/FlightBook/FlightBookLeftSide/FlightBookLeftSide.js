import React from "react";
import style from "./FlightBookLeftSide.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaPlane,FaPlaneDeparture,FaPlaneSlash,FaPercent } from "react-icons/fa";
import Image from "next/image";
import bkash from '../../../../public/assets/bkash.png'
import brack from '../../../../public/assets/brack.png'
import upai from '../../../../public/assets/upai.png'
import ebank from '../../../../public/assets/ebank.png'
import estern from '../../../../public/assets/estern.png'
import hscb from '../../../../public/assets/hscb.png'
import tap from '../../../../public/assets/tap.jpeg'
import standared from '../../../../public/assets/standared.png'
import master from '../../../../public/assets/mastercard.png'
import wallet from '../../../../public/assets/wallet.png'
import visa from '../../../../public/assets/vissa.png'
import bangla from '../../../../public/assets/bangla.png'
import citybank from '../../../../public/assets/bangla.png'
import diner from '../../../../public/assets/citybank.png'
import mtb from '../../../../public/assets/mtb.png'

const FlightBookLeftSide = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div className="flex items-center justify-center">
              <FaPlane className="text-[#4AB449] mr-3"/>
              <div>
                <h6>DAC - RJH </h6>
                <small>30 Jul - 05 Aug 23,4 Traveller(s) </small>
              </div>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="flex justify-between"> 
              <div>
                <div className="flex items-center mb-3">
                  <FaPlaneDeparture className="mr-3 text-[#4AB449]"/>
                  <div>
                    <h6>11:15 DAC</h6>
                    <small className="font-xs">Hazrat Shahjal Airport </small>
                  </div>
                </div>
                <div className="flex items-center ">
                  <FaPlaneDeparture className="mr-3 text-[#4AB449]"/>
                  <div>
                    <h6>11:15 DAC</h6>
                    <small className="font-xs">Hazrat Shahjal Airport </small>
                  </div>
                </div>
                <div>

                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center mb-3">
                    <FaPlaneSlash className="mr-3 text-[#4AB449]"/>
                    <div>
                      <h6>12:10 RJH</h6>
                      <small className="font-xs">Shah Mokhdum Airport </small>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <FaPlaneSlash className="mr-3 text-[#4AB449]"/>
                    <div>
                      <h6>13:25 DAC     </h6>
                      <small className="font-xs">Hazrat Shahjal Airport </small>
                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
              <div>
              <div>
                <div className="mb-3">
                  <div>
                    <h6>None Stop </h6>
                    <small className="font-xs">01h 45m</small>
                  </div>
                </div>
                <div>
                <div>
                    <h6>None Stop </h6>
                    <small className="font-xs">01h 45m</small>
                  </div>
                </div>
                <div>

                </div>
              </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div>
        <h6 className="my-3">Please choose a Payment Method</h6>
        <div className={style.paymentMethod}>
          <div className="flex items-center">
            <FaPercent className="mr-3 text-[#4AB449]"/>
            <div>
              <h6>Select Discount Option </h6>
              <small>Choose your discount option </small>
            </div>
          </div>
        </div>
        <div className={style.option}>
          <button>I want to Earn Trip Coin</button>
          <button>I want to use Coupon Code </button>
          <button>I want to Redeem TripCoin</button>
        </div>
        <div>
          <h6>Select your preferred method to Pay</h6>
          <small>Convenience Fee may vary depending on the payment method</small>
          <div className={style.methodWrap}>
            <div className={style.pMethod}>
              <Image
              src={upai}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
             <div className={style.pMethod}>
              <Image
              src={bangla}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={citybank}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={ebank}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={estern}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={standared}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={diner}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={tap}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
             <div className={style.pMethod}>
              <Image
              src={bkash}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={visa}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={wallet}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={master}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={mtb}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={brack}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={hscb}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
            <div className={style.pMethod}>
              <Image
              src={bkash}
              className={style.pMethodImg}
              alt='payment'
              ></Image>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default FlightBookLeftSide;
