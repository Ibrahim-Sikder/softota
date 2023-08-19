import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import BestPlace from "../../../components/BestPlace/BestPlace";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import HeroBox from "../../../components/UserDashBoard/HeroBox";
import TourDestination from "../../../components/Tour/TourDestination";
import dynamic from "next/dynamic";
import TourHeroBox from "../../../components/UserDashBoard/TourHeroBox";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";

const Train = () => {
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
              <MoveText />
            </div>
            <div>
              <TourHeroBox />
              <BestPlace></BestPlace>
              <Travel></Travel>
              <TourDestination></TourDestination>
              <Customer></Customer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Train), { ssr: false });
