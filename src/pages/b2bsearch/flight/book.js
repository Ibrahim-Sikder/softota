import React from "react";
import style from '../../../../components/UserDashBoard/UserDashBoard.module.css';
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import FlightBook from "../../../../components/UserDashBoard/FlightBook/FlightBook";

const Book = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.flightBook}>
        <RightSideTopBar />

            <div>
              <FlightBook></FlightBook>
            </div>
        </div>
      </div>
    </div>
  );
};


export default dynamic(() => Promise.resolve(Book), { ssr: false });
