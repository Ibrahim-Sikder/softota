import React from "react";
import style from "./FlightBookLeftSide.module.css";
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
  FaHornbill,
  FaReact,
  FaBiking,
  FaBlind,
  FaPhoneVolume,
} from "react-icons/fa";
import { ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import milvik from "../../../../public/assets/hotel11.jpg";
import Link from "next/link";
const FlightBookLeftSide = () => {
  return (
    <div>
      <div className="flex justify-between my-5 pr-2">
        <h3 className="text-[#4AB449] text-xl">Review Your Booking</h3>
        <div className="flex justify-between">
          <h6>
            Flight Selection <ArrowForwardIos className={style.reviewIcon} />
          </h6>
          <h6>
            Booking <ArrowForwardIos className={style.reviewIcon} />
          </h6>
          <h6>Payment </h6>
        </div>
      </div>
      <Accordion className={style.flightBookDetail}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div className="flex items-center justify-center">
              <FaPlane className="text-[#4AB449] mr-3" />
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
                  <FaPlaneDeparture className="mr-3 text-[#4AB449]" />
                  <div>
                    <h6>11:15 DAC</h6>
                    <small className="font-xs">Hazrat Shahjal Airport </small>
                  </div>
                </div>
                <div className="flex items-center ">
                  <FaPlaneDeparture className="mr-3 text-[#4AB449]" />
                  <div>
                    <h6>11:15 DAC</h6>
                    <small className="font-xs">Hazrat Shahjal Airport </small>
                  </div>
                </div>
                <div></div>
              </div>
              <div>
                <div>
                  <div className="flex items-center mb-3">
                    <FaPlaneSlash className="mr-3 text-[#4AB449]" />
                    <div>
                      <h6>12:10 RJH</h6>
                      <small className="font-xs">Shah Mokhdum Airport </small>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <FaPlaneSlash className="mr-3 text-[#4AB449]" />
                    <div>
                      <h6>13:25 DAC </h6>
                      <small className="font-xs">Hazrat Shahjal Airport </small>
                    </div>
                  </div>
                  <div></div>
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
                  <div></div>
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.flightBookDetail}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h6 className="text-[#4AB449] font-sm">Flight Details </h6>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <div className="flex w-32 justify-between mb-2">
                <span>Baggage </span>
                <span className="mx-5">Policy </span>
                <span>Fare </span>
              </div>
              <hr className="w-full mb-3" />
              <div className={style.flightDetail}>
                <div>
                  <h6>Flight</h6>
                  <p>DAC - SPD</p>
                  <p>SPD - DAC</p>
                </div>
                <div>
                  <h6>Cabin</h6>
                  <p>7 Kg</p>
                  <p>8 Kg</p>
                </div>
                <div>
                  <h6>Check-in</h6>
                  <p>20 Kg</p>
                  <p>25 Kg</p>
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className={style.dealWrap}>
        <h6>Hot Deals </h6>
        <hr className="w-full " />
        <div className={style.hotdetailWrap}>
          <div className={style.hotDeal}>
            <div className="flex items-center">
              <FaPercent className="mr-3" />
              <h3 className="text-xl">EDMO0854</h3>
            </div>
            <small>13% discount for EBL Visa credit & debit cards.</small>
            <br />
            <strong>Offer Details </strong>
          </div>
          <div className={style.hotDeal}>
            <div className="flex items-center">
              <FaPercent className="mr-3" />
              <h3 className="text-xl">DOMFLY0823</h3>
            </div>
            <small>7% discount for BRAC, City AMEX, EBL,</small>
            <small>HSBC, LankaBangla, MTB, Prime Bank,</small>
            <small>StanChart, Trust Bank, UCB cards.</small>
            <br />
            <strong>Offer Details </strong>
          </div>
          <div className={style.hotDeal}>
            <div className="flex items-center">
              <FaPercent className="mr-3" />
              <h3 className="text-xl"> GOFLY0823</h3>
            </div>
            <small>7% discount on flight booking.</small>
            <br />
            <strong>Offer Details </strong>
          </div>
          <div className={style.hotDeal}>
            <div className="flex items-center">
              <FaPercent className="mr-3" />
              <h3 className="text-xl">EDMO0854</h3>
            </div>
            <small>7% discount for Nagad, Rocket, tap & upay payment.</small>
            <br />
            <strong>Offer Details </strong>
          </div>
          <div className={style.hotDeal}>
            <div className="flex items-center">
              <FaPercent className="mr-3" />
              <h3 className="text-xl">FLYPIC0823</h3>
            </div>
            <small>7% discount on flight booking for Pay in Cash.</small>
            <br />
            <strong>Offer Details </strong>
          </div>
          <div className={style.hotDeal}>
            <div className="flex items-center">
              <FaPercent className="mr-3" />
              <h3 className="text-xl">EDOM0823</h3>
            </div>
            <small>10% discount for EBL Visa credit & debit cards.</small>
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
      <div className="mt-8">
        <h2>Enter Traveller Details </h2>
        <div className="my">
          <Accordion className={style.flightBookDetail}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div className="flex items-center">
                  <h6 className="text-[#4AB449] font-sm">Passenger 1 </h6>{" "}
                  <span className={style.adultBtn}>Adult </span>{" "}
                  <small>Primary Contact </small>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <select className={style.travelerSelect}>
                  <option value="">Select Traveler </option>
                  <option value="">New Traveler </option>
                  <option value="">(Me)</option>
                </select>
                <div className={style.personal}>
                  <h3 className="text-xl font-bold">Personal Details</h3>
                  <span>
                    {" "}
                    As mentioned on your passport or government approved IDs
                  </span>
                </div>
                <div className="mt-3">
                  <h6>Select Title</h6>
                  <div className={style.titleBtnWrap}>
                    <button>MR.</button>
                    <button>MS.</button>
                    <button>MRS.</button>
                  </div>
                  <div className={style.inputFieldWrap}>
                    <div>
                      <div>
                        <label>First Name</label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label>Last Name </label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                    </div>
                  </div>
                  <div className={style.inputFieldWrap}>
                    <div>
                      <div>
                        <label>Nationality</label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label>Frequent Flyer Number (Optional)</label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                    </div>
                  </div>
                  <div mt-5>
                    <hr className="w-full " />
                  </div>
                  <div className={style.contactDetailWrap}>
                    <h6>Contact Detail </h6>
                    <p>Receive booking confirmation & updates</p>
                    <div className={style.contactDetail}>
                      <div>
                        <label>Email</label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                      <div>
                        <label>Phone Number</label> <br />
                        <input type="number" className={style.contactField} />
                      </div>
                    </div>
                    <div className={style.checkbox}>
                      <input type="checkbox" />
                      <small>Save this to my traveler list.</small>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="my-8">
          <Accordion className={style.flightBookDetail}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div className="flex items-center">
                  <h6 className="text-[#4AB449] font-sm">Passenger 2</h6>{" "}
                  <span className={style.adultBtn}>Adult</span>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <select className={style.travelerSelect}>
                  <option value="">Select Traveler </option>
                  <option value="">New Traveler </option>
                  <option value="">(Me)</option>
                </select>
                <div className={style.personal}>
                  <h3 className="text-xl font-bold">Personal Details</h3>
                  <span>
                    {" "}
                    As mentioned on your passport or government approved IDs
                  </span>
                </div>
                <div className="mt-3">
                  <h6>Select Title</h6>
                  <div className={style.titleBtnWrap}>
                    <button>MR.</button>
                    <button>MS.</button>
                    <button>MRS.</button>
                  </div>
                  <div className={style.inputFieldWrap}>
                    <div>
                      <div>
                        <label>First Name</label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label>Last Name </label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                    </div>
                  </div>
                  <div className={style.inputFieldWrap}>
                    <div>
                      <div>
                        <label>Nationality</label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label>Frequent Flyer Number (Optional)</label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                    </div>
                  </div>
                  <div mt-5>
                    <hr className="w-full " />
                  </div>
                  <div className={style.contactDetailWrap}>
                    <h6>Contact Detail </h6>
                    <p>Receive booking confirmation & updates</p>
                    <div className={style.contactDetail}>
                      <div>
                        <label>Email</label> <br />
                        <input type="text" className={style.contactField} />
                      </div>
                      <div>
                        <label>Phone Number</label> <br />
                        <input type="number" className={style.contactField} />
                      </div>
                    </div>
                    <div className={style.checkbox}>
                      <input type="checkbox" />
                      <small>Save this to my traveler list.</small>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="addons">
        <h4>Addons </h4>
        <div className="my-8">
          <Accordion className={style.flightBookDetail}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={style.travelInsurance}>
                <h6 className="text-[#4AB449] font-sm">Travel Insurance </h6>
                <Image alt="milvik" width={50} height={50} src={milvik}></Image>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className={style.insurance}>
                  <p>
                    Protect your journey across the country at only BDT
                    10/person.
                  </p>
                  <div className={style.insurancePackage}>
                    <div className="flex items-center">
                      <div className={style.icon}>
                        <FaBiking />
                      </div>
                      <div>
                        <h2 className=" ">BDT 200,000</h2>
                        <small>Accidental Coverage</small>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className={style.icon}>
                        <FaBlind />
                      </div>
                      <div>
                        <h2 className=" ">Up to BDT 30,000</h2>
                        <small>Hospitalization Coverage</small>
                        <small>(Including day care treatment)</small>
                      </div>
                    </div>
                  </div>
                  <div className={style.insurancePackage}>
                    <div className="flex items-center">
                      <div className={style.icon}>
                        <FaReact />
                      </div>
                      <div>
                        <h2 className=" ">BDT 2,000</h2>
                        <small>Covid 19</small>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className={style.icon}>
                        <FaPhoneVolume />
                      </div>
                      <div>
                        <h2 className=" ">24/7 Tele-doctor Consultation</h2>
                        <small>
                          24-Hours Before and 24-Hours After Travel Date
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="w-full flex  justify-between">
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <small>Yes, I want to secure my journey</small>
                    </div>
                    <div>
                      <strong>BDT 4000</strong> <br />
                      <span>total for 2 traveler</span>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <input type="checkbox" />
                    <small>No, I want to take the risk</small>
                  </div>
                  <div className="mb-5 mt-14">
                    <small>
                      By adding travel insurance policy, you are agreeing to the
                      Terms & Conditions .
                    </small>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Link href="/payment">
        <button className={style.continueBtn}>Continue </button>
      </Link>
    </div>
  );
};

export default FlightBookLeftSide;
