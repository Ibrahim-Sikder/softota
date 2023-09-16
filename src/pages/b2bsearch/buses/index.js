import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import TourDestination from "../../../../components/Tour/TourDestination";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import BusesHeroBox from "../../../../components/UserDashBoard/BusesHeroBox/BusesHeroBox";
import BestPlace from "../../../../components/BestPlace/BestPlace";
import Customer from "../../../../components/Customer/Customer";
import Travel from "../../../../components/Travel/Travel";
import Footer from "../../../../components/Footer/Footer";

const Buses = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
        </div>
        <div className={style.rightSideBar}>
          <div className={style.rightSideWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar />
              <MoveText/>
            </div>
            <div></div>
            <BusesHeroBox/>
            <BestPlace/>
            <Travel></Travel>
            <TourDestination></TourDestination>
            <Customer></Customer>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Buses), { ssr: false });
