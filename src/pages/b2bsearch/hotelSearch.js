import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import HotelSearch from "../../../components/SearhPage/HotelSearch";

const Hotel = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.rightSideBar}>
         <div className={style.rightSideWrap}>
         <div className={style.profileTop}>
          <RightSideTopBar />
          <div className={style.moveText}>
          <marquee
            onmouseout="this.start()"
            onmouseover="this.stop();" behavior="scroll" direction="left"> <h2 className="text-xl font-bold">Ghuronti is your best partner for your journey ! Reserver your best hotel.</h2></marquee>
        </div>
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
