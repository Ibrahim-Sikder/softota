import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import FlightSearch from "../../../components/SearhPage/FlightSearch/FlightSearch";
import dynamic from "next/dynamic";

const Flight = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.rightSideBar}>
          <div className={style.rightSideBarWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar />
              <div className={style.moveText}>
                <marquee
                  onmouseout="this.start()"
                  onmouseover="this.stop();" behavior="scroll" direction="left"> <h2 className="text-xl font-bold">Ghuronti is your best partner for your journey ! Reserver your best hotel.</h2></marquee>
              </div>
            </div>
            <div>
              <FlightSearch />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};


export default dynamic(() => Promise.resolve(Flight), { ssr: false });
