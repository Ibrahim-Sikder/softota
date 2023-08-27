import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import RequestCompleted from "../../../components/UserDashBoard/Agent/Completed/RequestCompleted";
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
            <RequestCompleted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Completed), { ssr: false });
