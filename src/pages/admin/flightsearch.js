import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../components/SuperAdmin/UserDashBoardLeft";
import RightSideTopBar from "../../../components/SuperAdmin/RightSideTopBar";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import FlightSearch from "../../../components/SearhPage/FlightSearch/FlightSearch";

const Flight = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.flightSearchRight}>
          <div className={style.rightSideBarWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar />
              <MoveText/>
            </div>
            <div>
             <div className={style.flightSearchWrap}>
             <FlightSearch />
             </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};


export default dynamic(() => Promise.resolve(Flight), { ssr: false });
