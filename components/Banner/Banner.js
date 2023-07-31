import React, { useEffect, useState } from "react";
import style from "./Banner.module.css";
import Image from "next/image";
import banner from "../../public/banner.png";
import NavBar from "../NavBar/NavBar";
import hajj from "../../public/hajj.png";
import tour from "../../public/tour.png";
import train from "../../public/train.png";
import buss from "../../public/Bus.png";
import flight from "../../public/flight.png";
import hotel from "../../public/hotel.png";
import vissa from "../../public/vissa.png";
import Link from "next/link";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import hotelIcon from "../../public/hIcon.png";
import { Add, DataObjectOutlined } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { data } from "autoprefixer";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Banner = ({ setResults }) => {
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const [infant, setInfant] = useState(0);
  const [value, setValue] = React.useState("1");
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const childIncrement = () => {
    setChild(child + 1);
  };
  const childDecrement = () => {
    if (child < 1) {
      setChild(0);
    } else {
      setChild(child - 1);
    }
  };
  const incrementAdult = () => {
    setAdult(adult + 1);
  };
  const decrementAdult = () => {
    if (child < 1) {
      setAdult(0);
    } else {
      setAdult(child - 1);
    }
  };
  const incrementInfant = () => {
    setInfant(infant + 1);
  };
  const decrementInfant = () => {
    if (child < 1) {
      setInfant(0);
    } else {
      setInfant(child - 1);
    }
  };

  // const fetchData = (value) => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const results = json.filter((user) => {
  //         return (
  //           value &&
  //           user &&
  //           user.name &&
  //           user.name.toLowerCase().includes(value)
  //         );
  //       });
  //       setResults(results);
  //     });
  // };
  // const handleChange2 = (value) => {
  //   setInput(value);
  //   fetchData(value);
  // };

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selected, setSelected] = useState([])
  useEffect(() => {
    fetch("search.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData(data);-0
        setFilterData2(data2)
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (value) => {
    const res = filterData.filter((airport) =>
      airport.iata.toLowerCase().includes(value)

    );
    setData(res);

  };

  const [data2, setData2] = useState([]);
  const [filterData2, setFilterData2] = useState([]);
  useEffect(() => {
    fetch("search.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData2(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter2 = (value) => {
    const res = filterData2.filter((airport) =>
      airport.iata.toLowerCase().includes(value)

    );
    setData2(res);

  };

  


  const handleSelect = (iata, name, country)=>{
    const text = iata+ " , "+country+", "+name
    console.log(text);
    setSelected(text)
    setData([])

  }
  // const handleSearch = ()=>{
  //   const searchField = document.getElementById('searchAirport');
  //   const searchText = searchField.value;
  //   const airportCode = data.filter(airport=>airport===searchText)

  // }

  return (
    <div>
      <div className={style.bannerWrap}>
        <h2>Welcome to Ghuronti! Find Tours, Flights & Hotels Packages</h2>
        <div className={style.heroBoxMain}>
          <div className={style.packageWrap}>
            {/* <div className={style.flightGroup}>
              <span>One Way </span>
              <span>Round Trip </span>
              <span>Multiple city </span>
              <span> Group Flight</span>
            </div> */}
          </div>

          {/* menubar */}
          <div>
            <ul className={style.menu}>
              <li>
                <Image src={hajj} alt="menu" width={30} height={30} />
                <Link href="/hajjUmra">
                  <p className="ml-3">Hajj & Umrah</p>
                </Link>
              </li>
              <li>
                <Image src={flight} alt="menu" width={30} height={30} />
                <Link href="/flight">
                  <p className="ml-3">Flight</p>
                </Link>
              </li>
              <li>
                <Image src={hotelIcon} alt="menu" width={30} height={30} />
                <Link href="/hotel">
                  <p className="ml-3">Hotel</p>
                </Link>
              </li>
              <li>
                <Image src={vissa} alt="menu" width={30} height={30} />
                <Link href="/vissa">
                  <p className="ml-3">Vissa</p>
                </Link>
              </li>
              <li>
                <Image src={tour} alt="menu" width={30} height={30} />
                <Link href="/tours">
                  <p className="ml-3">Tours</p>
                </Link>
              </li>
              <li>
                <Image src={buss} alt="menu" width={30} height={30} />
                <Link href="/busses">
                  <p className="ml-3">Buses</p>
                </Link>
              </li>
              <li className={style.trainLi}>
                <Image src={train} alt="menu" width={30} height={30} />
                <Link href="/train">
                  <p className="ml-3">Trains</p>
                </Link>
              </li>
            </ul>
          </div>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                defaultValue={0}
              >
                <Tab label="One Way" {...a11yProps(0)} />
                <Tab label="Round Trip" {...a11yProps(1)} />
                <Tab label="Multiple city" {...a11yProps(2)} />
                <Tab label="Group Flight" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div>
                <div className={style.package}>
                  <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                    value={selected}
                      onChange={(e) => handleFilter(e.target.value)}
                      id="searchAirport"
                      type="text"
                      placeholder="City or Airport "
                    />
                    <div  className={style.searchResult}>
                      {data?.map((d, i) => (
                        <div key={i}>
                          <div onClick={()=>handleSelect(d.iata, d.name, d.country)} className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.package2}>
                  <div className={style.searchTop}>
                    <h4>Flying To</h4>
                    <input
                      id="searchAirport"
                      onChange={(e) => handleFilter(e.target.value)}
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data2?.map((d, i) => (
                        <div key={i}>
                          <div onClick={()=>handleSelect(d.iata, d.name, d.country)} className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.packageWrap}>
                  <div className={style.packageDate}>
                    <div className={style.departDate}>
                      <h4>Depart To</h4>
                      <input type="date" />
                    </div>
                  </div>
                  <div className={style.package4}>
                    <div>
                      <h4>Passengers & Cabin Class</h4>
                      <input type="text " placeholder="1 person" />
                    </div>
                  </div>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div>
                <div className={style.package}>
                  <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                      id="searchAirport"
                      onClick={(e) => handleFilter2(e.target.value)}
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.package2}>
                  <div className={style.searchTop}>
                    <h4>Flying To</h4>
                    <input
                      id="searchAirport"
                      onClick={(e) => handleFilter2(e.target.value)}
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.packageWrap}>
                  <div className={style.packageDate}>
                    <div className={style.date}>
                      <h4>Depart To</h4>
                      <input type="date" />
                    </div>
                    <div className={style.date2}>
                      <h4>Return To </h4>
                      <input type="date" />
                    </div>
                  </div>
                  <div className={style.package4}>
                    <div>
                      <h4>Passengers & Cabin Class</h4>
                      <input type="text " placeholder="1 person" />
                    </div>
                  </div>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className={style.multiplePackageWrap}>
                <div className={style.multiplePackage}>
                  <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                      onChange={(e) => handleFilter(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.multiplePackage}>
                  <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                      onChange={(e) => handleFilter(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data2?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.multiplePackage}>
                  <div>
                    <h4>Select Date </h4>
                    <input type="date" />
                  </div>
                </div>
                <div
                  onClick={() => window.my_modal_3.showModal()}
                  className={style.multiplePackage}
                >
                  <div>
                    <h4 className="text-xs">Passenger </h4>
                    <small>{child + infant + adult} Person</small> <br />
                    <small className="text-xs">Economy class</small>
                  </div>
                </div>

                <div className="modal">
                  {/* You can open the modal using ID.showModal() method */}
                  <button
                    className="btn"
                    onClick={() => window.my_modal_3.showModal()}
                  >
                    open modal
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                      <div>
                        <h3 className="font-bold text-lg">Passenger</h3>
                        <div className={style.passengerWrap}>
                          <div className={style.pLeftSide}>
                            <strong>{child}</strong>
                            <div className="ml-5">
                              <span className="text-xs">Adults</span> <br />
                              <small>12 Years and above </small>
                            </div>
                          </div>
                          <div className={style.adultsBtn}>
                            <span onClick={childDecrement}>-</span>
                            <span onClick={childIncrement}>+</span>
                          </div>
                        </div>
                        <div className={style.passengerWrap}>
                          <div className={style.pLeftSide}>
                            <strong>{adult}</strong>
                            <div className="ml-5">
                              <span className="text-xs">Children</span> <br />
                              <small>2- 11 year at the time of travel </small>
                            </div>
                          </div>
                          <div className={style.adultsBtn}>
                            <span onClick={decrementAdult}>-</span>
                            <span onClick={incrementAdult}>+</span>
                          </div>
                        </div>
                        <div>
                          <TextField
                            className={style.dateOfChild}
                            required
                            id="outlined-required"
                            label="Child 1 Date of Birth "
                            type="date"
                          />
                        </div>
                        <div className={style.passengerWrap}>
                          <div className={style.pLeftSide}>
                            <strong>{infant}</strong>
                            <div className="ml-5">
                              <span className="text-xs">Children</span> <br />
                              <small>0 - 23 month at the time of travel </small>
                            </div>
                          </div>
                          <div className={style.adultsBtn}>
                            <span onClick={decrementInfant}>-</span>
                            <span onClick={incrementInfant}>+</span>
                          </div>
                        </div>
                        <div>
                          <hr className="w-full my-5" />
                        </div>

                        <div className={style.classType}>
                          <p>Cabin class</p>
                          <p>Premium Economy</p>
                          <p>Business class</p>
                          <p>First class</p>
                        </div>
                      </div>
                    </form>
                  </dialog>
                </div>
              </div>
              <div className={style.multiplePackageWrap}>
                <div className={style.multiplePackage}>
                  <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                      onChange={(e) => handleFilter(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.multiplePackage}>
                  <div className={style.searchTop}>
                    <h4>Flying To</h4>
                    <input
                      onChange={(e) => handleFilter2(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data2?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.multiplePackage}>
                  <div>
                    <h4>Select Date </h4>
                    <input type="date" />
                  </div>
                </div>
                <div>
                  <div className={style.addCity}>
                    <Add />
                    <span>Add city</span>
                  </div>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <div>
                <div className={style.package}>
                  <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                      onChange={(e) => handleFilter(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.package2}>
                  <div className={style.searchTop}>
                    <h4>Flying To</h4>
                    <input
                      onChange={(e) => handleFilter2(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data2?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.packageWrap}>
                  <div className={style.packageDate}>
                    <div className={style.date}>
                      <h4>Depart To</h4>
                      <input type="date" />
                    </div>
                    <div className={style.date2}>
                      <h4>Return To </h4>
                      <input type="date" />
                    </div>
                  </div>
                  <div className={style.package4}>
                    <div>
                      <h4>Passengers & Cabin Class</h4>
                      <input type="text " placeholder="1 person" />
                    </div>
                  </div>
                </div>
              </div>
            </CustomTabPanel>
          </Box>
          <button className={style.heroBoxBtn}>Get Your Offers</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
