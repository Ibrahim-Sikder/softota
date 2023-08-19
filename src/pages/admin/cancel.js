import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import dynamic from "next/dynamic";
import AgencyCancel from "../../../components/UserDashBoard/Agent/Cancel/AgencyCancel";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import RightSideTopBar from "../../../components/SuperAdmin/RightSideTopBar";
import UserDashBoardLeft from "../../../components/SuperAdmin/UserDashBoardLeft";
const Completed = () => {
  return (
    <div>
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
            <AgencyCancel></AgencyCancel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Completed), { ssr: false });
