import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import FlightSearch from "../../../../components/UserDashBoard/Flight/FlightSearch";

const flightSearch = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.flightSearchRight}>
          <div className={style.rightSideBarWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar />
              <MoveText />
            </div>
            <div>
              <div className={style.flightSearchWrap}>
                <FlightSearch/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(flightSearch), { ssr: false });
