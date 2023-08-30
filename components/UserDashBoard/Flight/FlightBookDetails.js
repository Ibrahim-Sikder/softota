import React from "react";
import style from "../../SearhPage/FlightBook/FlightBook.module.css";
import FlightBookLeftSide from "../../SearhPage/FlightBook/FlightBookLeftSide/FlightBookLeftSide";
import RightBook from "../../SearhPage/FlightBook/FlightBookRightSide/RightBook";
const FlightBookDetails = () => {
  return (
    <section>
      <div className={style.flightBookWrap}>
        <div className={style.flightBookLeftSide}>
          <FlightBookLeftSide />
        </div>
        <div className={style.flightBookRightSide}>
          <RightBook/>
        </div>
      </div>
    </section>
  );
};

export default FlightBookDetails;
