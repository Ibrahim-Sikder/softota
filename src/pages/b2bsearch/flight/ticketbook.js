import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import Ticketbook from "../../../../components/UserDashBoard/FlightBook/Ticketbook/Ticketbook";

const TicketBook = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.flightBook}>
          <RightSideTopBar />

          <div>
            <Ticketbook></Ticketbook>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(TicketBook), { ssr: false });
