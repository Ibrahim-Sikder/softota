import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import FlightSearch from "../../../components/SearhPage/FlightSearch/FlightSearch";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";

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
