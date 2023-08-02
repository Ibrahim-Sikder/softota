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
import { Add, DataObjectOutlined, Groups2, HorizontalRule} from "@mui/icons-material";
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

  

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selected, setSelected] = useState([])
  useEffect(() => {
    fetch("search.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData(data);
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
  const [selected2, setSelected2] = useState([])
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

  const [data3, setData3] = useState([]);
  const [filterData3, setFilterData3] = useState([]);
  const [selected3, setSelected3] = useState([])
  useEffect(() => {
    fetch("search.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData3(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter3 = (value) => {
    const res = filterData3.filter((airport) =>
      airport.iata.toLowerCase().includes(value)

    );
    setData3(res);

  };

  const [data4, setData4] = useState([]);
  const [filterData4, setFilterData4] = useState([]);
  const [selected4, setSelected4] = useState([])
  useEffect(() => {
    fetch("search.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData4(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter4 = (value) => {
    const res = filterData4.filter((airport) =>
      airport.iata.toLowerCase().includes(value)

    );
    setData4(res);

  };
  // const [passengerClass, setPassengerClass] = useState([{First: 'Cabin', Second: 'Premium', Third: 'Economy'}]);
  const [data5, setData5] = useState([]);
  const [filterData5, setFilterData5] = useState([]);
  const [selected5, setSelected5] = useState([])
  useEffect(() => {
    fetch("search.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData5(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter5 = (value) => {
    const res = filterData5.filter((airport) =>
      airport.iata.toLowerCase().includes(value)

    );
    setData5(res);

  };

  const [data6, setData6] = useState([]);
  const [filterData6, setFilterData6] = useState([]);
  const [selected6, setSelected6] = useState([])
  useEffect(() => {
    fetch("search.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData6(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter6 = (value) => {
    const res = filterData6.filter((airport) =>
      airport.iata.toLowerCase().includes(value)

    );
    setData6(res);

  };


  const handleSelect = (iata, name, country)=>{
    const text = iata+ " , "+country+", "+name
    console.log(text);
    setSelected(text)
    setData([])
  } 


  const handleSelect2 = (iata, name, country)=>{
    const text = iata+ " , "+country+", "+name
    console.log(text);
    setSelected2(text)
    setData2([])
  }
  const handleSelect3 = (iata, name, country)=>{
    const text = iata+ " , "+country+", "+name
    console.log(text);
    setSelected3(text)
    setData3([])
  }
  const handleSelect4 = (iata, name, country)=>{
    const text = iata+ " , "+country+", "+name
    console.log(text);
    setSelected4(text)
    setData4([])
  } 

  const handleSelect5 = (iata, name, country)=>{
    const text = iata+ " , "+country+", "+name
    console.log(text);
    setSelected5(text)
    setData5([])
  } 

  const handleSelect6 = (iata, name, country)=>{
    const text = iata+ " , "+country+", "+name
    console.log(text);
    setSelected6(text)
    setData6([])
  }
 


  const [inputList, setinputList]= useState([{flyingFrom:'', flyingTo:'', date:''}]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);

  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, { flyingFrom:'', flyingTo:'', date:''}]);
  }




  return (
    <div>
      <div className={style.bannerWrap}>
        <h2>Welcome to Ghuronti! Find Tours, Flights & Hotels Packages</h2>
        <div className={style.heroBoxMain}>
         
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
         <div className={style.flightWay}>
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
               <div className={style.oneWayPackage}>
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
                    value={selected2}
                      id="searchAirport"
                      onChange={(e) => handleFilter2(e.target.value)}
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data2?.map((d, i) => (
                        <div key={i}>
                          <div onClick={()=>handleSelect2(d.iata, d.name, d.country)} className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
               </div>
                <div className={style.packageWrap}>
                <div className={style.oneWayPackage}>
                <div className={style.packageDate}>
                    <div className={style.departDate}>
                      <h4>Depart To</h4>
                      <input type="date" />
                    </div>
                  </div>
                 <div >
                 <div 
                  
                  className={style.package4}>
                    <div className='flex justify-between'>
                        <div>
                        <small>{child + infant + adult} Person</small> <br />
                      <h4>Passengers & Class</h4>
                        </div>
                      <Groups2 onClick={() => window.my_modal_3.showModal()} className={style.showModalIcon}/>
                    </div>
                   
                  </div>
                 </div>
                </div>
                  
                {/* Open modala  */}
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
                            id="outlined-required"
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
                          <p >Cabin class</p>
                          <p>Premium Economy</p>
                          <p>Business class</p>
                          <p>First class</p>
                        </div>
                      </div>
                    </form>
                  </dialog>
                </div>

                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div>
                <div className={style.roundTripWrap}>
                <div className={style.package}>
                <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                    value={selected3}
                      id="searchAirport"
                      onChange={(e) => handleFilter3(e.target.value)}
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data3?.map((d, i) => (
                        <div key={i}>
                          <div onClick={()=>handleSelect3(d.iata, d.name, d.country)} className={style.airport}>
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
                    <h4>Flying From</h4>
                    <input
                    value={selected4}
                      id="searchAirport"
                      onChange={(e) => handleFilter4(e.target.value)}
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data4?.map((d, i) => (
                        <div key={i}>
                          <div onClick={()=>handleSelect4(d.iata, d.name, d.country)} className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
                
                <div className={style.packageWrap}>
                  <div className={style.packageDate}>
                    <div  className={style.roundTripWrap}>
                    <div className={style.date}>
                      <h4>Depart To</h4>
                      <input type="date" />
                    </div>
                    <div className={style.date2}>
                      <h4>Return To </h4>
                      <input type="date" />
                    </div>
                    <div
                  onClick={() => window.my_modal_3.showModal()}
                   className={style.package4}>
                      <div className='flex justify-between'>
                        <div>
                        <small>{child + infant + adult} Person</small> <br />
                      <h4>Passengers & Cabin Class</h4>
                        </div>
                      <Groups2 onClick={() => window.my_modal_3.showModal()} className={style.showModalIcon}/>
                    </div>
                  
                  </div>
                    </div>
                    
                  </div>
                  
                  {/* open modal */}
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
                            id="outlined-required"
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
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className={style.multiplePackageWrap}>
                <div className={style.multiplePackage}>
                <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                    value={selected5}
                      id="searchAirport"
                      onChange={(e) => handleFilter5(e.target.value)}
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data5?.map((d, i) => (
                        <div key={i}>
                          <div onClick={()=>handleSelect5(d.iata, d.name, d.country)} className={style.airport}>
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
                    value={selected6}
                      id="searchAirport"
                      onChange={(e) => handleFilter6(e.target.value)}
                      type="text "
                      placeholder="City or Airport "
                    />
                    <div className={style.searchResult}>
                      {data6?.map((d, i) => (
                        <div key={i}>
                          <div onClick={()=>handleSelect6(d.iata, d.name, d.country)} className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div  className={style.multiplePackage}>
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
                            id="outlined-required"
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

              { 
            inputList.map( (x,i)=>{
              return(

              <div key={i} className={style.multiplePackageWrap}>
                <div className={style.multiplePackage}>
                  <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                    
                      // onChange={(e) => handleFilter(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    {/* <div className={style.searchResult}>
                      {data?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
                <div className={style.multiplePackage}>
                  <div className={style.searchTop}>
                    <h4>Flying To</h4>
                    <input
                      // onChange={(e) => handleFilter2(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    {/* <div className={style.searchResult}>
                      {data2?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
                <div className={style.multiplePackage}>
                  <div>
                    <h4>Select Date </h4>
                    <input onChange={ e=>handleinputchange(e,i) } type="date" />
                  </div>
                </div>

                { 
                   
                   inputList.length!==1 &&
                <div  onClick={()=> handleremove(i)}>
                  <div className={style.removeCity}>
                    <HorizontalRule />
                    <span>Remove City </span>
                  </div>
                </div>
                  }
                
                   
                  { inputList.length-1===i &&
                <div onClick={ handleaddclick}>
                  <div className={style.addCity}>
                    <Add />
                    <span>Add City</span>
                  </div>
                </div>
                  }

                

              </div>
             );
            } )} 

            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <div>
                <div className={style.groupFlight}>
                <div className={style.package}>
                  <div className={style.searchTop}>
                    <h4>Flying From</h4>
                    <input
                      // onChange={(e) => handleFilter(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    {/* <div className={style.searchResult}>
                      {data?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
                <div className={style.package2}>
                  <div className={style.searchTop}>
                    <h4>Flying To</h4>
                    <input
                      // onChange={(e) => handleFilter2(e.target.value)}
                      id="searchAirport"
                      type="text "
                      placeholder="City or Airport "
                    />
                    {/* <div className={style.searchResult}>
                      {data2?.map((d, i) => (
                        <div key={i}>
                          <div className={style.airport}>
                            <h6 className="mr-3">{d.iata}</h6>
                            <p>,{d.country}</p>
                            <p>,{d.name}</p>
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
                </div>
                
                <div className={style.packageWrap}>
                  <div className={style.packageDate}>
                    <div className={style.groupFlight}>
                    <div className={style.date}>
                      <h4>Depart To</h4>
                      <input type="date" />
                    </div>
                    <div className={style.date2}>
                      <h4>Return To </h4>
                      <input type="date" />
                    </div>
                    <div className={style.package4}>
                    <div>
                      <h4>Passengers & Cabin Class</h4>
                      <input type="text " placeholder="1 person" />
                    </div>
                  </div>
                    </div>
                    
                  </div>
                 
                </div>
              </div>
            </CustomTabPanel>
          </Box>
         </div>
         <div className={style.btnWrap}>
         <button className={style.heroBoxBtn}>Get Your Offers</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
