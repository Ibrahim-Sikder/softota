import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import AgencyCancel from "../../../components/UserDashBoard/Agent/Cancel/AgencyCancel";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
const Completed = () => {
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
            <AgencyCancel></AgencyCancel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Completed), { ssr: false });
