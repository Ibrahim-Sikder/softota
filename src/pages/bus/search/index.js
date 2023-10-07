"use client";

import React, { useState } from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import style from "./searc.module.css";
import bus from "../../../../public/assets/bus.png";
import Image from "next/image";
import { EventSeat, CrisisAlert } from "@mui/icons-material";

const Search = () => {
  const busData = [
    {
      id: 1,
      name: "SHYAMOLI NR TRAVELS",
      price: 900.0,
      departureTime: "10.30AM",
      arrivalTime: "12.20PM",
      seats: 33,
    },
    {
      id: 1,
      name: "Saintmartin Hyundai (Robi Express)",
      price: 1500.0,
      departureTime: "10.30AM",
      arrivalTime: "12.20PM",
      seats: 20,
    },

    {
      id: 1,
      name: "Hanif Enterprise",
      price: 800.0,
      departureTime: "10.30AM",
      arrivalTime: "12.20PM",
      seats: 40,
    },

    {
      id: 1,
      name: "SHYAMOLI NR TRAVELS",
      price: 900.0,
      departureTime: "10.30AM",
      arrivalTime: "12.20PM",
      seats: 24,
    },

    {
      id: 1,
      name: "SHYAMOLI NR TRAVELS",
      price: 900.0,
      departureTime: "10.30AM",
      arrivalTime: "12.20PM",
      seats: 33,
    },
  ];

  return (
    <div>
      <Nav />
      <div className={style.busWrap}>
        <div className={style.busTopBar}>
          <div>
            <strong className="block">Departure </strong>
            <div className="flex items-center">
              <Image alt="bus" src={bus} width={50} height={50} />
              <div>
                <h6 className="text-xl text-[#0BB811] font-bold">
                  {" "}
                  Dhaka - Bandarban
                </h6>
                <small className="block">19 October, 2023</small>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-bold text-[#0BB811]">
              Total Operators Found: 30
            </h5>
          </div>

          <div>
            <h5 className="text-xl font-bold text-[#0BB811]">
              Total Seats Available: 275
            </h5>
          </div>
          <button className={style.modifyBtn}>Modify Search</button>
        </div>
        <div className={style.busCardWrap}>
          <div className={style.searchBusLeftSide}>
            <div className="mt-3">
              <strong>Operators </strong>
              <div className="mt-2">
                <ul>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Hanif Enterprise </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Soudia Coach Service </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Saintmartin Hyundai (Robi Express) </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <strong>Bus Type </strong>
              <div className="flex items-center my-2">
                <input type="checkbox" />
                <span>AC</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" />
                <span>Non AC</span>
              </div>
            </div>

            <div className="my-3">
              <strong>Boarding point </strong>
              <div className="mt-2">
                <ul>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Arambag Bus Point </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Chittagong Road B 20 Counter </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>College Gate B 7 Counter </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Fokirapoor B 4 Counter </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Gabtoli AC Counter </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Jnapath 1 Counter </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.searchBusRightSide}>
            <div>
              {busData.map((bus) => (
                <div key={bus.id} className={style.allBusCardWrap}>
                  <div className={style.busCard}>
                    <div>
                      <strong className="capitalize">{bus.name}</strong>
                      <small className="block">504-BAN Non AC</small>
                      <p>Starting Point: Uttara</p>
                      <p>End Point: Bandarban</p>
                    </div>
                    <div>
                      <h5 className=" capitalize">{bus.departureTime} </h5>
                      <strong>10:30AM</strong>
                    </div>
                    <div>
                      <h5 className=" capitalize">{bus.arrivalTime} </h5>
                      <strong>10:30AM</strong>
                    </div>
                    <div>
                      <h5 className=" capitalize">Seats Available</h5>
                      <strong>{bus.seats}</strong>
                    </div>
                    <div className="price">
                      <h5 className="text-3xl font-bold">৳{bus.price}</h5>
                      <button className={style.viewBtn}>View Details </button>
                    </div>
                  </div>

                  <div className={style.policy}>
                    <small>Cancellation Policy </small>
                    <small> Boarding point</small>
                    <small> Dropping point </small>
                    <small>Facilities</small>
                  </div>
                  <strong>Choose your seat(s)</strong>
                  <hr className="my-2" />
                  <div className={style.availableSeat}>
                    <div className={style.seatLeftSide}>
                      <small>
                        Hold the cursor on seats for seat numbers, click to
                        select or deselect.
                      </small>
                      <div className={style.bus}>
                        <div className="flex items-center">
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                          <span>
                            <EventSeat className={style.seatIcon} />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={style.seatRightSide}>
                      <small> Available Seats</small>
                      <small> Booked Seats </small>
                      <small>Selected Seats</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
