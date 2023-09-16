import React from "react";
import style from "../../SearhPage/FlightBook/FlightBook.module.css";
import RightBook from "../../SearhPage/FlightBook/FlightBookRightSide/RightBook";
import B2BFlightBookLeftSide from "../../SearhPage/FlightBook/FlightBookLeftSide/B2BFlightBookLeftSide";
import B2BRightBook from "../../SearhPage/FlightBook/FlightBookRightSide/B2BRightBook";
const B2BFlightDetails = () => {
  return (
    <section>
      <div className={style.flightBookWrap}>
        <div className={style.flightBookLeftSide}>
        <B2BFlightBookLeftSide/>
        </div>
        <div className={style.flightBookRightSide}>
          <B2BRightBook/>
        </div>
      </div>
    </section>
  );
};

export default B2BFlightDetails;
