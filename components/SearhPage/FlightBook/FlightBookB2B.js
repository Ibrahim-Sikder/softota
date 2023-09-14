import React from "react";
import style from "./FlightBook.module.css";
import FlightBookLeftSide from "./FlightBookLeftSide/FlightBookLeftSide";
import RightBook from "./FlightBookRightSide/RightBook";
const FlightBookB2B = () => {
  return (
    <section>
      <div className={style.flightBookWrap}>
        <div className={style.flightBookLeftSide}>
          <FlightBookLeftSide />
        </div>
        <div className={style.flightBookRightSide}>
          <RightBook />
        </div>
      </div>
    </section>
  );
};

export default FlightBookB2B;
