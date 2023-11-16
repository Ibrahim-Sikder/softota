"use client";

import React, { useRef, useState } from "react";
import style from "./SearchBus.module.css";
import bus from "../../../public/assets/bus.png";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Seats from "../Seats/Seats";
import SelectedSeats from "../Seats/SelectedSeat";
const TrainSearch = () => {
  const [chooseSeat, setChooseSeat] = useState("A1", "৳1500", "Economy");
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  const busData = [
    {
      id: 1,
      name: "MAHANAGAR PROVATI",
      price: 900.0,
      departureTime: "10.30AM",
      arrivalTime: "12.20PM",
      seats: 33,
    },
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <main className={style.trainSearchWrap}>
      <div className={style.busTopBar}>
        <div>
          <strong className="block">Departure </strong>
          <div className="flex items-center">
            <Image loading="lazy" alt="bus" src={bus} width={50} height={50} />
            <div>
              <h6>Dhaka - Bandarban</h6>
              <small className="block">19 October, 2023</small>
            </div>
          </div>
        </div>
        <div className={style.topBtnGroup}>
          <div className={style.prevBtn}>
            <FaAngleLeft  />
            <button>PREV DAY</button>
          </div>

         <div className={style.nextBtn}>
         <button>NEXT DAY</button>
          <FaAngleRight />
         </div>
        </div>
        <button className={style.modifyBtn}>Modify Search</button>
      </div>

      <div className={style.busWrap}>
        <div className={style.busCardWrap}>
          <div className={style.searchBusLeftSide}>
           
            <div className={style.seatTypeWrap}>
              <strong className={style.type}>SEAT TYPE </strong>
              <hr className="border"/>
              <div className="mt-2">
                <ul>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>AC_B </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>S_CHAIR</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>F_BERTH </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>SHULOV </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>SNIGDHA </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Jnapath 1 Counter </span>
                    </div>
                  
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>  AC_CHAIR </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.seatTypeWrap}>
              <strong className={style.type}>DEPARTURE TIME </strong>
              <hr className="border"/>
              <div className="mt-2">
                <ul>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>06.00AM - 12.00AM</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>12.00AM - 06.00AM</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>03.00PM - 01.00PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>01.00PM - 03.00PM</span>
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
                    <div className={style.busDetail}>
                      <strong className="capitalize">{bus.name}(SNIGDHA)</strong>
                      <small className="block">Dhaka - Biman_Bandar</small>
                      <p>Starting Point: Uttara</p>
                      <p>End Point: Bandarban</p>
                    </div>
                    <div className={style.busDetail}>
                      <small className="block">DEPARTURE TIME</small>
                      <strong className=" capitalize">{bus.departureTime} </strong>
                    </div>
                    <div className={style.busDetail}>
                    <small className="block" >ARRIVAL TIME</small>
                      <strong className=" capitalize">{bus.arrivalTime} </strong>
               
                    </div>
                    <div className={style.busDetail}>
                      <h5 className=" capitalize">Seats Available</h5>
                      <strong>{bus.seats}</strong>
                    </div>
                    <div className={style.busDetail}>
                    <small className="block" >FARE</small>
                      <h5 className="text-3xl font-bold">৳{bus.price}</h5>
                      <button
                        onClick={handleShowDetails}
                        className={style.viewBtn}
                      >
                        View Details{" "}
                      </button>
                    </div>
                  </div>

                
                  <div
                    className={showDetails ? `${style.show}` : `${style.hide}`}
                  >
                    <div className=" my-5">
                      <b>Choose your seat</b>
                      <hr className="mt-2" />
                      <div className="mt-5 grid grid-cols-2 gap-4">
                        <Seats
                          handleSeatSelection={handleSeatSelection}
                          selectedSeats={selectedSeats}
                        />
                        <SelectedSeats selectedSeats={selectedSeats} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrainSearch;
