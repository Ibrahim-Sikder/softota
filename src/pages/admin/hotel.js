import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import HotelTrending from "../../../components/Hotel/HotelTrending/HotelTrending";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import HotelHeroBox from "../../../components/SuperAdmin/HotelHeroBox/HotelHeroBox";
import RightSideTopBar from "../../../components/SuperAdmin/RightSideTopBar";
import UserDashBoardLeft from "../../../components/SuperAdmin/UserDashBoardLeft";
const Hotel = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
        </div>
        <div className={style.rightSideBar}>
          <div className={style.rightSideWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar/>
              <MoveText/>
            </div>
            <HotelHeroBox />
            <HotelTrending />
            <Travel></Travel>
            <HotelTrending />
            <Customer></Customer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
