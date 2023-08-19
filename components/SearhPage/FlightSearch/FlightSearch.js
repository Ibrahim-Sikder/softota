import React from "react";
import style from "./FlightSearch.module.css";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  ChevronLeftRounded,
  FlightLand,
  ChevronRightRounded,
  AirplanemodeInactive,
  Airlines,
  KeyboardArrowDown,
  LocalOffer,
  AirplaneTicket,
  Diversity3,
  AccessAlarm,
} from "@mui/icons-material";
import { FaFighterJet } from "react-icons/fa";
import dynamic from "next/dynamic";


const FlightSearch = () => {
  const images = [
    {
      img: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className={style.flightSearchWrap}>
      <div className={style.searchDetailHead}>
        <div>
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold">
              COX S BAZAR - BANGKOK(BANGKOK-ALL)
            </h2>
            <small className="ml-2">(PREMIUM ECONOMY)</small>
          </div>
          <span className="sm:my-3">27th August 2023 - 28th August 2023</span>
          <span> | Adult: 2, | Child: 2, | Infant: 2</span>
        </div>
        <button className="bg-[#4AB449] md:mt-[16px] text-white px-8 rounded-sm h-10 border-radius text-sm">
          EDIT SEARCH{" "}
        </button>
      </div>
      <div className={style.hotelSearchBoxWrap}>
        <div className={style.hotelSearchLeftSide}>
          <div className={style.availableHotel}>
            <div>
              <h5 className="">34 Available Flight </h5>
            </div>
            <small>*Price includes VAT & Tax</small>
          </div>

          <div className={style.flightButton}>
            <Button variant="outlined">
              <ChevronLeftRounded className={style.leftArrow} />{" "}
            </Button>
            <div className={style.perFlightPerson}>
              <h2>USA </h2>
              <small className="font-sm">2 Flight</small>
            </div>
            <div className={style.perFlightPerson}>
              <h2>MU </h2>
              <small className="font-sm">2 Flight</small>
            </div>
            <div className={style.perFlightPerson}>
              <h2>Am </h2>
              <small className="font-sm">2 Flight</small>
            </div>
            <div className={style.perFlightPerson}>
              <h2>Am </h2>
              <small className="font-sm">2 Flight</small>
            </div>
            <div className={style.perFlightPerson}>
              <h2>QS</h2>
              <small className="font-sm">2 Flight</small>
            </div>
            <div className={style.perFlightPerson}>
              <h2>Am </h2>
              <small className="font-sm">2 Flight</small>
            </div>
            <div className={style.perFlightPerson}>
              <h2>IH </h2>
              <small className="font-sm">2 Flight</small>
            </div>
            <div className={style.perFlightPerson}>
              <h2>HI </h2>
              <small className="font-sm">2 Flight</small>
            </div>
            <div className={style.perFlightPerson}>
              <h2>VQ </h2>
              <small className="font-sm">2 Flight</small>
            </div>
            <Button variant="outlined">
              <ChevronRightRounded className={style.leftArrow} />{" "}
            </Button>
          </div>
          <div className={style.flightPrice}>
            <div className={style.flight}>
              <FaFighterJet className="mr-2" /> cheapest Flight
            </div>
            <div className={style.flight}>
              <AirplanemodeInactive className="mr-2" /> Fastest Flight
            </div>
            <div className={style.flight}>
              <Airlines className="mr-2" /> Earliest Flight
            </div>
          </div>
          <div className={style.flightSearch}>
            <div className={style.detailBoxWrap}>
              <div className={style.flightSearchLeftSide}>
                <div className={style.deal}>
                  <LocalOffer className={style.dealIcon} /> Best Deal
                </div>
                <span>Partially Refundable</span>
                <h4 className="text-2xl font-bold text-[#26ADE2]">
                  BDT 39,400
                </h4>
                <del className="text-[#26ADE2]">BDT 33,500</del> <br />
                <Link href='/search/flight/book'><button className={style.flightBookBtn}>Book Now</button></Link> <br />
                <span className="text-[#26ADE2] mt-16 block">
                  See more <KeyboardArrowDown />
                </span>
              </div>
              <div className={style.searchBoxWrap}>
                <div className={style.flightDurationWrap}>
                  <div className={style.flightDuration}>
                    <div>
                      <AirplaneTicket className="text-[#26ADE2] mr-2" />
                    </div>
                    <div className={style.duration}>
                      <h2 className="text-xl">
                        {" "}
                        DAC - <strong>07:30</strong>
                      </h2>
                      <p>Hazrat Shahjalal Internation Airport</p>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div className={style.duration2}>
                      <FlightLand className="text-[#26ADE2]" /> <br />
                      <p>Non stop </p>
                      <small>02h: 30m</small>
                    </div>
                    <div>
                      <h2 className="text-xl">
                        {" "}
                        RJH - <strong>08:25</strong>
                      </h2>
                      <small>Shah Mokhdum Airport</small>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div>
                      <AirplaneTicket className="text-[#26ADE2] mr-2" />
                    </div>
                    <div className={style.duration}>
                      <h2 className="text-xl">
                        {" "}
                        DAC - <strong>07:30</strong>
                      </h2>
                      <p>Hazrat Shahjalal Internation Airport</p>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div className={style.duration2}>
                      <FlightLand className="text-[#26ADE2]" /> <br />
                      <p>Non stop </p>
                      <small>02h: 30m</small>
                    </div>
                    <div>
                      <h2 className="text-xl">
                        {" "}
                        RJH - <strong>08:25</strong>
                      </h2>
                      <small>Shah Mokhdum Airport</small>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.flightSearch}>
            <div className={style.detailBoxWrap}>
              <div className={style.flightSearchLeftSide}>
                <div className={style.deal}>
                  <LocalOffer className={style.dealIcon} /> Best Deal
                </div>
                <span>Partially Refundable</span>
                <h4 className="text-2xl font-bold text-[#26ADE2]">
                  BDT 39,400
                </h4>
                <del className="text-[#26ADE2]">BDT 33,500</del> <br />
                <Link href='/search/flight/book'><button className={style.flightBookBtn}>Book Now</button></Link> <br />
                <span className="text-[#26ADE2] mt-16 block">
                  See more <KeyboardArrowDown />
                </span>
              </div>
              <div className={style.searchBoxWrap}>
                <div className={style.flightDurationWrap}>
                  <div className={style.flightDuration}>
                    <div>
                      <AirplaneTicket className="text-[#26ADE2] mr-2" />
                    </div>
                    <div className={style.duration}>
                      <h2 className="text-xl">
                        {" "}
                        DAC - <strong>07:30</strong>
                      </h2>
                      <p>Hazrat Shahjalal Internation Airport</p>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div className={style.duration2}>
                      <FlightLand className="text-[#26ADE2]" /> <br />
                      <p>Non stop </p>
                      <small>02h: 30m</small>
                    </div>
                    <div>
                      <h2 className="text-xl">
                        {" "}
                        RJH - <strong>08:25</strong>
                      </h2>
                      <small>Shah Mokhdum Airport</small>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div>
                      <AirplaneTicket className="text-[#26ADE2] mr-2" />
                    </div>
                    <div className={style.duration}>
                      <h2 className="text-xl">
                        {" "}
                        DAC - <strong>07:30</strong>
                      </h2>
                      <p>Hazrat Shahjalal Internation Airport</p>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div className={style.duration2}>
                      <FlightLand className="text-[#26ADE2]" /> <br />
                      <p>Non stop </p>
                      <small>02h: 30m</small>
                    </div>
                    <div>
                      <h2 className="text-xl">
                        {" "}
                        RJH - <strong>08:25</strong>
                      </h2>
                      <small>Shah Mokhdum Airport</small>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.flightSearch}>
            <div className={style.detailBoxWrap}>
              <div className={style.flightSearchLeftSide}>
                <div className={style.deal}>
                  <LocalOffer className={style.dealIcon} /> Best Deal
                </div>
                <span>Partially Refundable</span>
                <h4 className="text-2xl font-bold text-[#26ADE2]">
                  BDT 39,400
                </h4>
                <del className="text-[#26ADE2]">BDT 33,500</del> <br />
                <Link href='/search/flight/book'><button className={style.flightBookBtn}>Book Now</button></Link> <br />
                <span className="text-[#26ADE2] mt-16 block">
                  See more <KeyboardArrowDown />
                </span>
              </div>
              <div className={style.searchBoxWrap}>
                <div className={style.flightDurationWrap}>
                  <div className={style.flightDuration}>
                    <div>
                      <AirplaneTicket className="text-[#26ADE2] mr-2" />
                    </div>
                    <div className={style.duration}>
                      <h2 className="text-xl">
                        {" "}
                        DAC - <strong>07:30</strong>
                      </h2>
                      <p>Hazrat Shahjalal Internation Airport</p>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div className={style.duration2}>
                      <FlightLand className="text-[#26ADE2]" /> <br />
                      <p>Non stop </p>
                      <small>02h: 30m</small>
                    </div>
                    <div>
                      <h2 className="text-xl">
                        {" "}
                        RJH - <strong>08:25</strong>
                      </h2>
                      <small>Shah Mokhdum Airport</small>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div>
                      <AirplaneTicket className="text-[#26ADE2] mr-2" />
                    </div>
                    <div className={style.duration}>
                      <h2 className="text-xl">
                        {" "}
                        DAC - <strong>07:30</strong>
                      </h2>
                      <p>Hazrat Shahjalal Internation Airport</p>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div className={style.duration2}>
                      <FlightLand className="text-[#26ADE2]" /> <br />
                      <p>Non stop </p>
                      <small>02h: 30m</small>
                    </div>
                    <div>
                      <h2 className="text-xl">
                        {" "}
                        RJH - <strong>08:25</strong>
                      </h2>
                      <small>Shah Mokhdum Airport</small>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.flightSearch}>
            <div className={style.detailBoxWrap}>
              <div className={style.flightSearchLeftSide}>
                <div className={style.deal}>
                  <LocalOffer className={style.dealIcon} /> Best Deal
                </div>
                <span>Partially Refundable</span>
                <h4 className="text-2xl font-bold text-[#26ADE2]">
                  BDT 39,400
                </h4>
                <del className="text-[#26ADE2]">BDT 33,500</del> <br />
                <Link href='/search/flight/book'><button className={style.flightBookBtn}>Book Now</button></Link> <br />
                <span className="text-[#26ADE2] mt-16 block">
                  See more <KeyboardArrowDown />
                </span>
              </div>
              <div className={style.searchBoxWrap}>
                <div className={style.flightDurationWrap}>
                  <div className={style.flightDuration}>
                    <div>
                      <AirplaneTicket className="text-[#26ADE2] mr-2" />
                    </div>
                    <div className={style.duration}>
                      <h2 className="text-xl">
                        {" "}
                        DAC - <strong>07:30</strong>
                      </h2>
                      <p>Hazrat Shahjalal Internation Airport</p>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div className={style.duration2}>
                      <FlightLand className="text-[#26ADE2]" /> <br />
                      <p>Non stop </p>
                      <small>02h: 30m</small>
                    </div>
                    <div>
                      <h2 className="text-xl">
                        {" "}
                        RJH - <strong>08:25</strong>
                      </h2>
                      <small>Shah Mokhdum Airport</small>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div>
                      <AirplaneTicket className="text-[#26ADE2] mr-2" />
                    </div>
                    <div className={style.duration}>
                      <h2 className="text-xl">
                        {" "}
                        DAC - <strong>07:30</strong>
                      </h2>
                      <p>Hazrat Shahjalal Internation Airport</p>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                  <div className={style.flightDuration}>
                    <div className={style.duration2}>
                      <FlightLand className="text-[#26ADE2]" /> <br />
                      <p>Non stop </p>
                      <small>02h: 30m</small>
                    </div>
                    <div>
                      <h2 className="text-xl">
                        {" "}
                        RJH - <strong>08:25</strong>
                      </h2>
                      <small>Shah Mokhdum Airport</small>
                      <small>29Th Jul 2023</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.flightRightSide}>
          <div className={style.flightDesc}>
            <div className="mb-5">
              <TextField
                id="standard-basic"
                label="Search Flight"
                variant="standard"
              />
            </div>

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <div className={style.bookDuration}>
                    <div>
                      <p>Book Now before it gets sold out.</p>
                      <div className={style.bookDurationBtn}>
                        <div>
                          <button size="small">10</button> <br />
                          <small>min</small>
                        </div>
                        <div>
                          <button size="small">35</button> <br />
                          <small>sec</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Diversity3 />{" "}
                  <small>8 people are looking at this flight.</small>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <div className="flex justify-between mb-3">
                    <div>
                      <div>Minimum price </div>
                      <strong>12500</strong>
                    </div>
                    <div>
                      <div>Maximum price </div>
                      <strong>45500</strong>
                    </div>
                  </div>
                  <input className="w-full" type="range" />
                </Typography>
              </CardContent>
            </Card>
            <div className="mb-5">
              <TextField
                id="standard-basic"
                label="Shedule"
                variant="standard"
              />
            </div>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <p>Depart Time </p>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <p>Arrival Time </p>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                  <button className={style.sheduleBtn}>
                    <AccessAlarm className={style.sheduleBtnIcon} />
                    00:00 - 05:59{" "}
                  </button>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Airlines </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Biman Bangladesh Airlines (2) </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>US-Bangla Airlines (4) </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>NOVOAIR (9) </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Weights  </strong> <br />
                      <div>
                        <Checkbox />
                        <span>20KG </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Refundable   </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Non Refundable  </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Partially Refundable  </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Rules Wise   </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(FlightSearch), { ssr: false });
