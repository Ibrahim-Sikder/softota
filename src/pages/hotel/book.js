import React from "react";
import Nav from "../../../components/NavBarr/Nav";
import Footer from "../../../components/Footer/Footer";
import HotelBookLeft from "../../../components/SearhPage/HotelBook/BookLeftSide/HotelBookLeft";
import HotelBookRightSide from "../../../components/SearhPage/HotelBook/RightSide/HotelBookRightSide";
import style from "../../../components/SearhPage/HotelBook/HotelBook.module.css";

const book = () => {


  return (
    <div>
      <Nav />
      <div className={style.flightBookWrap}>
        <div className={style.flightBookLeftSide}>
          <HotelBookLeft
          />
        </div>
        <div className={style.flightBookRightSide}>
          <HotelBookRightSide
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default book;
