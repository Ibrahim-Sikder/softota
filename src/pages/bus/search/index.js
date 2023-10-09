"use client";

import React, { useRef, useState } from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import style from "./searc.module.css";
import bus from "../../../../public/assets/bus.png";
import Image from "next/image";
import {
  EventSeat,
  CrisisAlert,
  Warning,
  PriorityHigh,
} from "@mui/icons-material";
import dynamic from "next/dynamic";


const Search = () => {
  const [chooseSeat, setChooseSeat] = useState("A1", "৳1500", "Economy");
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
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

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  });

 

  return (
    <div>
      <Nav />
      <div className={style.busWrap}>
      {/* <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <Image
              alt='bus'
              src={img}
              width={500}
              height={500}
              />
            </div>
            <div className="keen-slider__slide number-slide2">
            <Image
              alt='bus'
              src={img2}
              width={500}
              height={500}
              />
            </div>
            <div className="keen-slider__slide number-slide3">
            <Image
              alt='bus'
              src={img}
              width={500}
              height={500}
              />
            </div>
          </div> */}

        <div className={style.busTopBar}>
          <div>
            <strong className="block">Departure </strong>
            <div className="flex items-center">
              <Image alt="bus" src={bus} width={50} height={50} />
              <div>
                <h6>Dhaka - Bandarban</h6>
                <small className="block">19 October, 2023</small>
              </div>
            </div>
          </div>
          <div className={style.totalOperator}>
            <h6>Total Operators Found: 30</h6>
          </div>

          <div>
            <h6>Total Seats Available: 275</h6>
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
            <div className="mt-3">
              <strong>Facilities </strong>
              <div className="mt-2">
                <ul>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Water </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Blanket</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <input type="checkbox" />
                      <span>Dual AC </span>
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
                      <strong className="capitalize">{bus.name}</strong>
                      <small className="block">504-BAN Non AC</small>
                      <p>Starting Point: Uttara</p>
                      <p>End Point: Bandarban</p>
                    </div>
                    <div className={style.busDetail}>
                      <h5 className=" capitalize">{bus.departureTime} </h5>
                      <strong>10:30AM</strong>
                    </div>
                    <div className={style.busDetail}>
                      <h5 className=" capitalize">{bus.arrivalTime} </h5>
                      <strong>10:30AM</strong>
                    </div>
                    <div className={style.busDetail}>
                      <h5 className=" capitalize">Seats Available</h5>
                      <strong>{bus.seats}</strong>
                    </div>
                    <div className={style.busDetail}>
                      <h5 className="text-3xl font-bold">৳{bus.price}</h5>
                      <button
                        onClick={handleShowDetails}
                        className={style.viewBtn}
                      >
                        View Details{" "}
                      </button>
                    </div>
                  </div>

                  <div className={style.policy}>
                    <small>Cancellation Policy </small>
                    <small> Boarding point</small>
                    <small> Dropping point </small>
                    <small>Facilities</small>
                  </div>
                  <div
                    className={showDetails ? `${style.show}` : `${style.hide}`}
                  >
                    <strong>Choose your seat(s)</strong>
                    <hr className="my-2" />
                    <div className={style.availableSeat}>
                      <div className={style.seatLeftSide}>
                        <small>
                          Hold the cursor on seats for seat numbers, click to
                          select or deselect.
                        </small>
                        <div className={style.bus}>
                          <div className="flex items-center justify-between ">
                            <span></span>
                            <span>
                              <CrisisAlert className={style.seatIcon} />
                            </span>
                          </div>
                          <div className={style.seatSelect}>
                            <div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[A1]</small>
                                </div>

                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[A2]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[B1]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[B2]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[C1]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[C2]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[D2]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[D2]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[E1]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[E2]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[F1]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[F2]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[G1]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[G2]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[H1]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[H2]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[I1]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[I2]</small>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center">
                                <div
                                  // onChange={(e) => {
                                  //   const classes = e.target.value;
                                  //   setRoom(classes);
                                  // }}
                                  className={style.showToolTip}
                                >
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[A3]</small>
                                </div>

                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[A4]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[B3]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[B4]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[C3]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[C4]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[D3]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[D4]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[E3]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[E4]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[F3]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[F4]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[G3]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[G4]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[H3]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[H4]</small>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[I3]</small>
                                </div>
                                <div className={style.showToolTip}>
                                  <EventSeat className={style.seatIcon} />
                                  <small className={style.toolTip}>[I4]</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center mt-3">
                          <Warning className={style.warningIcon} />
                          <small>
                            Maximum of 4 seat(s) can be booked at-a-time
                          </small>
                        </div>
                      </div>
                      <div className={style.seatRightSide}>
                        <div className={style.allBookedSeat}>
                          <div className="flex items-center">
                            <EventSeat className={style.seatIcon} />
                            <small> Available Seats</small>
                          </div>
                          <div className="flex items-center mx-5">
                            <EventSeat className={style.seatIcon} />
                            <small> Booked Seats </small>
                          </div>
                          <div className="flex items-center">
                            <EventSeat className={style.seatIcon} />
                            <small>Selected Seats</small>
                          </div>
                        </div>

                        <div>
                          <table className={style.selectedSeat}>
                            <tr>
                              <th>Seats</th>
                              <th>Fare</th>
                              <th>Class</th>
                            </tr>
                            <tr>
                              <td> A1</td>
                              <td> ৳1500 </td>
                              <td> Economy </td>
                            </tr>
                          </table>
                          <div>
                            <strong>Total: ৳30,000</strong>
                          </div>
                          <div>
                            <small>
                              Choose Boarding Point{" "}
                              <span className="text-red-500"> *</span>
                            </small>
                          </div>
                          <form>
                            <select className={style.boardingSelect}>
                              <option value=" -- Boarding points -- ">
                                {" "}
                                -- Boarding points --{" "}
                              </option>
                              <option value="Abdullahpur Bus Point (11:15 PM)">
                                Abdullahpur Bus Point (11:15 PM)
                              </option>
                              <option value=".Norda Bus Point. (11:15 PM) ">
                                {" "}
                                .Norda Bus Point. (11:15 PM)
                              </option>
                              <option value=" Panthapath Bus Point (11:30 PM) ">
                                {" "}
                                Panthapath Bus Point (11:30 PM){" "}
                              </option>
                              <option value=" Fokirapool Bus Point (11:45 PM) ">
                                {" "}
                                Fokirapool Bus Point (11:45 PM){" "}
                              </option>
                              <option value=" Eden(Arambag) Bus Point (11:45 PM) ">
                                {" "}
                                Eden(Arambag) Bus Point (11:45 PM){" "}
                              </option>
                              <option value=" Badda (11:55 PM) ">
                                {" "}
                                Badda (11:55 PM){" "}
                              </option>
                              <option value=" Sayedabad Bus Point (11:55 PM) ">
                                {" "}
                                Sayedabad Bus Point (11:55 PM){" "}
                              </option>
                            </select>
                            <input className={style.phoneNumber} type="text" placeholder="Phone Number" />
                          </form>
                       
                           
                          
                          <div className="flex items-center justify-between my-5">
                            <button className={style.continoueBtn}>
                              Continoue{" "}
                            </button>
                            <small
                              onClick={handleShowDetails}
                              className="underline cursor-pointer hover:text-[#0BB811]"
                            >
                              Close
                            </small>
                          </div>
                          <div className="flex items-center">
                            <PriorityHigh className={style.conditonIcon} />
                            <small>
                              Due to traffic condition, the trip may get
                              canceled.
                            </small>
                          </div>
                        </div>
                      </div>
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

export default dynamic(() => Promise.resolve(Search), { ssr: false });
