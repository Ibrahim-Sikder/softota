import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import Countries from "../../../components/Countries/Countries";
import Passion from "../../../components/Passion/Passion";
import Travel from "../../../components/Travel/Travel";
import dynamic from "next/dynamic";
import VisaHeroBox from "../../../components/UserDashBoard/VisaHeroBox";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
const Visa = () => {
  return (
    <section>
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
            <VisaHeroBox />
            <div className="mt-10">
              <Countries></Countries>
              <Passion></Passion>
              <Travel></Travel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Visa), { ssr: false });
