import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import Countries from "../../../components/Countries/Countries";
import Passion from "../../../components/Passion/Passion";
import Travel from "../../../components/Travel/Travel";
import dynamic from "next/dynamic";
import VisaHeroBox from "../../../components/SuperAdmin/VisaHeroBox";
import RightSideTopBar from "../../../components/SuperAdmin/RightSideTopBar";
import UserDashBoardLeft from "../../../components/SuperAdmin/UserDashBoardLeft";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";


const Visa = () => {
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
    </div>
  );
};

export default dynamic(() => Promise.resolve(Visa), { ssr: false });