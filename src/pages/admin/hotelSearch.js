import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import dynamic from "next/dynamic";
import HotelSearch from "../../../components/SearhPage/HotelSearch";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import RightSideTopBar from "../../../components/SuperAdmin/RightSideTopBar";
import UserDashBoardLeft from "../../../components/SuperAdmin/UserDashBoardLeft";

const Hotel = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
        </div>
        <div className={style.hotelSearchRightSideBara}>
         <div className={style.rightSideWrap}>
         <div className={style.profileTop}>
          <RightSideTopBar/>
          <MoveText/>
        </div>
        <div>
        <HotelSearch/>
        </div>
         </div>


        </div>
      </div>
    </div>
  );
};


export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
